# CSV to POD Script

Converts attendee CSV data into cryptographically signed Provable Object Data (PODs) for event ticketing and verification.

## Usage

```bash
npx ts-node csvToPod.ts inputs/sample_input.csv "<signer-private-key>" outputs/new_pods.csv
```
- `<signer-private-key>`: 32-byte base64 private key for signing PODs. (like: `YljE4kq00QiRE+PTaIBrA3RSpVeCHRpiQ/achLG8XIk=`)
- Output will be saved in the `Output/` folder.

## Input CSV Format

The input CSV should contain at least these columns (see `sample_input.csv` for full structure):

| Column           | Description                       |
|------------------|-----------------------------------|
| Attendee name    | Full name of the attendee         |
| Attendee email   | Email address of the attendee     |
| Product          | Ticket type/category              |
| Ticket secret    | Unique secret for the ticket      |

Other columns are ignored.

## Output CSV Format

The output CSV contains three columns:
- `EMAIL`: Attendee's email address
- `POD`: JSON string of the signed POD
- `POD_URLENCODED`: URL-encoded version of the POD JSON (for embedding in URLs, QR codes, etc.)

### Example Output

| EMAIL            | POD                | POD_URLENCODED         |
|------------------|--------------------|------------------------|
| alice@example.com| { ... }            | %7B%22attendeeName%22...|

## Notes
- Use the `POD_URLENCODED` column for safe transmission in URLs or QR codes.
- See `sample_input.csv` for a template of the expected input format.
- The product mapping file is now expected in the `csv-to-pod-converter/` folder (see below for details).

## POD Output CSV Checker

To verify the integrity of the output CSV from the converter:

1. Install dependencies (if not already):
   ```bash
   npm install
   ```
2. Run the checker script:
   ```bash
   npx ts-node csvOutputChecker.ts outputs/new_pods.csv
   ```

- Checks for required columns and missing fields
- For each row, checks that the EMAIL, POD, and POD_URLENCODED fields are present and non-empty.
- Required fields inside each POD JSON:
   - productId
   - eventId
   - attendeeName
   - attendeeEmail
   - ticketName
   - ticketSecret
   - ticketId
   - eventName
   - timestampSigned
   - timestampConsumed
- Verifies POD structure and signature
- Flags duplicate emails as warnings
- Logs errors and warnings to the console