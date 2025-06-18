#!/usr/bin/env ts-node

import * as fs from 'fs';
import * as path from 'path';
import csv from 'csv-parser';
import { createObjectCsvWriter } from 'csv-writer';
import { POD, PODEntries } from '@pcd/pod';

interface AttendeeData {
  attendeeName: string;
  attendeeEmail: string;
  ticketName: string;
  ticketSecret: string;
  ticketId: string;
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
  eventId: "5074edf5-f079-4099-b036-22223c0c69953",
  productId: "f15237ec-abd9-40ae-8e61-9cf8a7a60c3f3",
  timestampConsumed: 1731226670791,
  imageUrl: "/images/devcon/devcon-landscape.webp",
  eventStartDate: "2024-11-09T08:00:00.000",
  eventLocation: "Bangkok, Thailand",
  isAddOn: false,
  isConsumed: true,
  isRevoked: false,
  ticketCategory: 4
};

function createTicketPODData(attendee: AttendeeData): TicketPODData {
  return {
    ...attendee,
    ...HARDCODED_VALUES,
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
    
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (row: any) => {
        attendees.push({
          attendeeName: row.attendeeName || row.attendee_name || '',
          attendeeEmail: row.attendeeEmail || row.attendee_email || '',
          ticketName: row.ticketName || row.ticket_name || '',
          ticketSecret: row.ticketSecret || row.ticket_secret || '',
          ticketId: row.ticketId || row.ticket_id || ''
        });
      })
      .on('end', () => resolve(attendees))
      .on('error', reject);
  });
}

async function createSignedPODs(attendees: AttendeeData[], signerPrivateKey: string): Promise<Array<{email: string, pod: string}>> {
  const results: Array<{email: string, pod: string}> = [];
  
  for (const attendee of attendees) {
    try {
      const ticketData = createTicketPODData(attendee);
      const podEntries = createPODEntries(ticketData);
      
      // Create and sign the POD
      const pod = POD.sign(podEntries, signerPrivateKey);
      
      // Convert to JSON string for CSV output
      const podJson = JSON.stringify(pod.toJSON());
      
      results.push({
        email: attendee.attendeeEmail,
        pod: podJson
      });
      
      console.log(`Created POD for ${attendee.attendeeEmail}`);
    } catch (error) {
      console.error(`Failed to create POD for ${attendee.attendeeEmail}:`, error);
    }
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
    console.error('Input CSV should contain columns: attendeeName, attendeeEmail, ticketName, ticketSecret, ticketId');
    process.exit(1);
  }
  
  const [inputPath, signerPrivateKey, outputPath] = args;
  
  try {
    console.log('Parsing input CSV...');
    const attendees = await parseCsvFile(inputPath);
    console.log(`Found ${attendees.length} attendees`);
    
    if (attendees.length === 0) {
      console.error('No attendees found in input CSV');
      process.exit(1);
    }
    
    console.log('Creating and signing PODs...');
    const signedPODs = await createSignedPODs(attendees, signerPrivateKey);
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