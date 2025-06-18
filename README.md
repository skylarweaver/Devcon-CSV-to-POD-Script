# CSV to POD Script

A TypeScript application that converts CSV attendee data into cryptographically signed Provable Object Data (PODs) for event ticketing and verification.

## Overview

This script processes CSV files containing event attendee information and generates cryptographically signed POD (Provable Object Data) tickets. PODs are a cryptographic format that enables zero-knowledge proofs, allowing attendees to prove their ticket validity without revealing all ticket details.

## What are PODs?

POD (Provable Object Data) is a cryptographic format that enables any app to create zero-knowledge proofs about data. Each POD is:
- A signed key-value store containing structured data
- Cryptographically verifiable using the issuer's signature  
- Compatible with zero-knowledge proof systems
- Suitable for selective disclosure (proving some fields without revealing others)

In this application, PODs represent event tickets with attendee information, event details, and cryptographic proofs of authenticity.

## Features

- **CSV Input Processing**: Reads attendee data from CSV files with flexible column naming
- **POD Generation**: Creates cryptographically signed POD tickets for each attendee
- **Hardcoded Event Data**: Automatically includes predefined event information (specifically for Devcon SEA)
- **CSV Output**: Exports signed PODs as JSON strings in a CSV format
- **Error Handling**: Gracefully handles individual POD creation failures
- **TypeScript**: Full type safety and modern JavaScript features

## Requirements

- Node.js (v16 or later)
- npm or yarn package manager

## Installation

1. Clone or download this repository
2. Install dependencies:
```bash
npm install
```

## Usage

### Command Line Interface

```bash
npm run dev <input-csv-path> <signer-private-key> <output-csv-path>
```

**Parameters:**
- `input-csv-path`: Path to the CSV file containing attendee data
- `signer-private-key`: 32-byte private key (base64 encoded) for signing PODs
- `output-csv-path`: Path where the output CSV with signed PODs will be saved

### Example

```bash
npm run dev sample_input.csv "your-base64-private-key-here" output.csv
```

### Quick Test Command

To quickly test the script with the included sample data, copy and paste this command:

```bash
npm run dev sample_input.csv "dGVzdGtleWZvcmRldmNvbnBvZHRlc3RrZXlmb3Jkdng=" test_output.csv
```

This uses:
- `sample_input.csv` - The included sample CSV file  
- `dGVzdGtleWZvcmRldmNvbnBvZHRlc3RrZXlmb3Jkdng=` - A test private key (base64 encoded, 32 bytes)
- `test_output.csv` - Output file that will be created

### Alternative Commands

```bash
# Build and run compiled JavaScript
npm run build
npm start <input-csv-path> <signer-private-key> <output-csv-path>

# Direct TypeScript execution
npx ts-node csvToPod.ts <input-csv-path> <signer-private-key> <output-csv-path>
```

## Input CSV Format

The input CSV must contain the following columns (supports both camelCase and snake_case):

| Column | Alternative | Description |
|--------|-------------|-------------|
| `attendeeName` | `attendee_name` | Full name of the attendee |
| `attendeeEmail` | `attendee_email` | Email address of the attendee |
| `ticketName` | `ticket_name` | Type/category of ticket |
| `ticketSecret` | `ticket_secret` | Unique secret for the ticket |
| `ticketId` | `ticket_id` | Unique identifier for the ticket |

**Note:** The event name is hardcoded as "Devcon 7" and does not need to be included in the CSV.

### Sample Input CSV
```csv
attendeeName,attendeeEmail,ticketName,ticketSecret,ticketId
Joe Shmo,joe@shmo.org,EFer,naswv9f9wb28357u43h9fh4pqn3p3h4gd,2166b436-ac39-5f69-8700-e1dfceae37ebd
Alice Smith,alice@example.com,Developer,xkcd123secretkey456789abcdef,a1b2c3d4-e5f6-7890-abcd-ef1234567890
```

## Output Format

The script generates a CSV file with two columns:
- `EMAIL`: The attendee's email address
- `POD`: JSON string containing the signed POD data

Each POD contains all the ticket information in a cryptographically signed format that can be verified and used for zero-knowledge proofs.

## POD Structure

Each generated POD contains the following fields:

### From Input CSV:
- `attendeeName` (string): Attendee's full name
- `attendeeEmail` (string): Attendee's email address  
- `ticketName` (string): Ticket type/category
- `ticketSecret` (string): Unique ticket secret
- `ticketId` (string): Unique ticket identifier

### Hardcoded Event Data:
- `eventName` (string): "Devcon 7"
- `eventId` (string): "5074edf5-f079-4099-b036-22223c0c69953"
- `productId` (string): "f15237ec-abd9-40ae-8e61-9cf8a7a60c3f3"
- `timestampConsumed` (int): 1731226670791
- `imageUrl` (string): "/images/devcon/devcon-landscape.webp"
- `eventStartDate` (string): "2024-11-09T08:00:00.000"
- `eventLocation` (string): "Bangkok, Thailand"
- `isAddOn` (boolean): false
- `isConsumed` (boolean): true
- `isRevoked` (boolean): false
- `ticketCategory` (int): 4

### Generated Fields:
- `timestampSigned` (int): Unix timestamp when the POD was created

## Technical Details

### Dependencies

- **@pcd/pod**: Cryptographic POD library for creating and signing PODs
- **csv-parser**: Streaming CSV parser for reading input files
- **csv-writer**: CSV generation library for output files
- **typescript**: TypeScript compiler and runtime support

### Architecture

The application follows a functional architecture with clear separation of concerns:

1. **CSV Parsing** (`parseCsvFile`): Streams and parses input CSV data
2. **Data Transformation** (`createTicketPODData`): Combines input data with hardcoded values  
3. **POD Entry Creation** (`createPODEntries`): Converts data to POD-compatible format
4. **POD Signing** (`createSignedPODs`): Creates and cryptographically signs each POD
5. **Output Generation** (`writePODsToCSV`): Exports signed PODs to CSV format

### Error Handling

- Individual POD creation failures are logged but don't stop processing of other attendees
- Input validation ensures required command line arguments are provided
- Empty CSV files are detected and reported
- All async operations include proper error handling

### Security Considerations

- Private keys are passed as command line arguments (consider environment variables for production)
- PODs are cryptographically signed and tamper-evident
- Ticket secrets are included in PODs - ensure input data security
- Generated PODs can be verified using the corresponding public key

## Development

### Building
```bash
npm run build
```

### Running in Development
```bash
npm run dev <args>
```

### Project Structure
```
├── csvToPod.ts          # Main application file
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── sample_input.csv     # Example input file
└── README.md           # This file
```

## Use Cases

This tool is designed for:
- **Event Organizers**: Generate verifiable digital tickets for attendees
- **Zero-Knowledge Applications**: Create privacy-preserving proof systems for event attendance
- **Credential Systems**: Issue cryptographic credentials that can be selectively disclosed
- **Access Control**: Generate tamper-proof access tokens for events or services

## License

This project uses the MIT licensed [@pcd/pod](https://www.npmjs.com/package/@pcd/pod) library for POD cryptography.