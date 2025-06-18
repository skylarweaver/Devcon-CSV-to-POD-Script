import { POD } from './pod/src/pod';
import { PODEntries } from './pod/src/podTypes';

// Test creating a simple POD
const testEntries: PODEntries = {
  name: { type: "string", value: "Test User" },
  email: { type: "string", value: "test@example.com" },
  timestamp: { type: "int", value: BigInt(Date.now()) }
};

// Generate a test private key (in real usage, this should be provided)
const testPrivateKey = "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef";

try {
  console.log("Creating test POD...");
  const pod = POD.sign(testEntries, testPrivateKey);
  console.log("POD created successfully!");
  console.log("Content ID:", pod.contentID.toString());
  console.log("Signature valid:", pod.verifySignature());
  console.log("JSON:", JSON.stringify(pod.toJSON(), null, 2));
} catch (error) {
  console.error("Error creating POD:", error);
}