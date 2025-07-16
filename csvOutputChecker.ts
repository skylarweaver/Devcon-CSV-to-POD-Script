#!/usr/bin/env ts-node

// csvOutputChecker.ts
//
// POD Output CSV Checker
//
// Usage:
//   npx ts-node csvOutputChecker.ts <output-csv-path>
//
// - Checks the output CSV from csv-to-pod-converter for required columns (EMAIL, POD, POD_URLENCODED)
// - For each row, parses the POD JSON, checks for required fields, and verifies the POD signature
// - Flags duplicate emails as warnings
// - Logs errors and warnings to the console and summarizes results
//
// Prerequisites:
//   - Run `npm install` in this directory to install dependencies
//   - Requires Node.js and ts-node
//
// Example:
//   npx ts-node csvOutputChecker.ts outputs/new_pods.csv
//
// No data is sent externally; all checks are local.

import * as fs from 'fs';
import * as path from 'path';
import csv from 'csv-parser';
import { POD } from '@pcd/pod';

const REQUIRED_COLUMNS = ['EMAIL', 'POD', 'POD_URLENCODED'];

function checkRequiredColumns(headers: string[]): string[] {
  return REQUIRED_COLUMNS.filter(col => !headers.includes(col));
}

const REQUIRED_POD_FIELDS = [
  'productId',
  'eventId',
  'attendeeName',
  'attendeeEmail',
  'ticketName',
  'ticketSecret',
  'ticketId',
  'eventName',
  'timestampSigned',
  'timestampConsumed'
];

async function main() {
  const args = process.argv.slice(2);
  if (args.length < 1) {
    console.error('Usage: ts-node csvOutputChecker.ts <output-csv-path>');
    process.exit(1);
  }
  const [csvPath] = args;
  if (!fs.existsSync(csvPath)) {
    console.error(`File not found: ${csvPath}`);
    process.exit(1);
  }

  let rowCount = 0;
  let headersChecked = false;
  let missingColumns: string[] = [];
  const emails = new Set<string>();
  const duplicateEmails: string[] = [];
  const errors: string[] = [];
  const warnings: string[] = [];
  let validCount = 0;
  let invalidCount = 0;

  fs.createReadStream(csvPath)
    .pipe(csv())
    .on('headers', (headers: string[]) => {
      headersChecked = true;
      missingColumns = checkRequiredColumns(headers);
      if (missingColumns.length > 0) {
        errors.push(`Missing required columns: ${missingColumns.join(', ')}`);
      }
    })
    .on('data', (row: any) => {
      rowCount++;
      const email = row['EMAIL'];
      const pod = row['POD'];
      const podUrl = row['POD_URLENCODED'];
      // Check for missing/empty required columns in the row
      if (!email || email.trim() === '') {
        errors.push(`[Row ${rowCount}] Missing EMAIL.`);
        invalidCount++;
        return;
      }
      if (!pod || pod.trim() === '') {
        errors.push(`[Row ${rowCount}] Missing POD for email: ${email}`);
        invalidCount++;
        return;
      }
      if (!podUrl || podUrl.trim() === '') {
        errors.push(`[Row ${rowCount}] Missing POD_URLENCODED for email: ${email}`);
        invalidCount++;
        return;
      }
      if (emails.has(email)) {
        duplicateEmails.push(email);
      } else {
        emails.add(email);
      }
      // Parse POD JSON
      let podJson: any;
      try {
        podJson = JSON.parse(pod);
      } catch (e) {
        errors.push(`[Row ${rowCount}] Invalid POD JSON for email: ${email}`);
        invalidCount++;
        return;
      }
      // Check required POD fields
      const podEntries = podJson.entries || {};
      for (const field of REQUIRED_POD_FIELDS) {
        if (!(field in podEntries) || podEntries[field] == null || podEntries[field] === '') {
          errors.push(`[Row ${rowCount}] Missing required POD field '${field}' for email: ${email}`);
        }
      }
      // Validate POD structure and signature
      try {
        const podObj = POD.fromJSON(podJson);
        if (!podObj.verifySignature()) {
          errors.push(`[Row ${rowCount}] Invalid POD signature for email: ${email}`);
          invalidCount++;
          return;
        }
        validCount++;
      } catch (e) {
        errors.push(`[Row ${rowCount}] POD structure/signature error for email: ${email}: ${e instanceof Error ? e.message : e}`);
        invalidCount++;
        return;
      }
    })
    .on('end', () => {
      console.log(`Checked ${rowCount} rows.`);
      if (missingColumns.length > 0) {
        console.error('CSV is missing required columns.');
      }
      if (duplicateEmails.length > 0) {
        warnings.push(`Duplicate emails found (warning): ${[...new Set(duplicateEmails)].join(', ')}`);
      }
      if (errors.length > 0) {
        console.error('Errors:');
        for (const err of errors) {
          console.error('  ' + err);
        }
      }
      if (warnings.length > 0) {
        console.warn('Warnings:');
        for (const warn of warnings) {
          console.warn('  ' + warn);
        }
      }
      console.log(`Valid Rows: ${validCount}`);
      console.log(`Invalid Rows: ${invalidCount}`);
      if (errors.length === 0) {
        console.log('All PODs are valid and all required fields are present.');
      }
    })
    .on('error', (err: any) => {
      console.error('Error reading CSV:', err);
      process.exit(1);
    });
}

if (require.main === module) {
  main();
} 