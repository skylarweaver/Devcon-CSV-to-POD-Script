#!/usr/bin/env ts-node

import * as fs from 'fs';
import * as path from 'path';
import csv from 'csv-parser';
import { createObjectCsvWriter } from 'csv-writer';
import { POD, PODEntries } from '@pcd/pod';
import { v4 as uuidv4 } from 'uuid';

interface AttendeeData {
  attendeeName: string;
  attendeeEmail: string;
  ticketName: string;
  ticketSecret: string;
  ticketId: string;
  product: string; // Product name from CSV
}

interface TicketPODData {
  attendeeName: string;
  attendeeEmail: string;
  eventName: string;
  ticketName: string;
  ticketSecret: string;
  ticketId: string;
  eventId: string;
  productId: string;
  timestampConsumed: number;
  timestampSigned: number;
  imageUrl: string;
  eventStartDate: string;
  eventLocation: string;
  isAddOn: boolean;
  isConsumed: boolean;
  isRevoked: boolean;
  ticketCategory: number;
}

// Hardcoded constants as specified
const HARDCODED_VALUES = {
  eventName: "Devcon 7",
  // eventId and productId will be set per attendee
  timestampConsumed: 1731226670791,
  imageUrl: "/images/devcon/devcon-landscape.webp",
  eventStartDate: "2024-11-09T08:00:00.000",
  eventLocation: "Bangkok, Thailand",
  isAddOn: false,
  isConsumed: true,
  isRevoked: false,
  ticketCategory: 4
};

function createTicketPODData(attendee: AttendeeData, productId: string, eventId: string): TicketPODData {
  return {
    ...attendee,
    ...HARDCODED_VALUES,
    productId,
    eventId,
    timestampSigned: Date.now()
  };
}

function createPODEntries(ticketData: TicketPODData): PODEntries {
  return {
    attendeeName: { type: "string", value: ticketData.attendeeName },
    attendeeEmail: { type: "string", value: ticketData.attendeeEmail },
    eventName: { type: "string", value: ticketData.eventName },
    ticketName: { type: "string", value: ticketData.ticketName },
    ticketSecret: { type: "string", value: ticketData.ticketSecret },
    ticketId: { type: "string", value: ticketData.ticketId },
    eventId: { type: "string", value: ticketData.eventId },
    productId: { type: "string", value: ticketData.productId },
    timestampConsumed: { type: "int", value: BigInt(ticketData.timestampConsumed) },
    timestampSigned: { type: "int", value: BigInt(ticketData.timestampSigned) },
    imageUrl: { type: "string", value: ticketData.imageUrl },
    eventStartDate: { type: "string", value: ticketData.eventStartDate },
    eventLocation: { type: "string", value: ticketData.eventLocation },
    isAddOn: { type: "boolean", value: ticketData.isAddOn },
    isConsumed: { type: "boolean", value: ticketData.isConsumed },
    isRevoked: { type: "boolean", value: ticketData.isRevoked },
    ticketCategory: { type: "int", value: BigInt(ticketData.ticketCategory) }
  };
}

async function parseCsvFile(filePath: string): Promise<AttendeeData[]> {
  return new Promise((resolve, reject) => {
    const attendees: AttendeeData[] = [];
    let checkedHeaders = false;
    let requiredHeaders = [
      'Attendee name',
      'Attendee email',
      'Product',
      'Ticket secret'
    ];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('headers', (headers: string[]) => {
        checkedHeaders = true;
        for (const req of requiredHeaders) {
          if (!headers.includes(req)) {
            reject(new Error(`Missing required column: '${req}'. Please provide a CSV with the expected columns.`));
            return;
          }
        }
      })
      .on('data', (row: any) => {
        attendees.push({
          attendeeName: row['Attendee name'],
          attendeeEmail: row['Attendee email'],
          ticketName: row['Product'],
          ticketSecret: row['Ticket secret'],
          ticketId: uuidv4(),
          product: row['Product']
        });
      })
      .on('end', () => resolve(attendees))
      .on('error', reject);
  });
}

const MISSING_PRODUCTS_LOG = path.join(process.cwd(), 'missing_products.log');

function mapProductNameToId(productName: string, productMap: Record<string, string>, attendeeEmail: string, rowIdx: number): string | undefined {
  if (!productName) {
    const msg = `[Row ${rowIdx}] Missing product name for attendee: ${attendeeEmail}`;
    console.error(msg);
    fs.appendFileSync(MISSING_PRODUCTS_LOG, msg + '\n');
    return undefined;
  }
  const id = productMap[productName];
  if (!id) {
    const msg = `[Row ${rowIdx}] Product name not found in mapping: '${productName}' for attendee: ${attendeeEmail}`;
    console.error(msg);
    fs.appendFileSync(MISSING_PRODUCTS_LOG, msg + '\n');
    return undefined;
  }
  return id;
}

async function createSignedPODs(attendees: AttendeeData[], signerPrivateKey: string, productMap: Record<string, string>): Promise<Array<{email: string, pod: string}>> {
  // Clear the log file at the start
  fs.writeFileSync(MISSING_PRODUCTS_LOG, '');
  const results: Array<{email: string, pod: string}> = [];
  let rowIdx = 1;
  const HARDCODED_EVENT_ID = "5074edf5-f079-4099-b036-22223c0c6995";
  for (const attendee of attendees) {
    // Map product name to productId
    const productId = mapProductNameToId(attendee.product, productMap, attendee.attendeeEmail, rowIdx);
    if (!productId) {
      rowIdx++;
      continue; // Skip this attendee
    }
    try {
      const ticketData = createTicketPODData(attendee, productId, HARDCODED_EVENT_ID);
      const podEntries = createPODEntries(ticketData);
      const pod = POD.sign(podEntries, signerPrivateKey);
      const podJson = JSON.stringify(pod.toJSON());
      results.push({
        email: attendee.attendeeEmail,
        pod: podJson
      });
      console.log(`Created POD for ${attendee.attendeeEmail}`);
    } catch (error) {
      console.error(`Failed to create POD for ${attendee.attendeeEmail}:`, error);
    }
    rowIdx++;
  }
  return results;
}

async function writePODsToCSV(pods: Array<{email: string, pod: string}>, outputPath: string): Promise<void> {
  const csvWriter = createObjectCsvWriter({
    path: outputPath,
    header: [
      { id: 'email', title: 'EMAIL' },
      { id: 'pod', title: 'POD' }
    ]
  });
  
  await csvWriter.writeRecords(pods);
  console.log(`Output written to ${outputPath}`);
}

// --- Product Mapping Loader ---
interface ProductMappingEntry {
  productName: string;
  productId: string;
}

function loadProductMapping(mappingPath: string): Record<string, string> {
  const mappingRaw = fs.readFileSync(mappingPath, 'utf-8');
  const mappingJson = JSON.parse(mappingRaw);
  // mappingJson is an array of objects with productName and productId
  // The actual file may have different field names, so adapt as needed
  // For swag-removed-list.json, productName is 'productName' or 'productName' (case sensitive)
  // But from the sample, it's 'productName' or 'productName' (check actual field)
  // Let's check for 'productName' and fallback to 'productName' if needed
  const map: Record<string, string> = {};
  for (const entry of mappingJson) {
    // Try to get productName from 'productName' or fallback to 'productName'
    const name = entry.productName || entry.product_name || entry.product || entry.productName;
    const id = entry.productId || entry.product_id || entry.productId;
    if (name && id) {
      map[name] = id;
    }
  }
  return map;
}

async function main() {
  const args = process.argv.slice(2);
  
  if (args.length < 3) {
    console.error('Usage: ts-node csvToPod.ts <input-csv-path> <signer-private-key> <output-csv-path>');
    console.error('');
    console.error('Arguments:');
    console.error('  input-csv-path     Path to the input CSV file with attendee data');
    console.error('  signer-private-key Private key for signing PODs (32 bytes, base64 encoded)');
    console.error('  output-csv-path    Path for the output CSV file with signed PODs');
    console.error('');
    console.error('Input CSV should contain columns: attendeeName, attendeeEmail, ticketName, ticketSecret, ticketId, Product');
    process.exit(1);
  }
  
  const [inputPath, signerPrivateKey, outputPath] = args;
  const mappingPath = path.join(__dirname, '../devconSEAProductIDs/swag-removed-list.json');

  // Load product mapping
  let productMap: Record<string, string> = {};
  try {
    productMap = loadProductMapping(mappingPath);
    console.log(`Loaded ${Object.keys(productMap).length} products from mapping file.`);
  } catch (e) {
    console.error('Failed to load product mapping:', e);
    process.exit(1);
  }
  
  try {
    console.log('Parsing input CSV...');
    const attendees = await parseCsvFile(inputPath);
    console.log(`Found ${attendees.length} attendees`);
    
    if (attendees.length === 0) {
      console.error('No attendees found in input CSV');
      process.exit(1);
    }
    
    console.log('Creating and signing PODs...');
    const signedPODs = await createSignedPODs(attendees, signerPrivateKey, productMap);
    console.log(`Successfully created ${signedPODs.length} PODs`);
    
    console.log('Writing output CSV...');
    await writePODsToCSV(signedPODs, outputPath);
    
    console.log('Done!');
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}