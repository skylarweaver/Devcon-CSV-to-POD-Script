---
title: Combined POD.org Documentation
description: Complete combined documentation for POD, GPC, and Z-API from pod.org
---

# Welcome to POD.org


Here you'll find developer resources for programming with [PODs](/pod/introduction), [GPCs](/gpc/introduction), and [ZApps](/z-api/introduction).  Read on for an introduction, then check out the [documentation](/docs).

### What is POD?

Provable Object Datatype (**POD**) is a standard for cryptographic data.

POD enables internet users to store and share data that preserve its integrity. By using [programmable cryptography](https://0xparc.org/blog/programmable-cryptography-1), apps can efficiently redact, transform, and aggregate the content of one or more PODs while maintaining end-to-end verifiability. This leads to a more interoperable and privacy preserving Internet. Users can save their data and send it to other consumers, which can then verify that the data has not been modified.

POD libraries enable any app to create zero-knowledge proofs of cryptographic data. Using PODs, developers can create ZK-enabled apps without the effort and risk of developing custom cryptography. Zero Knowledge proofs about PODs use General Purpose Circuits (**GPC**) which can prove many different things about PODs without revealing all content. GPCs use human-readable configuration and pre-compiled ZK circuits so no knowledge of circuit programming is required.

What [Zupass](https://zupass.org) has enabled with event tickets, PODs enable for all sorts of user data in all sorts of apps.  A POD could be your proof of attending an event, a secure message, a collectible badge, or an item in a role-playing game. PODs and GPCs can be used in Zupass, or in your own apps without Zupass.

POD is built and supported by [0xPARC](https://0xparc.org), and used by projects like [Zupass](https://zupass.org), [Frogcrypto](https://frogcrypto.xyz), [PODBox](https://podbox.dev), [Meerkat](https://meerkat.events/), [Devcon Passport](https://app.devcon.org/), and more.


### What's is a ZApp?

The Z-API brings the power of [programmable cryptography](https://0xparc.org/blog/programmable-cryptography-1) to your web app, allowing you to create provable data and zero-knowledge proofs in as few as 10 lines of code. Powered by Zupass, this unlocks new options for privacy, user control of data, and interoperability.

[Zupass](https://zupass.org) provides users with a private data store and a suite of cryptographic tools to make zero-knowledge proofs about that data. Zapps are apps which integrate with Zupass to provide those features to their users.

A Zapp might use data from the user's Zupass store to authenticate them, or might store new data in Zupass. Because the data store is owned by the user, that data is available to any other applications the user choose to share it with.

Zapps are just regular web applications, and they can also read and write data from other remote sources, such as back-end services or platforms. Your Zapp does not have to use Zupass as its only, or primary, data store. However, you _can_ build Zapps which work only with data stored in Zupass if you want to.

### Why POD?

#### Enable Internet users to store and own their data

Unlike traditional data received from Web APIs, PODs can be saved by users and sent to other consumers without losing their integrity. The signature of a POD ensures that the content has not been modified. Data can now be moved across different websites and devices and remain self-verifying.

#### Make data interoperable across the Internet

The POD standard is designed to make cryptographic operations on their content simple and efficient — even on resource constrained devices like mobile phones & embedded systems. They can be redacted, transformed, and aggregated in a provable way, enabling data to cross trust boundaries.

This means that services issuing PODs do not need to predict ahead of time all use cases for their data. Instead, a POD can be ingested by cryptographic gadgets to create “just-in-time” APIs whose integrity can be verified. POD brings a much needed interoperability layer to Internet data.

**Examples**:
- Show that I am over 21 from my California mobile driver license
- Show a loan provider that I am earning more than X dollars a year from my paystub
- Aggregate 200 individual gems from an RPG, and bundle it with a unique item to generate a new weapon

#### Present information in a privacy preserving way

With PODs, it becomes possible to take data from different sources — paystubs, government identities, ticketing systems — and prove to third-party Internet services that a subset of this data is correct, optionally with some logic applied to it. This primitive enables just enough information to be handed to a data consumer.

As an example, a loan provider can verify a proof of income via a cryptographic proof on a PODified paystub. Most of the paystub data can be redacted, and the total salary can be shown to be above a specific threshold without revealing the actual amount.

### Want to learn more?

Check out the [developer documentation](/docs).

# Documentation Overview

**Welcome to pod.org.**

This site covers the POD ecosystem, including the POD data format, General Purpose Circuits for zero-knowledge proofs, and the Z API which provides a pre-built POD store and user interface for common interactions.

To learn more about POD and programmable cryptography, see the [Learning](./learning) page.

For detailed information on app development see the sections for each SDK:

- [Provable Object Data](./pod/introduction)
- [General Purpose Circuits](./gpc/introduction)
- [Z API](./z-api/introduction)


# Learning Resources


Here you'll find a collection of resources to learn more about PODs and programmable cryptography.  Check them out if you want to understand more of the concepts and implementation details of the SDKs covered on this site.

When you're ready to start development, you can find much more info on each SDK in various sections of [developer docs](./docs).  During development you'll find detailed information in the [API Reference](https://docs.pcd.team/modules/_pcd_pod.html), or in the [source code](https://github.com/proofcarryingdata/zupass/blob/main/packages/lib/pod/src/pod.ts).

POD is part of a broader vision of a new internet powered by programmable cryptography.  For the best introduction to those concepts, check out this [blog post](https://0xparc.org/blog/programmable-cryptography-1).  The resources blow provide more information on the vision and concepts behind the POD SDKs.

# Tech Talks

The POD vision was launched at Devcon 7 SEA in November 2024.  Recordings and slides are available for each of the Devcon talks linked below.

To learn about the SDKs you can use now, start with the [POD and GPC](#pod-and-gpc) and [App Development](#app-development) sections.  For more about the vision and future of this technology, see the [Programmable Cryptography](#programmable-cryptography) section below.

## POD and GPC

These talks go into detail about how the POD and GPC SDKs make data provable.

- [Introducing PODs](https://archive.devcon.org/devcon-7/introducing-provable-object-data/) ([video](https://www.youtube.com/watch?v=nXmd0NHC59Q)|[slides](https://drive.google.com/file/d/1JillBs444Tzyk6sqezOY1tr4QT8pfkDv/view)) introduces the current POD and GPC SDKs for developers.
- [Deep Dive into PODs](https://archive.devcon.org/devcon-7/a-deep-dive-into-zk-proofs-of-pods/) ([video](https://www.youtube.com/watch?v=gWoVrIO1tIE)|[slides](https://drive.google.com/file/d/1h5s7YD2c7wvIIYsl6IyuWbgxXSMD-sv7/view)) goes into detail about how PODs and GPCs work.

## App Development

These talks cover the Zupass developer ecosystem centered around the Z-API.

- [Behind Zupass](https://archive.devcon.org/devcon-7/behind-zupass-applied-cryptography-for-consumers/) ([video](https://www.youtube.com/watch?v=7PPAIFVVgRU)|[slides](https://drive.google.com/file/d/1t3zO4l83pBb8McR6Jzt-i4WsI8g-fTiT/view)) introduces the Zupass app ecosystem.
- [Zupass, identity and credentials beyond proof of personhood](https://archive.devcon.org/devcon-7/zupass-identity-and-credentials-beyond-proof-of-personhood/) ([video](https://www.youtube.com/watch?v=hlE4x7JURjY)|[slides](https://drive.google.com/file/d/1VT4pCA44gNZqfZVPRk8_0A1W4Od_PNxd/view)) introduces what's new in Zupass as part of the [d/acc](https://vitalik.eth.limo/general/2023/11/27/techno_optimism.html#dacc) session.
- [Building Consumer Apps with Programmable Cryptography](https://archive.devcon.org/devcon-7/building-consumer-apps-with-programmable-cryptography/) ([video](https://www.youtube.com/watch?v=T-onmkwq4U0)|[slides](https://drive.google.com/file/d/1h2kOEqUgMO5HapaDbt0MlhDo7qxufD-S/view)) contains a series of talks by developers about the Z-API and the real apps built on it.

## Programmable Cryptography

These talks are focused on the vision and future work in programmable cryptography.  

- [Programmable Cryptography and Ethereum](https://archive.devcon.org/devcon-7/keynote-programmable-cryptography-and-ethereum/) ([video](https://www.youtube.com/watch?v=UWPg_AmWtlw)|[slides](https://drive.google.com/file/d/1FsDYkbfv0MstTDS-NlxxkvtPyiR-Fq2V/view))
- [Programmable Cryptography and the Future of the Internet](https://archive.devcon.org/devcon-7/programmable-cryptography-and-the-future-of-the-internet/) ([video](https://www.youtube.com/watch?v=onclocmZeR0)|[slides](https://drive.google.com/file/d/1rSDOMq1chOochPW5XY3kb62IMl4OwqYI/view))
- [The Universal Cryptographic Adapter](https://archive.devcon.org/devcon-7/keynote-the-universal-cryptographic-adapter/) ([video](https://www.youtube.com/watch?v=Qob-AsX0mxY)|[slides](https://drive.google.com/file/d/1xh1CIkzROhhehPBlIRdudtMvCmaaz7SP/view)) introduces the concept of a POD in both its current form, and future (POD2) experiments.
- There were also several talks in the [Programmable Cryptography CLS](https://archive.devcon.org/devcon-7/cls-programmable-cryptography/) ([video](https://www.youtube.com/watch?v=S6ixhGBnvKc)) morning session.
- [Programmable Cryptography from a Software Engineering Lens](https://archive.devcon.org/devcon-7/programmable-cryptography-from-a-software-engineering-lens/) ([video](https://www.youtube.com/watch?v=5C8SovQZnqY)) contains a series of talks on POD2 experiments.

# More to Read

- [0xPARC Blog](https://0xparc.org/blog): Check out the [Programmable Cryptography](https://0xparc.org/blog/programmable-cryptography-1) article for the vision which lead to PODs.  Earlier articles deep dive into specific technologies.
- [notes.0xparc.org](https://notes.0xparc.org/) has more information about 0xPARC's research priorities and open mathematical research [problems](https://notes.0xparc.org/problems/).



# POD Documentation

## Disclaimers


## Stability

POD and GPC libraries are in beta and subject to change. We encourage devs to try them out and use them for apps, but be aware that updates will come in future.

The PODs themselves are persistent data, and we expect to maintain backward-compatibility when we make changes to the format. Library interfaces may also change. Any breaking changes will be reflected in the NPM versions using standard semantic versioning.


## Introduction


Provable Object Datatype (**POD**) is a standard for cryptographic data.

POD enables internet users to store and share data that preserve its integrity. By using [programmable cryptography](https://0xparc.org/blog/programmable-cryptography-1), apps can efficiently redact, transform, and aggregate the content of one or more PODs while maintaining end-to-end verifiability. This leads to a more interoperable and privacy preserving Internet. Users can save their data and send it to other consumers, which can then verify that the data has not been modified.

POD libraries enable any app to create [zero-knowledge proofs](https://en.wikipedia.org/wiki/Zero-knowledge_proof) of cryptographic data. Using POD, developers can create ZK-enabled apps without the effort and risk of developing custom cryptography. Proofs about PODs use [General Purpose Circuits](/gpc/introduction) (**GPC**) which can prove many different things about PODs without revealing all content. GPCs use human-readable configuration and pre-compiled ZK circuits so no knowledge of circuit programming is required.

What [Zupass](https://zupass.org) has enabled with event tickets, PODs enable for all sorts of user data in all sorts of apps.  A POD could be your proof of attending an event, a secure message, a collectible badge, or an item in a role-playing game. PODs and GPCs can be used in Zupass, or in your own apps without Zupass.

POD is built and supported by [0xPARC](https://0xparc.org), and used by projects like [Zupass](https://zupass.org), [Frogcrypto](https://frogcrypto.xyz), [PODBox](https://podbox.dev), [Meerkat](https://meerkat.events/), [Devcon Passport](https://app.devcon.org/), and more.

## What is a POD?

To a user, a POD is a piece of cryptographic data attested by some issuing authority. For a developer, a POD object is a key-value store which can hold any data. The whole POD is signed by an issuer. Apps can verify the signature, to trust the authenticity of the values in the POD.

When a POD is issued, its entries (key-value pairs) are hashed as part of a [Merkle tree](https://en.wikipedia.org/wiki/Merkle_tree).  This allows GPCs to selectively prove about individual entries without revealing the whole POD.

```ts
const podSword = POD.sign(
  {
    pod_type: { type: "string", value: "myrpg.item.weapon" },
    attack: { type: "int", value: 7n },
    reach: { type: "int", value: 5n },
    weaponType: { type: "string", value: "sword" },
    itemSet: { type: "string", value: "celestial" },
    isMagical: { type: "boolean", value: true },
    owner: { type: "eddsa_pubkey", value: purchaser.pubKey }
  } satisfies PODEntries,
  privateKey
);
```

Zero-knowledge proofs about PODs can be made efficiently and flexibly with [GPCs](/gpc/introduction).

## PODs in Zupass

PODs are the basis of new Zupass-enabled apps using the [ZApp SDK](/z-api/introduction).  PODs and GPCs are integrated into Zupass via PCD packages.  Newly-issued Zupass tickets use `PODTicketPCD`, while `PODPCD` can represent any other data such as collectible frogs.  `GPCPCD` enables the creation of arbitrary proofs.

## What's next?

- Dive in to write code on the [Getting Started](./getting-started) page.
- Read about how [GPCs](/gpc/introduction) make ZK proofs about PODs easy, or about how the [Z-API](/z-api/introduction) lets you access PODs and request proofs from Zupass.
- Read or watch more about PODs in both vision and technical detail on the [Learning](/learning) page.  In particular, check out the [intro and deep dive talks](/learning#pod-and-gpc) for more about how PODs and GPCs work.
- Read more about specific POD development topics using the links on the sidebar.


## Getting Started


import { PackageManagers } from "starlight-package-managers";
import { Aside } from '@astrojs/starlight/components';

The `@pcd/pod` package allows you to sign, verify, and manipulate data in the POD format.  This guide will walk you through how to get started with POD development. The examples below assuming you're using TypeScript, but the same steps will work from JavaScript as well.
 
You can find full information about the types and functions used here in the [API Reference](https://docs.pcd.team/modules/_pcd_pod.html).  If you prefer to read complete working code, check out the [tutorial example](https://github.com/proofcarryingdata/zupass/blob/main/examples/pod-gpc-example/src/podExample.ts).

## Installation

To get started with PODs, you will need to install the `@pcd/pod` package, using your preferred package manager:

<PackageManagers
  frame="none"
  pkgManagers={["npm", "yarn", "pnpm", "bun"]}
  pkg="@pcd/pod"
/>

The package is available in CJS or ESM format, and will work either in browser or in a server. The example code makes use of bigint literals, so requires a target of at least ES2020.

## Imports

Next, import the types and functions you need from the package.  See the [API Reference](https://docs.pcd.team/modules/_pcd_pod.html) for everything which is available, and import what you need as you write your code.  Here's an example import covering the first few samples below:

```ts wrap=true title="pod.ts"
import { POD, PODEntries } from "@pcd/pod";
```

## POD Entries

A [POD](https://docs.pcd.team/classes/_pcd_pod.POD.html) is made up of entries (the [PODEntries](https://docs.pcd.team/types/_pcd_pod.PODEntries.html) type), each containing a name ([PODName](https://docs.pcd.team/types/_pcd_pod.PODName.html)) and a value ([PODValue](https://docs.pcd.team/types/_pcd_pod.PODValue.html)).You can read more details and recommendations about POD [names](names) and [values](values) later in this guide.


In TypeScript code, all values have an explicit type specifier. Let's declare some sample entries, modeling a digital driver's license.  

```ts wrap=true title="pod.ts"
const myEntries: PODEntries = {
  name: {
    type: "string",
    value: "Filip Frog"
  },
  date_of_birth: {
    type: "date",
    value: new Date("1999-03-20T00:00:00.000Z")
  },
  postcode: {
    type: "int",
    value: 94107n
  },
  driver: {
    type: "boolean",
    value: true
  },
  cardholder: {
    type: "eddsa_pubkey",
    value: "ZnU07tyAUiWW2mmY3/z4aa3WxrctfSc0ch23752z6xM"
  },
  pod_type: { type: "string", value: "dmv.license" },
};
```

<Aside type="note" title="Semaphore Identities">
GPCs use the Semaphore protocol to determine ownership of PODs. In Semaphore V4, identities are EdDSA signing keys, which is the same type of key which issuers use to sign PODs (see below).  The `cardholder` value above is the owner's public key. You might obtain a user's public key from Zupass using the [Z API](/z-api/introduction), create a new identity using the [Semaphore library](https://www.npmjs.com/package/@semaphore-protocol/identity), or simply generate a keypair using the [eddsa-poseidon](https://www.npmjs.com/package/@zk-kit/eddsa-poseidon) library.
</Aside>

## Sign a POD

A POD is always signed by some issuer. To sign a new POD you need a private key, which can be any 32 bytes, as a string in either hexadecimal or Base64.  These should be randomly generated in a secure way.

<Aside type="note" title="Signing Keys">
PODs can be signed by issuers, or by individual users. If your app issues PODs, you should store your signing key in your app server, and sign PODs server-side to avoid revealing your private key to users.  Users can also sign PODs with their own keys, which could be stored client-side. A user's Zupass identity includes private key which can be used to sign PODs using the [Z API](/z-api/introduction).
</Aside>

```ts wrap=true title="pod.ts"
  const signingKey = "AAECAwQFBgcICQABAgMEBQYHCAkAAQIDBAUGBwgJAAE";
  const myPOD = POD.sign(myEntries, signingKey);
  const sig = myPOD.signature;
  const pubKey = myPOD.signerPublicKey;
  const cid = myPOD.contentID;
```

You can access the `signature` and `signerPublicKey` fields to see the results.

Once a POD is Merklized and signed, it is immutable.  The root of the Merkle tree is available in the `contentID` field which uniquely identifies the (unsigned) contents of this POD. The content ID is like a hash (actually the root of a Merkle tree) in that the same entries will always result in the same content ID.

## Verify a Signature

If you receive a POD from an untrusted source, it's always a good idea to verify the signature. An invalid signature will make it impossible
to generate ZK proofs of the POD.

```ts wrap=true title="pod.ts"
  if (!myPOD.verifySignature()) {
    throw new Error("Bad POD!");
  }
```

## POD Contents

Inside a POD is a [PODContent](https://docs.pcd.team/classes/_pcd_pod.PODContent.html) object which acts as a Map-like object for accessing the POD's entries. The PODContent class also forms the Merkle tree in which the entries are cryptographically arranged to calculate the content ID.

Merklization happens lazily on-demand, with the result cached to avoid duplicated effort. The PODContent class can also generate Merkle membership proofs for individual entries.  These are needed for GPC proving, though most apps won't need to make use of them directly.

```ts wrap=true title="pod.ts"
  const postcode = myPOD.content.getValue("postcode");
  const driverProof = myPOD.content.generateEntryProof("driver");
```

## JSON Serialization

PODs, and related types like entries are not directly stringifiable due to the use of bigints, and class objects. There are conversion functions for all types to/from JSON compatible types which can be used for serialization via `JSON.stringify`.

You can find TypeScript types with the `JSON` prefix added to the primary type: e.g. POD to [JSONPOD](https://docs.pcd.team/types/_pcd_pod.JSONPOD.html), PODValue to [JSONPODValue](https://docs.pcd.team/types/_pcd_pod.JSONPODValue.html), etc. The conversion functions like [podValueToJSON](https://docs.pcd.team/functions/_pcd_pod.podValueToJSON.html) also validate that all the data is legal and well-formed.

```ts wrap=true title="pod.ts"
  const jsonPOD: JSONPOD = myPOD.toJSON();
  const serializedPOD: string = JSON.stringify(jsonPOD);

  const jsonValue: JSONPODValue = podValueToJSON(
    myPOD.content.getValue("driver")!
  );
  const serializedValue: string = JSON.stringify(jsonValue);
```

The JSON format is optimized to be human-readable as well as short.  It omits type information in cases where the types can be properly derived from standard JSON types.

```json wrap=true title="myPOD.json"
{
  "entries": {
    "cardholder": {
      "eddsa_pubkey": "eNrg5aYuoHKsJulwbG4nxI9pExcU3lEDjdaRP5APgwA"
    },
    "date_of_birth": {
      "date": "1999-03-20T00:00:00.000Z"
    },
    "driver": true,
    "name": "Filip Frog",
    "pod_type": "dmv.license",
    "postcode": 94107
  },
  "signature": "FjsZefQkMbMeltBv83SWGAbdphBrZqtmNukkwERQeAG71Boc+E9iOZO6tMQFBNwkNWGpY1J30GLOPzvyXytPAA",
  "signerPublicKey": "xDP3ppa3qjpSJO+zmTuvDM2eku7O4MKaP2yCCKnoHZ4"
}
```

Deserialization can be performed by performing the reverse conversion after calling `JSON.parse`. The conversion functions like [podValueFromJSON](https://docs.pcd.team/functions/_pcd_pod.podValueFromJSON.html) also fully validate the input and will throw if the data is malformed.

```ts wrap=true title="pod.ts"
  const receivedPOD: POD = POD.fromJSON(JSON.parse(serializedPOD));
  const receivedValue: PODValue = podValueFromJSON(
    JSON.parse(serializedValue)
  );
```

## What's next?

- Check out the rest of the pages of this guide for deeper dives on various aspects of PODs.
- See the [API Reference](https://docs.pcd.team/modules/_pcd_pod.html) for more details on the types and functions of the POD library.
- Check the [Developer Resources](resources) for references to related packages.
- Read about how [GPCs](/gpc/introduction) make ZK proofs about PODs easy, or about how the [Z-API](/z-api/introduction) lets you access PODs and request proofs from Zupass.
- Read or watch more about PODs in both vision and technical detail on the [Learning](/learning) page.  In particular, check out the [intro and deep dive talks](/learning#pod-and-gpc) for more about how PODs and GPCs work.


## Names


import { Aside } from '@astrojs/starlight/components';

This page describes the structure of a POD, including the full expressibility of the POD name/value store, and suggested best practices for interoperability. See the [Values and Types](./values) page for information on the value stored in a POD.

## POD Structure

A POD is a cryptographic record with no enforced schema. A POD is made up of entries consisting of a [name](#legal-names) (always a string) and a [value](./values) (of a supported type). Values are scalars with no nested objects, meaning the POD structure is flat.

Apps can represent their data however they like. Entry names and values are hashed and cryptographically verified in a POD. The issuer of a POD decides what the expected set of names and values should be for their use case. The definition order of entries is not important since entries area always sorted by name before hashing.

- **Names**: The cryptography behind PODs will accept any name or value which can be hashed. The POD library enforces the [legal characters in names](#legal-names) described below.
- **Schema**: There is no formally enforced notion of a schema for POD entries, but there are some recommended best-practices apps should follow, most particularly the use of the [`pod_type`](#pod_type) and [Zupass Display](#zupass-display) entries described below.

## Legal Names

POD names (represented by the [`PODName`](https://docs.pcd.team/types/_pcd_pod.PODName.html) type) are limited to a character set which matches variable identifiers in most languages. They allow alphanumeric characters and underscores, and cannot begin with a digit. This allows `PODEntries` to be conveniently accessed as TypeScript objects without quoting their names:

```ts
const idEntries = idPOD.asEntries();
if (idEntries.pod_type === "zu_gov.id") {
  const user = findUser(idEntries.idNumber);
  // ...
}
```

<Aside type="caution" title="Security and Future Proofing">
While the legal characters are checked by the SDK, they are not cryptographically enforced. Custom code can sign a POD with any string in its names. Thus if your app will be consuming data in unknown formats, you shouldn't assume that a POD name won't contain special characters beyond those defined here. E.g. if a POD name comes from untrusted input and needs to be written to your database, you should sanitize it against possible SQL injection attacks.
</Aside>

You can call [checkPODName](https://docs.pcd.team/functions/_pcd_pod.checkPODName.html) to manually check if a string is a valid name, but the POD libraries will also do so in normal operation.  Note that the legal character restriction applies only to names, not to values. A string value can contain any characters (UTF-8 encoded).

This limited character set is restrictive today partially to allow it to expand in future versions to support new features. This also leaves special characters to be used for special purposes outside of PODs themselves, such as in GPC proof configuration (see below).

### Use of Names in GPCs

The `PODName` specification is also used in GPC configuration when a name is needed to refer to a whole POD, or a list of values, etc. These names follow the same `PODName` rules for convenience, but this detail is not cryptographically relevant. These names exist only for the GPC compiler to correlate different parts of the config and inputs, and do not appear in the ZK circuit.

<Aside type="note" title="Name Order">
The GPC compiler uses lexicographic order to sort multiple PODs or entries before assigning the modules in a circuit. Thus while the extended names in config are arbitrary and could be changed, it is important that prover and verifier at least agree on their order.
</Aside>

The GPC compiler also uses some special characters when naming things in constraints, for example:

- `idPOD.idNumber` names a POD and an entry of that POD. In this case `idPOD` is an arbitrary name assigned to a POD, while `idNumber` is the name of an entry which must be in the POD.
- `idPOD.$signerPublicKey` names the public key of a POD. The name `$signerPublicKey` never appears in the POD itself, but the config compiler treats it as a virtual entry when defining constraints.

## Reserved Names

Apps should avoid defining their own entry names with the prefixes `pod_` or `zupass_` as these are reserved for special uses in the SDK, or in Zupass. Some of these have defined uses described below, which apps are encouraged to use accordingly. Remaining names with those prefixes are reserved for future use.

### `pod_type`

The `pod_type` entry is the a recommended way for apps to tag their PODs to let their contents be understood across apps. It should be used by apps to identify the purpose or schema of their PODs using some unique identifier. In future, this might be used to index into a library of published schema identifiers.  For now, the `pod_type` is not enforced, but is helpful to avoid mixing PODs with common names. For instance, `somePOD.name` means something different on a driver's license than it does on a collectible frog.

There is no required format for `pod_type`, but it is recommended to contain the name or identifier of your app so as to be unique. [Reverse domain name notation](https://en.wikipedia.org/wiki/Reverse_domain_name_notation) is a good way to ensure that.

<Aside type="caution" title="pod_type Security">
The `pod_type` is a good way to avoid accidental misuse, but is usually only the second step in trusting the meaning of a POD. The first step should always be to check that the POD's signature, and almost always to check that its public key is a trusted signer. A known signer could be trusted to follow a schema, making `pod_type` redundant (but still recommended) for signers which issue only one type of POD. An untrusted signer could sign anything, so if your app accepts data from any signer (e.g. user-signed PODs) be sure to check its format like any untrusted input.
</Aside>

### Zupass Display

Zupass is a generic POD store able to hold any type of POD, and show the user its entries. It's easier for a user if that POD can display in a friendlier format than a JSON dump. If you anticipate your POD being stored in Zupass, you should set one or more of the following fields:

- `zupass_display` (string): the preferred display format for your POD.  Accepted values are:
  - `collectable` displays the other fields described below in a card.  Requires at least one of title, description, or image URL to be set.
  - `pod` explicitly chooses the default JSON display
- `zupass_title` (string): a short title for your POD, used in folder listings and/or the top of the display card.
- `zupass_description` (string): a user-friendly text description of your POD
- `zupass_image_url` (string): the URL to fetch an image to display with your POD

<Aside type="note" title="Images">
Any URL suitable for an `<image>` tag should work in `zupass_image_url`.  Be careful to select an image URL which will remain available, to avoid broken image links when users save their PODs into the future.  You can also use a `data:` URL for embedded images, though this is suitable only for small icons.  Zupass enforces a maximum size for PODs, currently 10KB.
</Aside>

Outside of Zupass, how you display your PODs is entirely up to you. You can use the JSON format defined by [`pod.toJSON()`](https://docs.pcd.team/classes/_pcd_pod.POD.html#toJSON) which is intended to be human-readable, but you can also invent your own formats more specific to your app.

## Suggestions and Examples

### Ownership

PODs can be marked with a user's identity in a way which allows a GPC to [prove ownership](/gpc/identity-ownership). There is no fixed entry name for this purpose, since it can be selected in the GPC configuration. Thus you could name your ownership entry `attendee` or `citizen` as befits your use case. However if you want a recommended default, you can use an entry named `owner` of type `eddsa_pubkey`.

### Example POD

Here is an example POD which follows all the requirements and best-practices described in this page.  This is the [Meerkat](https://meerkat.events/) app's proof of attendance from a talk at Devcon 7 SEA.

```json
{
  "entries": {
    "code": "MQ8T8Z",
    "conference": "Devcon SEA",
    "end_date": {
      "date": "2024-11-12T08:30:00.000Z"
    },
    "owner": {
      "eddsa_pubkey": "DVZ1idpAigmvfwYem2pvbHNPp7IAia0ER98dwxVrd5M"
    },
    "pod_type": "events.meerkat/attendance",
    "start_date": {
      "date": "2024-11-12T08:00:00.000Z"
    },
    "track": "Applied Cryptography",
    "version": "1.0.0",
    "zupass_description": "Programmable Cryptography is a \"second generation\" of cryptographic primitives - primitives that allow arbitrary programs to be executed \"inside of\" or \"on top of\" cryptographic objects. Programmable cryptography provides three key affordances that complement and amplify the affordances of Ethereum--verifiability, confidentiality, and non-interactivity. We'll discuss how these technologies can reshape the Internet over the next 50 years.",
    "zupass_display": "collectable",
    "zupass_image_url": "https://icnyvghgspgzemdudsrd.supabase.co/storage/v1/object/public/images/owl_Applied%20Cryptography.png?t=2024-10-31T11%3A20%3A31.354Z",
    "zupass_title": "Keynote: Programmable Cryptography and Ethereum"
  },
  "signature": "k7NpiGbrSZJRivZ5D4RXQTFs2w+EsFjeYiFuxUloY56AryxzeQdAh6yUtABhw1r8EElx9no59gKrD+htlRqFAQ",
  "signerPublicKey": "XfAQCwo2k69LAW1gRLUs1qsnQ2rVJ6VaF3yotol5HQ4"
}
```


## Values


import { Aside } from '@astrojs/starlight/components';

This page describes the value data stored in a POD, including all the types of values supported, and details on their cryptographic encoding.  See the [Names and Schemas](./names) page for information on how values are named and accessed.

## POD Content

A POD is a cryptographic record made up of entries consisting of a [**name**](./names) (always a string) and a [value](https://docs.pcd.team/types/_pcd_pod.PODValue.html) of a supported [type](#value-types). Values are scalars with no nested objects, meaning the POD structure is flat.

The full contents of a POD are uniquely identified by a **content ID**. The content ID can be thought of as a hash of the content generated in a way which is deterministic and optimized for easy ZK proving (see the [PODContent](https://docs.pcd.team/classes/_pcd_pod.PODContent.html) class for more). The content ID is signed using the issuer's private key to generate the POD's **signature** (in the [POD](https://docs.pcd.team/classes/_pcd_pod.POD.html) class).

Cryptographically each entry's name and value is identified by a hash: a [cryptographic number](#cryptographic-numbers) which uniquely and securely identifies that specific name or value. **Name hashes** and **value hashes** are calculated separately for each entry, then hashed together in a [Merkle Tree](https://en.wikipedia.org/wiki/Merkle_tree). The root of the tree is the aforementioned content ID.

**Value types** are hints used by the library to determine how a value in TypeScript is reduced to a hash. This also determines how a value can be used in GPC proofs. The type itself is not part of the cryptographic identity of an entry. This means if two values have the same value hash, they are considered the same value, even if they were declared with different types. For instance `{int: 1}` and `{boolean: true}` are the same value.

<Aside type="caution" title="Type Security">
See the note on [type security](#type-security) below for security implications of this.
</Aside>

## Value Types

Below we summarize the details of all supported value types, and how they can be used. Follow the links in column headers for more information about what they mean, or see [below](#supported-types) for info specific to each supported type.

| [POD Type](#supported-types) | [TypeScript Type](#supported-types) | [Hash](#hash-functions) | [Values](#supported-types) | [Equivalency](#equivalency-categories) | [Arithmetic](#arithmetic-types) | 
| --- | --- | --- | --- | --- | --- |
| cryptographic | bigint | Poseidon1 | field element | number | no |
| int | bigint | Poseidon1 | 64-bit signed | number | yes |
| date | Date | Poseidon1 | millis since epoch | number | yes |
| boolean | boolean | Poseidon1 | true/false | number | yes |
| string | string | SHA | UTF-8 | string | no |
| bytes | Uint8Array | SHA | any bytes | string | no |
| eddsa_pubkey | string | Poseidon2 | elliptic curve point | - | no |
| null | null | constant | null | - | no |

### Supported Types

Values are represented in TypeScript by the [PODValue](https://docs.pcd.team/types/_pcd_pod.PODValue.html) type in TypeScript, which includes a type tag. Libraries perform input validation to ensure the values are in legal ranges. You can also call [checkPODValue](https://docs.pcd.team/functions/_pcd_pod.checkPODValue.html) to manually check a value. See the note on the note on [type security](#type-security) to be sure you're not trusting it too much.

- **cryptographic** is a numeric type typically used to hold hashes or signatures. It is an unsigned number in a range [0, p-1] for a large prime p (254 bits). It is represented directly as a [**field element**](#cryptographic-numbers) supported by the elliptic curve cryptography which underlies PODs.
- **int** is a numeric type limited to a range suitable for efficient arithmetic and comparisons in GPC circuits. ints are 64-bit signed values, in the range [-2<sup>63</sup>, 2<sup>63</sup> - 1], the same range as the 2s-complement representation in most CPU platforms. 
- **boolean** is a convenience type equivalent to an int with values 0 (false) and 1 (true).
- **date** is a convenience type equivalent to an int holding milliseconds relative to the UNIX epoch. It is signed, so it can represent dates earlier than 1970. Its range is limited to that of the JavaScript [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) type (which is approximately &pm;53 bits).
- **string** can represent any Unicode string, encoded in UTF-8.  Strings can be compared only for equality in GPCs.
- **bytes** can hold any array of bytes, and behave similarly to strings in GPCs.
- **eddsa_pubkey** is a specialized type for user or signer identities using the same EdDSA algorithm used to sign PODs. In TypeScript it is represented as a Base64 representation of a packed elliptic curve point. In GPC circuits, it can be compared to POD signers, or used to prove ownership.
- **null** is a type with a single unique value which will not compare equal to any other value. An entry with a value of null is **not** the same as an absent entry. GPC proofs cannot prove the absence of an entry, so if the issuer sets an entry to null it can help clients to prove that no other value is present.

### Equivalency Categories

The categories in the table above indicate which types can compare as equal to each other. When two POD values are compared for equality in a proof (such as with an `equalsEntry` constraint), it is their value hashes which are compared. The [hash functions](#hash-functions) described below thus determine equivalency. This can be helpful in defining proof constraints, but see [type security](#type-security) below for some cautions on how to avoid unsafe assumptions.

All numeric types are equivalent if they have the same numeric value, since they are all represented as field elements. So `{cryptographic: 0}`, `{int: 0}`, `{boolean: false}`, and `{date: "1970"}` are all equivalent. If your app needs to treat different types differently, you should include extra metadata in additional POD values.

Strings and byte arrays are also equivalent. A strings will compare equal to a byte array containing its UTF-8 encoding.

Note that numbers and byte-arrays are not equivalent to each other. The remaining types are not equivalent to any other types.

### Arithmetic Types

Arithmetic in ZK circuits is limited by the circular nature of modular arithmetic. To efficiently perform more traditional arithmetic and comparisons while avoiding overflows, POD values must be limited to a smaller range.

In the current GPC libraries, only numeric values which fit within 64 bits can be subjected to ordering constraints such as `inRange` or `lessThan`. In future these are also the types which might be added or multiplied together in more customized constraints.

Strings and bytes are not considered "ordered" for this purpose since they are not numeric types. Custom constraints on variable-length values such as strings are not currently supported in GPCs.

## Implementation Details

### Cryptographic Numbers

What makes PODs ZK-friendly for proving is their choice of numeric representation, as well as algorithms for hashing and signing. These are tied to the specific proving systems used by [Circom](https://docs.circom.io/), which are based on elliptic curve cryptography using modular arithmetic on the [Baby Jubjub prime field](https://iden3-docs.readthedocs.io/en/latest/iden3_repos/research/publications/zkproof-standards-workshop-2/baby-jubjub/baby-jubjub.html). Elements of this prime field are integers from 0 to p-1 where p is a specific 254-bit prime number. Computers typically hold these in 256 bit values.

The details of this are mostly hidden from users of the POD library, but are visible in raw **cryptographic** values representing hashes, signatures, and a POD's content ID. Programmers can generally treat these as opaque, so long as they can handle the `bigint` type. All other numeric types are also represented internally as field elements, but the libraries handle the details of the translation.

### Hash Functions

All values are identified by their hash using one of the specific hash algorithms below. You can call [podValueHash](https://docs.pcd.team/functions/_pcd_pod.podValueHash.html) to invoke the proper hash function for any PODValue.

- **Poseidon**: Fixed-size values use a Poseidon hash, which is ZK-friendly and can be directly validated in a GPC circuit. In GPC proofs, these are the values which can be subjected to customized constraints beyond equality. The Poseidon hash varies by number of inputs. Most numeric values use the single-input variant [`podIntHash`](https://docs.pcd.team/functions/_pcd_pod.podIntHash.html) function, while EdDSA public keys use the 2-input variant [`podEddsaPublicKeyHash`](https://docs.pcd.team/functions/_pcd_pod.podEdDSAPublicKeyHash.html) to cover the x and y coordinate of an elliptic curve point.

- **SHA**: Variable-size values (strings and bytes) use a SHA256 hash, truncated (via right-shift) to 248 bits in order to fit in a field element (see the [`podStringHash`](https://docs.pcd.team/functions/_pcd_pod.podStringHash.html) function). This hash is not efficient to perform in a ZK circuit, so comparisons in proofs are always by hash. The GPC Verifier re-hashes strings to ensure their hashes match what is in the circuit.

- **constant**: The null value has a single fixed constant as its defined hash value, with no algorithm needed.

<Aside type="note" title="Name Hashes">
The names of POD entries also use the same hash function as strings, though this could change in future POD versions. Call [`podNameHash`](https://docs.pcd.team/functions/_pcd_pod.podNameHash.html) to hash a name.
</Aside>

### Type Security

The non-cryptographic nature of value types has some security implications. The POD libraries will helpfully ensure values are in range for their types, but a buggy or malicious implementation could violate those rules. The nature of the hashes used means that values will only ever have the same hash if their original types are in the same of [equivalency category](#equivalency-categories). For a strong hash function, the probability of collision between categories is negligible within the cryptographic assumptions of the algorithms used.

Treating an input differently based on its type using a type switch pattern isn't reliable when operating on POD values. Avoid designing schemas which rely on mixing heterogeneous types in an entry of the same name.

When checking security assumptions with PODs or GPC proofs, always make sure you're constraining an entry's value not just relying on its type. This is particularly important in proof constraints where the original value and type are not revealed.  For instance, don't assume that a `boolean` can't be equal to 100, or that an `int` can't be more than 2<sup>63</sup>. Check the value before using it for security decisions, or to index arrays which might overflow. In GPC proofs, you can use the `inRange` constraint to ensure a value lies in an expected range.


## Resources


import { Aside } from '@astrojs/starlight/components';

The POD and GPC libraries are available for JavaScript/TypeScript developers.  Start by looking at the [tutorial code here](https://github.com/proofcarryingdata/zupass/tree/main/examples/pod-gpc-example), then you can take a look at the specific packages listed below.

All code is open-source and available in the Zupass [repo](https://github.com/proofcarryingdata/zupass).  Detailed API reference documentation is at [docs.pcd.team](https://docs.pcd.team/modules/_pcd_pod.html).

For questions or to talk with other developers, you can join our Telegram group at [t.me/zupass](https://t.me/zupass).

## POD Packages

### @pcd/pod

Links: [NPM](https://www.npmjs.com/package/@pcd/pod), [tutorial](https://github.com/proofcarryingdata/zupass/blob/main/examples/pod-gpc-example/src/podExample.ts), [API reference](https://docs.pcd.team/modules/_pcd_pod.html), [code](https://github.com/proofcarryingdata/zupass/tree/main/packages/lib/pod)

Allows creation and signing of PODs, and manipulation of their named values.

### @pcd/pod-pcd

Links: [NPM](https://www.npmjs.com/package/@pcd/pod-pcd), [tutorial](https://github.com/proofcarryingdata/zupass/blob/main/examples/pod-gpc-example/src/podExample.ts#L214), [API reference](https://docs.pcd.team/modules/_pcd_pod_pcd.html), [code](https://github.com/proofcarryingdata/zupass/tree/main/packages/pcd/pod-pcd)

Allows PODs to be issued by Podbox, stored in Zupass, and requested and manipulated in all the ways enabled by the PCD framework.  A PODPCD can be displayed in Zupass with a user-friendly image and description, or as raw POD entries.

## Ports to other languages

While the only fully-supported SDK for PODs is currently in TypeScript, the POD technology is portable (defined by math).  Its implementation has been ported to other languages to support various projects during POD development.

<Aside type="caution" title="Compatibility Notes">
Note that these are not complete SDKs and not actively supported, but should be taken as cryptographically sound examples of cross-language compatibility.  All the examples here use the same cryptographic definition of PODs, and are compatible at that level.  Compatibility of JSON encoding varies.

The Go implementation is the only one which is up to date on the latest JSON format for sending PODs.  The others use a pre-alpha incompatible format and will not accept newer PODs from the TypeScript library.  Zupass can parse this older format if it is encoded in a POD PCD, but the `@pcd/pod` library cannot.
</Aside>

### Go (PARCNET)

POD implementation in Go.  This implementation is up to date with the latest JSON format, and thus fully compatible with TypeScript.

- [Source code](https://github.com/0xPARC/parcnet/tree/main/go/pod)

### Rust (PARCNET)

POD implementation in Rust used in next-gen POD (POD2) development.

- [Source code](https://github.com/0xPARC/parcnet/tree/main/parcnet-pod/src/pod)

### Python (miniPOD)

Minimal Python code to sign a POD and send it to Zupass using a URL link.

- [Source code](https://github.com/antimatter15/minimal-eddsa-pod-pcd-python/blob/main/minimal-pod-pcd-zupass.ipynb)

### Embedded C (microPOD)

Based on the Python implementation above, this project signed and issued a POD from an embedded hardware device (Cyberduck).  This was a precursor to the Cyberfrogs seen at Devcon 7 SEA in 2024.  (Note that the final released Cyberfrogs do not sign PODs, but instead sign a nonce which the server verifies before issuing a POD.)

- [Source code](https://github.com/antimatter15/microPOD/blob/main/DuckV4/DuckV4.ino#L328)

## Related APIs

- Proofs about PODs can be made using [GPCs](/gpc/introduction)
- Interact with PODs in Zupass using the [Z API](/z-api/introduction)


## Examples


## Tutorials and Examples

See the [Getting Started](/pod/getting-started) page for an initial intro, but if you prefer learning from heavily commented example code you can read this [tutorial](https://github.com/proofcarryingdata/zupass/blob/main/examples/pod-gpc-example/src/podExample.ts).

### ZuKyc

An end-to-end developer demo showing how PODs & GPCs can be used to apply for a loan by proving a borrower's identity, age, and income.  You can build and run the demo locally, or using the pre-deployed servers.

- Detailed tutorial here: [README](https://github.com/proofcarryingdata/zukyc/blob/main/README.md)
- Check out the app here: [ZooLender](https://zukyc-gpc-verifier.vercel.app/), [code](https://github.com/proofcarryingdata/zukyc)

### POD issuer

A server which allows users to "mint" their own PODs (with cryptographic ownership) based on a URL which can be embedded in a QR code.  You can run your own issuing server and decide which PODs you'd like to issue.

- [Source code](https://github.com/proofcarryingdata/pod-issuer)

## Live Apps

These apps all use PODs in production.  More live apps coming soon.

### Meerkat

Meerkat is a Q&A app for live audience engagement. With Meerkat, attendees of an event or conference can submit questions, upvote their favorites, share reactions, and collect session artifacts as PODs. At an event, each talk will display a QR code, making it easy to join the Q&A by verifying your access through your privacy-preserving Zupass access ticket.

- Check out the app here: [Meerkat](https://meerkat.events)
- [Source code](https://github.com/meerkat-events/meerkat)

### Frogcrypto

A game of collecting cryptographic frogs.  [Frogcrypto](https://frogcrypto.xyz) had a real-space component Devcon 7 SEA in November 2024.  The online collecting component remains available to try out until the next live event.

### Frog Lab

Derive novel substances from your frogs.  The lab uses the Z-API to select frogs collected from Frogcrypto, and generate novel substances saved back to Zupass as PODs.

- Try it out at [shuljin.engineering](https://shulgin.engineering)
- [Source code](https://github.com/Moving-Castles/shulgin.engineering)



# GPC Documentation

## Disclaimers


## Stability

POD and GPC libraries are in beta and subject to change. We encourage devs to try them out and use them for apps, but be aware that updates will come in future.

GPC proofs are considered ephemeral (for now), primarily intended for transactional use cases. Saved proofs may not be verifiable with future versions of code.

## Security

These libraries should not be considered secure enough for highly-sensitive use cases yet. The cryptography, circuits, and configuration compiler have not been audited. The proving and verification keys were generated in good faith by a single author, but are not the result of a distributed trusted setup ceremony.


## Introduction


General Purpose Circuits (**GPC**) are a part of the POD standard for cryptographic data.  GPC is a system for easily and flexibly generating [zero-knowledge proofs](https://en.wikipedia.org/wiki/Zero-knowledge_proof) about [POD](/pod/introduction) data.

GPC libraries enable any app to create [zero-knowledge proofs](https://en.wikipedia.org/wiki/Zero-knowledge_proof) of cryptographic data. Using GPCs, developers can create ZK-enabled apps without the effort and risk of developing custom cryptography. General Purpose Circuits can prove many different things about PODs without revealing all details. GPCs use human-readable configuration and pre-compiled circuits so that no knowledge of circuit programming is required.

GPC is built and supported by [0xPARC](https://0xparc.org), and used by projects like [Zupass](https://zupass.org), [PODBox](https://podbox.dev), [Meerkat](https://meerkat.events/), [Devcon Passport](https://app.devcon.org/), and more.

## What is a GPC?

GPCs allow ZK proofs to be created from a simple proof [configuration](/gpc/proof-configuration).  You can configure your proofs using a human-readable JSON format (or equivalent TypeScript code), which is used to configure the circuit used for the proof.

```ts
const weaponProofConfig: GPCProofConfig = {
  pods: {
    weapon: {
      entries: {
        attack: { isRevealed: true },
        reach: { isRevealed: false,
                 inRange: { min: 5n, max 10n } },
        weaponType: { isRevealed: false,
                      isMemberOf: "proficientWeapons" },
        owner: { isRevealed: false, isOwnerID: "SemaphoreV4" }
      }
    }
  }
};
```

GPCs can prove properties of one POD or several PODs together.  The prover can also prove they [own](/gpc/identity-ownership) a POD using their Semaphore identity.  A GPC can constrain as many named entries as needed, whether revealed or not.  For example, a proof might constrain two entries to be equal, constrain a third entry to be in a list of valid values, and reveal the value of a fourth entry.

## Circuit family

The GPC library includes a family of pre-compiled ZK circuits with different sizes and capabilities.  It will automatically select the right circuit to satisfy the needs of each proof at run-time.  No setup is required, and you don't need any knowledge of circuit programming (circom, halo2, noir, etc).

Using circuits in this family to prove and verify requires downloading binary [artifacts](/gpc/artifacts): proving keys, verification keys, and witness generators.  The GPC library will automatically fetch the artifacts it needs from a download URL or local filesystem, based on your app's configuration.

## GPCs in Zupass

GPCs are the basis of proofs in new Zupass-enabled apps using the [ZApp SDK](/z-api/introduction).  PODs and GPCs are integrated into Zupass via PCD packages.  Newly-issued Zupass tickets use `PODTicketPCD`, while `PODPCD` can represent any other data such as collectible frogs.  `GPCPCD` enables the creation of arbitrary proofs.

## What's next?

- Dive in to write code on the [Getting Started](./getting-started) page.
- Read about [PODs](/pod/introduction) and how the [Z-API](/gpc/introduction) lets you request proofs about PODs from Zupass.
- Read or watch more about PODs in both vision and technical detail on the [Learning](/learning) page.  In particular, check out the [intro and deep dive talks](/learning#pod-and-gpc) for more about how PODs and GPCs work.
- Read more about specific GPC development topics using the links on the sidebar.


## Getting Started


import { PackageManagers } from "starlight-package-managers";
import { Aside } from '@astrojs/starlight/components';

The `@pcd/gpc` package allows you to prove and verify using GPCs.  This guide will walk you through how to get started with GPCs. The examples below assuming you're using TypeScript, but the same steps will work from JavaScript as well.

You can find full information about the types and functions used here in the [API Reference](https://docs.pcd.team/modules/_pcd_gpc.html).  If you prefer to read complete working code, check out the [tutorial example](https://github.com/proofcarryingdata/zupass/blob/main/examples/pod-gpc-example/src/gpcExample.ts).

## Installation

To get started with GPCs, you will need to install the `@pcd/gpc` package, using your preferred package manager:

<PackageManagers
  frame="none"
  pkgManagers={["npm", "yarn", "pnpm", "bun"]}
  pkg="@pcd/gpc"
/>

The package is available in CJS or ESM format, and will work either in browser or in a server. The example code makes use of bigint literals, so requires a target of at least ES2020.

Packaging for a browser requires polyfill for some Node modules, including `constants`, so watch for that if you see any dependency issues. There is a known issue with a dependency `fastfile` which can be resolved by polyfilling `constants` as you can see in [this example](https://github.com/proofcarryingdata/zukyc/pull/3).

## Imports

Next, import the types and functions you need from the package.  See the [API Reference](https://docs.pcd.team/modules/_pcd_gpc.html) for everything which is available, and import what you need as you write your code.  Here's an example covering the first few samples below:

```ts wrap=true title="gpc.ts"
import { 
  gpcArtifactDownloadURL,
  GPCProofConfig, gpcProve,
  gpcVerify
} from "@pcd/gpc";
```

## Prove or verify?

The GPC library allows you to create and verify zero knowledge proofs about PODs.  Depending on your use case, your app may need to prove, or verify, or both.  You may need to so either in browser or server-side.

If you intend to integrate with Zupass, you can use the [Z-API](/z-api/introduction) to query the user's PODs, and request proofs about them without using the GPC library directly.  In that case, you can skip ahead to the verification section of this guide.

This remainder of this guide walks through the steps to both prove and verify in your own app in a browser. For more details on how this process works see the [Proving and Verifying](/gpc/proving-and-verifying) page.

## Preparing Inputs

### PODs

In order to make a proof, you first need some PODs.  The examples below will work with the example POD signed in [POD Tutorial](/pod/getting-started).  Check out that page first to learn how to work with PODs.

### Artifacts

Proving and verifying also requires binary files called artifacts, which are tailored to a specific GPC circuit.  The prover and verifier need to use the same artifacts for proofs to be verified correctly.  Artifacts are released separately from the code since they're large enough not to be packaged with your app bundle.  You can obtain artifacts from [NPM](https://www.npmjs.com/package/@pcd/proto-pod-gpc-artifacts) or direct download.

See the [Circuit Artifacts](/gpc/artifacts) page for full details about how to manage artifacts.  For this example, we assume code is running in a browser, and we'll fetch them from a CDN backed by NPM.  The [gpcArtifactDownloadURL](https://docs.pcd.team/functions/_pcd_gpc.gpcArtifactDownloadURL.html) helps format the right URL path.

```ts wrap=true title="gpc.ts"
  const artifactURL = gpcArtifactDownloadURL(
    "jsdelivr",
    "prod",
    undefined
  )
```

## Proof Configuration

To make a proof, you first have to say what you want to prove.  A [GPCProofConfig](https://docs.pcd.team/types/_pcd_gpc.GPCProofConfig.html) specifies the POD entries you want to prove, and the constraints you want to apply to them.  The [Proof Configuration](/gpc/proof-configuration) page has full details, but let's start with a simple configuration.  This will prove that the ID POD has a birthdate earlier than Nov 11 2003 (represented as a UNIX timestamp), and reveal the holder's name.

```ts wrap=true title="gpc.ts"
const proofConfig: GPCProofConfig = {
  pods: {
    idcard: {
      entries: {
        name: { isRevealed: true },
        date_of_birth: {
          isRevealed: false,
          inRange: { min: 0n, max: 1068508800000n }
        }
      }
    }
  }
};
```

The name `idcard` here doesn't have any special meaning in the POD, but is just a label we're assigning here and will use below.

<Aside type="note" title="Ownership">
Note that this configuration proves that the POD is properly signed, but doesn't perform an ownership check to see that the prover has the private key corresponding to the public key in the `cardholder` entry.  To add that extra safety check, check out the [Identity and Ownership](/pod/identity-ownership) page.
</Aside>

## Make a proof

With all the preparation in place you can format the inputs to make your first ZK proof!  The [GPCProofInputs](https://docs.pcd.team/types/_pcd_gpc.GPCProofInputs.html) type lets you match up real PODs with the names used in the configuration.  In this case we provide the real POD for the name `idcard` we used above.

Now that we have all the necessary arguments we can generate a proof by calling [gpcProve](https://docs.pcd.team/functions/_pcd_gpc.gpcProve.html).

```ts wrap=true title="gpc.ts"
  const proofInputs = {
    pods: {
      idcard: myPOD
    }
  }
  const { proof, boundConfig, revealedClaims } = await gpcProve(
    proofConfig,
    proofInputs,
    artifactURL
  );
```

The result of proving includes 3 types of data:

- `proof` ([GPCProof](https://docs.pcd.team/types/_pcd_gpc.GPCProof.html)) is the cryptographic proof of correctness.  It contains opaque numbers which can be used to verify the correctness of the other fields here.
- `boundConfig` ([GPCBoundConfig](https://docs.pcd.team/types/_pcd_gpc.GPCBoundConfig.html)) is the same as the configuration you passed in, except it now contains the identifier of the specific circuit which was auto-selected for the proof.
- `revealedClaims` ([GPCRevealedClaims](https://docs.pcd.team/types/_pcd_gpc.GPCRevealedClaims.html)) contains the information revealed in this proof.  In this case, it includes the `name` entry, as well as the public key of the ID card's signer.

## Transmit the proof as JSON

Usually the prover and verifier won't be the same app (otherwise there would be no need for a proof).  The results returned by `gpcProve()` are precisely the values which need to be sent to the verifier.

You can send these objects across the network using JSON.  However, they contain non-JSON-compatible types such as `bigint` so they need to be converted before transmission.  The conversion functions like [boundConfigToJSON](https://docs.pcd.team/functions/_pcd_gpc.boundConfigToJSON.html) also fully validate the input and will throw if the data is malformed.

```ts wrap=true title="gpc.ts"
  const proofMessage = JSON.stringify({
    proof: proof,
    boundConfig: boundConfigToJSON(boundConfig),
    revealedClaims: revealedClaimsToJSON(revealedClaims)
  });
```

The verifier can reverse the conversion to recover the original objects.  The conversion functions like [boundConfigFromJSON](https://docs.pcd.team/functions/_pcd_gpc.boundConfigFromJSON.html) also fully validates the structure of the objects, and will throw an error if they are malformed.

```ts wrap=true title="gpc.ts"
  const receivedFromProver = JSON.parse(proofMessage);
  const proof = receivedFromProver.proof;
  const boundConfig = boundConfigFromJSON(receivedFromProver.boundConfig);
  const revealedClaims = revealedClaimsFromJSON(receivedFromProver.revealedClaims);
```

## Verify the proof

Finally the verifier can confirm that the proof is valid using [gpcVerify](https://docs.pcd.team/functions/_pcd_gpc.gpcVerify.html).  This needs all three parts of the proof result, as well as a URL to find the same artifacts used by the prover.

```ts wrap=true title="gpc.ts"
  const isValid = gpcVerify(
    proof,
    boundConfig,
    revealedClaims,
    artifactURL
  );
```

## Check assumptions

If `gpcVerify()` returns true, you know you have a valid proof of **something**, but it's still important to confirm it's the right proof.  The logic inside `gpcVerify()` ensures that all the contents of the config and revealed claims properly correspond to each other, but it can't decide whether they match your app's expectations.

To avoid being fooled by cheating provers, should check:

- The signer's public key is the one you expect.  Trusted issuers, such as Zupass should publish their public keys.
- The configuration reflects what you wanted to prove.

Finally you should remember to examine the revealed entries.  In this case the user's name was revealed, so you might check it against the guest list for an event.

{/* TODO: Move some of this detail into the verification page. */}
<Aside type="note" title="Checking Requested Configuration">
If the prover can use any configuration, it's can be hard to know if they're proving the right thing.  It could require examining each entry in the config one by one.  See the [Verification](/gpc/verification) page for a full discussion.

In many cases, though, it's the verifier who provides the configuration when they request a proof.  In this case there's an easy way for the verifier to be sure the proof matches the config they requested.  They can use their original config to call `gpcVerify()`.  All they need from the prover is the circuit identifier.  Code to do this check might look like this:

```ts wrap=true title="gpc.ts"
  const verifyConfig: GPCBoundConfig = {
    ...requestedConfig,
    circuitIdentifier: boundConfig.circuitIdentifier
  }
  const isValid = gpcVerify(
    proof,
    verifyConfig,
    revealedClaims,
    artifactURL
  );
```
</Aside>

## What's next?

- Read more about about what [Proving and Verification](/gpc/proving-and-verifying) does
- Check out the rest of the pages of this guide for deeper dives on various aspects of GPCs.
- See the [API Reference](https://docs.pcd.team/modules/_pcd_gpc.html) for more details on the types and functions of the POD library.
- Read about [PODs](/pod/introduction) and how the [Z-API](/z-api/introduction) lets you request proofs about PODs from Zupass.
- Check the [Developer Resources](resources) for references to related packages.
- Read or watch more about PODs in both vision and technical detail on the [Learning](/learning) page.  In particular, check out the [intro and deep dive talks](/learning#pod-and-gpc) for more about how PODs and GPCs work.


## Proof Configuration


import { Aside } from '@astrojs/starlight/components';

So you know can use [GPCs](/gpc/introduction) to [make proofs](./proving-and-verifying) about PODs, but how do you specify what you want to prove? This page covers the full configurability of GPCs, and all the things you can prove with them.

## Configuring a Proof

When you generate a proof, you say what to prove using two arguments. [Proof Configuration](https://docs.pcd.team/types/_pcd_gpc.GPCProofConfig.html) specifies what you're proving as a set of constraints. It also gives names to the inputs and specifies which parts of those inputs should be revealed. [Proof Inputs](https://docs.pcd.team/types/_pcd_gpc.GPCProofInputs.html) provide data which satisfies the constraints, using the names assigned by the config.

A proof config is often fixed by the app use case, and reused for many proofs. If not hard-coded, the config is often part of a request from the verifier which triggers the creation of a proof.  In contrast, at least some of the inputs are likely to vary with each proof. It might be up to the end user to select the inputs which satisfy the constraints.

Each of the constraints of a proof correspond to a [module](./artifacts#modular-circuits) in the [ZK circuit](https://docs.circom.io/background/background/) used to generate the proof. For instance, each POD mentioned in the configuration needs an Object module to verify its signature.  Each entry mentioned in the configuration needs an Entry module to verify its inclusion in the POD's Merkle tree.

You don't need to interact with modules directly because the [GPC compiler](./proving-and-verifying#overall-flow) translates the application's configuration and inputs into the numeric inputs required by circuit modules. It also picks a circuit from the available [family](./artifacts/#circuit-family) with enough modules to accept those inputs. More modules means a larger circuit and a more expensive proving process (more time, more memory).

The page below walks through all of the [supported constraints](#supported-constraints) you can use in your applications.  But first let's walk through an example configuration.

## A Real-World Example

A forum app wants a user to prove they attended a community event without revealing which one. [Zupass](https://zupass.org) holds a user's tickets to various events as PODs. When the user logs in, the forum sends a request using the [Z API](/z-api/introduction), specifying the fields of the ticket POD to check or reveal (constraints). The forum also provides a list of acceptable event IDs or ticket signing authorities (to include in the inputs). Zupass then allows the user to pick from their tickets which match these constraints, and generate a proof to send back to the forum.

You can learn more about how make this request with the Z API on the [Ticket Proofs](/z-api/ticket-proofs) page, but for this discussion we're interested in the resulting GPCProofConfig which could be defined in TypeScript like this:

```ts
{
    const ticketConfig = {
        pods: {
            ticket: {
                entries: {
                    attendeeEmail: { isRevealed: true },
                    eventId: { isRevealed: false,
                               isMemberOf: "validEventIDs" },
                    owner: { isRevealed: false,
                             isOwnerID: "SemaphoreV4" }
                },

                signerPublicKey: { isRevealed: false,
                                   isMemberOf: "trustedTicketSigners" }
            }
        }
    }
}
```

The meaning of this configuration should be easy to grasp, but we'll get into all the details below.  This config implies the need four inputs, which are given names in the configuration.  Some of these names are cryptographically important while others are developer choice:

- `ticket` identifies a POD containing at least 3 entries named `attendeeEmail`, `eventId`, and `owner`.
  - The name `ticket` is arbitrary, used to link together config and inputs.
  - the names of the entries are cryptographically verified, and were selected by the POD's signer.
- `validEventIDs` and `trustedTicketSigners` name lists of values which are compared to values in the POD.
  - The list names are arbitrary, used to link together config and inputs.
- `SemaphoreV4` identifies the type of private key the owner must provide to prove their ownership of the POD.
  - The name `SemaphoreV4` corresponds to one of the identity formats supported by the library.

What if the community forum was open only to people who attended more than one event? A multi-POD configuration could prove that too:

```ts
{
    const twoTicketCOnfig = {
        pods: {
            ticket1: {
                entries: {
                    attendeeEmail: { isRevealed: true },
                    eventId: { isRevealed: false,
                               isMemberOf: "validEventIDs" },
                    owner: { isRevealed: false,
                             isOwnerID: "SemaphoreV4" }
                },

                signerPublicKey: { isRevealed: false,
                                   isMemberOf: "trustedTicketSigners" }
            }
            ticket2: {
                entries: {
                    attendeeEmail: { isRevealed: false,
                                     equalsEntry: "ticket1.attendeeEmail" },
                    eventId: { isRevealed: false,
                               isMemberOf: "validEventIDs",
                               notEqualsEntry: "ticket1.eventId" },
                    owner: { isRevealed: false,
                             isOwnerID: "SemaphoreV4" }
                },

                signerPublicKey: { isRevealed: false,
                                   isMemberOf: "trustedTicketSigners" }
            }
        }
    }
}
```

We're now proving the existence of two ticket PODs.  Each has similar constraints, but we require they contain the same email address, but two different event IDs (both from the valid list).

In the sections below we'll discuss the details of how these configurations are structured, and the individual constraints.

## Configuration Structure

The GPCProofConfig type is structured around the different categories of constraints you can use in a proof. See the [API Reference](https://docs.pcd.team/types/_pcd_gpc.GPCProofConfig.html) for full details. The pseudo-code below shows how each category of constraints fits into the configuration.  Each comment corresponds to one of the [constraint](#supported-constraints) sections below.

```ts
    const ticketConfig = {
        pods: {
            <POD name 1>: {
                entries: {
                    <entry name 1>: {
                        // Entry constraints for entry 1...
                    },
                    <entry name 2>...
                }

                // Object constraints for POD 1...
            }
            <POD name 2>...
        }

        // Global constraints...
    }

```

## Supported Constraints

This section covers all possible GPC constraints in these categories:

- **Entry constraints** apply to a single entry of a single POD. The entry configuration always specifies whether the entry value should be revealed, and usually contains additional [constraints](#entry-constraints) on the entry.
- **Object constraints** apply to a single POD included in the proof. In addition to the named entries of the POD, these include a set of [virtual entries](#virtual-entries) which constrain object-level metadata (such as the contentID) in a format similar to entry constraints.
- **Global constraints** apply to all of the input PODs together. This includes [tuples](#tuples) which group together multiple entries as a single value.  There are also some [global constraints](#global-constraints) which control the behavior of the overall proof.
- **Other Inputs** which don't directly match the config structure are also described [below](#other-inputs).s

### Entry Constraints

The named entries of PODs are the primary source of data to constrain in your proofs.  Most of them optional.

<Aside type="note" title="Presence or Absence">
By mentioning an entry in your configuration you are implicitly proving that such an entry exists in the POD.  Even if the value is not revealed, the name is revealed. If that's all you want to prove, you can configure an entry with `isRevealed: false` and no other constraints. You'll need to do this if you want to refer to the entry by name in another entry or tuple.

Any entries not mentioned in the configuration may or may not exist in the POD since nothing is being proven about them.

It isn't possible to directly prove an entry does not exist in a POD. If your app needs that, you can consider issuing PODs with an entry value `null`, to reveal in your configuration.
</Aside>

The following constraints can be applied to any type of value.  They are implemented by using the hash of the value.

- **Visibility** ([isRevealed](https://docs.pcd.team/types/_pcd_gpc.GPCProofEntryConfigCommon.html)) is the only required configuration for every entry.  If set to `true` then the entry value will be included in the revealed claims and visible to the verifier.  Otherwise the value is hidden, but can still be constrained.
- **Equality** ([equalsEntry](https://docs.pcd.team/types/_pcd_gpc.GPCProofEntryConfigCommon.html), [notEqualsEntry](https://docs.pcd.team/types/_pcd_gpc.GPCProofEntryConfigCommon.html)) constrains that two entries are (or ar not) equal to each other. You specify the second entry to compare using a qualified name like `otherPOD.entryName`, and can refer to [virtual entries](#virtual-entries). Each entry can have only one equality check, but since these are defined unidirectionally you can chain them together to constrain several values to be equal.
- **List Membership** ([isMemberOf](https://docs.pcd.team/types/_pcd_gpc.GPCProofEntryConfigCommon.html), [isNotMemberOf](https://docs.pcd.team/types/_pcd_gpc.GPCProofEntryConfigCommon.html)) constraints that this entry is (or is not) present in a list of values included as a named public input. This Each entry can have one membership check or non-membership check (not both).
- **Ownership** ([isOwnerID](https://docs.pcd.team/types/_pcd_gpc.GPCProofEntryConfig.html)) allows the prover to assert [ownership](./identity-ownership) of a POD. More specifically, this constrains the entry to be equal to the public identifier corresponding to the private identifier (private key) presented as one of the proof inputs. The string in this constraint is identity protocol to use, most often `SemaphoreV4`. This is a type of equality constraint, so cannot be combined with `equalsEntry` or `notEqualsEntry`.

The following numerical constraints can be applied only to numeric values which fit in a 64-bit signed integer (such as the `int`, `boolean` or `date` types). They operate on the value itself, not only its hash.  Since they constrain the value to be a number, and can be used if you want to be sure of the type of an unrevealed value. They operate on the value itself, not only its hash.

- **Bounds Check** ([inRange](https://docs.pcd.team/types/_pcd_gpc.GPCProofEntryBoundsCheckConfig.html), [notInRange](https://docs.pcd.team/types/_pcd_gpc.GPCProofEntryBoundsCheckConfig.html)) constrains a numeric value to be in (or not in) a closed interval between two numbers, specified as signed `bigint` values. You can combine both `inRange` and `notInRange` checks on the same entry. The bounds are limited to a signed 64-bit range, which you can specify explicitly with the [POD_INT_MAX](https://docs.pcd.team/variables/_pcd_pod.POD_INT_MAX.html) and [POD_INT_MIN](https://docs.pcd.team/variables/_pcd_pod.POD_INT_MIN.html) constants.  All other numeric and arithmetic operations on entry values require a bound check as a prerequisite, in order to limit the size of the inputs.
- **Inequality** ([greaterThan](https://docs.pcd.team/types/_pcd_gpc.GPCProofEntryInequalityConfig.html), [greaterThanEq](https://docs.pcd.team/types/_pcd_gpc.GPCProofEntryInequalityConfig.html), [lessThan](https://docs.pcd.team/types/_pcd_gpc.GPCProofEntryInequalityConfig.html), [lessThanEq](https://docs.pcd.team/types/_pcd_gpc.GPCProofEntryInequalityConfig.html)) compare this entry to another entry and require the specified numeric relationship. Like equality constraints, you can specify the second entry to compare using a qualified name like `otherPOD.entryName`, and can refer to [virtual entries](#virtual-entries). Each entry can have multiple inequality checks, but only one of each type.  Since these are defined unidirectionally you can chain them together to constrain several values in more complex ways.

<Aside type="note" title="Value Equivalence">
Keep in mind that value types are hints, not part of the type's identity.  Two values of different types might compare as equal if they are in the same [equivalency category](/pod/values#equivalency-categories), meaning they use the same hash function.

This applies to value constraints like `isMember` and also to numeric constraints like `greaterThan`.  The value `{boolean: true}` is a member of a list `[{int: 1}]`.  Similarly you can constrain that a value of `{date: "1999-01-01"}` is greater than `{cryptographic: 100}`.  Dates are represented as numbers using millis since the epoch (like the JavaScript Date type).
</Aside>

### Virtual Entries

Virtual entries allow you to constrain global properties of a POD using the same syntax as named entries. All constraints on virtual entries are optional, so they are often omitted from configuration if the default behavior is appropriate. There are two virtual entries available in each POD:

- [signerPublicKey](https://docs.pcd.team/types/_pcd_gpc.GPCProofObjectConfig.html) is the public key of the signer of the POD. This is revealed by default, since you shouldn't trust a POD if you don't know who signed it.  You can choose to hide this, though you should probably only do so if you are constraining it in some other way, such as using list membership or a tuple.
- [contentID](https://docs.pcd.team/types/_pcd_gpc.GPCProofObjectConfig.html) is the content ID of the POD, i.e. the root of its Merkle tree, which acts as a succinct identifier of its content. This is private by default, since revealing it reveals some information about the contents of the POD, potentially leading to offline guessing attacks. Comparing an entry of one POD to the content ID of another POD is one way for PODs to refer to or "contain" other PODs.

Virtual entries can be constrained using a subset of the [entry constraints](#entry-constraints) described above.  Specifically you can specify Visibility, Equality, and List Membership constraints, but not Ownership or Numeric constraints.

<Aside type="note" title="POD Validity Checks">
The virtual entries of any given POD are tied to the verification of the structure of the POD. By including a POD in a proof, you are always constraining it to have a valid signature, and constraining each of the named entries to be members of the Merkle tree rooted in its Content ID. These things are always verified by a GPC proof even if you don't mention the virtual entries in your configuration.
</Aside>

### Global Constraints

Global constraints apply to the entire proof, or all of the PODs in it:

- [circuitIdentifier](https://docs.pcd.team/types/_pcd_gpc.GPCProofConfig.html) allows you to optionally specify that a proof should be generated using a specific circuit, rather than picking the best fit from the family. After the proof is generated the config becomes a [bound config](https://docs.pcd.team/types/_pcd_gpc.GPCBoundConfig.html) in which this field is mandatory.
- [uniquePODs](https://docs.pcd.team/types/_pcd_gpc.GPCProofConfig.html) can be used in a multi-POD proof to constrain that each of the named PODs is unique, meaning no two of them have the same content ID. This defaults to false, meaning it is allowed for the prover to use the same POD to satisfy multiple PODs mentioned in the proof config.

When you specify an entry by a qualified name in a proof, you can specify a virtual entry instead using a prepended `$`.  For instance if 'pod1' refers to 'pod2' by ID, you could constrain this using an entry constraint like this:

```ts
    pod1: {
        otherPOD: { isRevealed: false, equalsEntry: "pod2.$contentID"}
    }
```

### Tuples

Tuples allow you to combine multiple entry values into a single value (pair, triple, etc) for use in further constraints.  [Tuples](https://docs.pcd.team/types/_pcd_gpc.GPCProofTupleConfig.html) are defined globally and can contain entries from multiple PODs. A tuple can be constrained in much the same way as an [entry](#entry-constraints), though only List Membership constraints are currently supported.

For example, in the [example](#a-real-world-example) above, rather than separately constraining the signer and event ID, you could form them into a pair so that each signer is only allowed to issue tickets to their own events.  You'd then declare a tuple like this:

```ts
signerEventPair: {
    entries: ["ticket.$signerPublicKey", "ticket.eventId"],
    isMemberOf: "validSignerEventPairs"
}
```

To input the list of valid pairs, each tuple is represented in TypeScript as an [array of PODValues](https://docs.pcd.team/types/_pcd_pod.PODValueTuple.html).

### Other Inputs

In addition to providing all of the named PODs and lists mentioned in the configuration, proof inputs can control a few optional features of a proof:

- **Watermark**: This is an extra value included in the proof in a cryptographically secure way. The watermark can be any [PODValue]() such as a string or number, and can be used to include any extra app-specific data in the proof, often to avoid replay attacks. Watermarks  often hold a unique nonce or timestamp, or hold a message which uses the proof in place of a signature. See the page on [Verifying Securely](./verification) for more suggestions.
- **Owner**: Ownership of a POD can be established by proving that you hold the private key which corresponds to an identity mentioned in the POD. The [`isOwnerID`](#entry-constraints) constraint marks which entry of the POD is checked. See the [Identity and Ownership](./identity-ownership) page for more details.

## Security Reminders

{/*TODO: consider moving this to a dedicated security page*/}

Here are a few reminders of some details above which may be relevant to the security of your app. You can design the schemas of the PODs you issue, or the constraints of your proofs to avoid being tripped up by these issues.

- Anything not mentioned in the configuration isn't proven and thus may not be true. For example, any entry not named in your proof may or may not be present in the POD, depending on the issuer's behavior. A value you expect to be a number might actually be a string, unless you constrained it in some way.
- PODs are freely copyable. All the PODs mentioned in a proof could be copies of a single POD, unless you use the [`uniquePODs`](#global-constraints) constraint.
- The signers of each POD (`signerPublicKey`) should always be checked in some way (see [Verifying Securely](./verification)). Anyone an sign a POD with a random key, but it's trust in the issuer which makes a POD meaningful. Signers can be checked in several ways:
  - Reveal the signing key (default behavior) so the verifier can check it outside the proof.
  - Hide the signing key, but constrain it to be a member of a public list.
  - Hide the signing key, but constrain it to equal an entry in another "certificate POD" signed by a trusted signer.
- Signers can issue many types of PODs, which could use common names like `email` for different purposes.  When designing your POD schemas, consider including a `pod_type` which verifiers can check.
- POD value types are only hints, checked by the library but not by the cryptographic proof. Keep in mind the [equivalency categories](/pod/values#equivalency-categories) of values which can be identical across types. For instance, even if the expected schema of a POD specifies an `int` value, you can't be sure it's not a huge number until you check it with an `inRange` constraint.
- You can prove the presence of a named entry without revealing it, but you can't prove the absence of a named entry without revealing the whole POD. If you're issuing PODs with optional entries, consider setting them to `null` if you think provers need to constrain "unused" entries.
 
## Additional Resources

- The [Proving and Verification](/gpc/proving-and-verifying) page has a deep dive into how your configuration turns into a proof.
- For full details on all parts of configuration, see the API reference for [GPCProofConfig](https://docs.pcd.team/types/_pcd_gpc.GPCProofConfig.html) and [GPCProofInputs](https://docs.pcd.team/types/_pcd_gpc.GPCProofInputs.html).
- The ZuKYC app has a well-documented configuration in its [proof request](https://github.com/proofcarryingdata/zukyc/blob/main/apps/gpc-verifier/app/util/proofRequest.ts#L42) which exercises many features.
- The tutorial code includes example configurations for [1 POD](https://github.com/proofcarryingdata/zupass/blob/main/examples/pod-gpc-example/src/gpcExample.ts#L104) and [2 PODs](https://github.com/proofcarryingdata/zupass/blob/main/examples/pod-gpc-example/src/gpcExample.ts#L315).


## Proving And Verifying


This page describes the details of what happens when a prover generate a GPC proof, and what happens when a verifier checks that proof.

## Overall Flow

The GPC library allows your app to describe a proof using a human-readable [configuration](./proof-configuration).  This configuration defines what you want to prove, by putting constraints on some given PODs.

GPC is named for the **General Purpose Circuits** used to make proofs. These are modular, configurable [ZK circuits](https://docs.circom.io/background/background/) of different sizes grouped into a family. To prove a configuration, the GPC library will pick the smallest (and therefore fastest) circuit with enough modules for your configuration, and then fetch the binary files (called [artifacts](./artifacts)) needed to use it.

Your app doesn't need to interact directly with circuits because the **GPC compiler** translates between the application layer and the cryptographic layer of ZK circuits. When you call [gpcProve()](#proof-phases) the compiler translates your configuration into the numeric inputs to a circuit.  It then reverses the process to translate the output of the circuit into the revealed claims.

When you call [gpcVerify()](#verification-phases), a similar compilation process happens. Repeating compilation confirms that the configuration and claims match the inputs to the circuit when it is verified. Verification returns a simple boolean result, so no decompilation is necessary.

![proof and verification compiler](../../../assets/proving-and-verifying.jpg)

The sections below provide more details on the parts of this process shown in the diagram above.

## Inputs and Outputs

To generate a proof, call the [gpcProve()](https://docs.pcd.team/functions/_pcd_gpc.gpcProve.html) function. To do so you'll need to set up these arguments:

- [Proof Configuration](https://docs.pcd.team/types/_pcd_gpc.GPCProofConfig.html) is the description of what you want to prove.  In many cases, the same configuration can be reused to generate many proofs. The configuration defines constraints which inputs must satisfy. See the [configuration](./proof-configuration) page for more information on the available constraints.
- [Inputs](https://docs.pcd.team/types/_pcd_gpc.GPCProofInputs.html) are the input data constrained by the configuration. Inputs are more likely to be different for each proof you generate.  Primarily these are the PODs you want to prove about.  Inputs also include other public information such as membership lists, and private values such the identity of a POD's [owner](./identity-ownership).
- [Artifacts Path](./artifacts) is a URL or filesystem path where the binary files for the circuit family can be found. Prover and verifier must use the same version of artifacts to maintain compatibility. The artifacts needed for proving are somewhat large (10s of MB) while those for verification are smaller (10s of KB).  See the [artifacts](./artifacts) page for more details.
- [Circuit Family](https://docs.pcd.team/types/_pcd_gpc.GPCCircuitFamily.html) [optional] is the list of available circuits with their defining parameters. You can pass this optional argument if you want to override the default family to use custom-generated circuits, or pick from a smaller subset.

```ts
 const { proof, boundConfig, revealedClaims } = await gpcProve(
   proofConfig,
   proofInputs,
   GPC_ARTIFACTS_PATH
 );
```

[gpcProve()](https://docs.pcd.team/functions/_pcd_gpc.gpcProve.html) will throw an error if your inputs are malformed or don't satisfy the configured constraints. Otherwise it will produce these outputs:

- [Proof](https://docs.pcd.team/types/_pcd_gpc.GPCProof.html) is the mathematical proof of your claims.  This JSON object contains opaque numbers you shouldn't need to manipulate directly.
- [Bound Configuration](https://docs.pcd.team/types/_pcd_gpc.GPCBoundConfig.html) is the same as the original proof configuration, with the addition of a circuit identifier specifying the specific circuit which was chosen.  The bound config is also in a canonical form.  Optional fields are simplified so that equivalent configurations are more likely to look identical.
- [Revealed Claims](https://docs.pcd.team/types/_pcd_gpc.GPCRevealedClaims.html) contains the parts of the proof inputs which are publicly revealed in the proof, such as POD entries, membership lists, or [nullifiers](./identity-ownership).

These three outputs are precisely what the prover needs to send to the verifier.  With these 3 arguments, plus an artifacts path and optional circuit family, you can call [gpcVerify()](https://docs.pcd.team/functions/_pcd_gpc.gpcVerify.html).

```ts
 const isValid = await gpcVerify(
   proof,
   boundConfig,
   revealedClaims,
   GPC_ARTIFACTS_PATH
 );
```

Verification will throw an error if the inputs are malformed, or else return a boolean indicating whether the proof is valid. If it returns true, there are app-specific checks to perform next, as described on the [verification](./verification) page.

## Proof Phases

Inside of [gpcProve()](https://docs.pcd.team/functions/_pcd_gpc.gpcProve.html) the proving process goes through several phases:

1. **Check**: Validate all arguments and throw an error if any of them are malformed or contain illegal values. This checks structure and valid ranges, but doesn't do cryptographic validation.
2. **Requirements**: Determine the number of modules required for the configured proof, and pick the smallest circuit which can fit. Or else if the config contains a specific circuit identifier, ensure that it contains the required modules.
3. **Bind**: Canonicalize the configuration and add the selected circuit identifier to generate the Bound Configuration.
4. **Compile**: Translate the configuration into the inputs for the selected circuit.
5. **Load Artifacts**: Form a URL or file path to the specific artifacts (proving key, witness generator) needed, then load them.  This is a fetch from a URL if in browser, or a read from disk otherwise.
6. **Generate Proof**: The cryptographic process of proof generation uses the witness generator and proving key to process the inputs and produce outputs.
7. **Decompile**: Use the circuit outputs plus the original inputs to form the revealed claims.

There are also other functions in the library which allow you to perform some of these steps separately for specific needs.  This can allow you to customize or relocate the proving itself without duplicating the work of the GPC compiler.

For instance [gpcCheckProvable()](https://docs.pcd.team/functions/_pcd_gpc.gpcCheckProvable.html) lets you check if a given set of inputs fit your configured constraints without the expensive cryptography.  If you want to customize the ZK proving step or perform it using a native library, you can call [gpcPreProve()](https://docs.pcd.team/functions/_pcd_gpc.gpcPreProve.html) to perform steps 1-4, then use your own prover before calling [gpcPostProve()](https://docs.pcd.team/functions/_pcd_gpc.gpcPostProve.html) to decompile the results.

## Verification Phases

Inside of [gpcVerify()](https://docs.pcd.team/functions/_pcd_gpc.gpcVerify.html) the verification process goes through phases quite similar to proving:

1. **Check**: Validate all arguments and throw an error if any of them are malformed or contain illegal values. This checks structure and valid ranges, but doesn't do cryptographic validation.
2. **Requirements**: Determine the number of modules required for the configured proof, and ensure that the circuit identifier in the Bound Configuration fits the required modules.
4. **Compile**: Translate the configuration and claims into the public signals for the selected circuit.
5. **Load Artifacts**: Form a URL or file path to the specific artifact (verification key) needed, then load it. This is a fetch from a URL if in browser, or a read from disk otherwise.
6. **Verify Proof**: The cryptographic process of proof verification uses verification key to process the public signals and determine whether the proof is cryptographically valid.

If you want to customize the verification process, you can call [gpcPreVerify()](https://docs.pcd.team/functions/_pcd_gpc.gpcPreVerify.html) to perform steps 1-5 without proof verification. This allows you to reuse the GPC compiler with your own verification stack, perhaps in preparation for [on-chain verification](./on-chain).


## Artifacts


import { PackageManagers } from "starlight-package-managers";

GPC proofs use a family of configurable ZK circuits pre-built using the [Circom](https://docs.circom.io/background/background/) language. The GPC compiler handles the details of these circuits for you, but requires access to some binary files (artifacts generated) by Circom. This page describes what those artifacts are for and how to access them in your app.

## Configurable Circuits

GPC is named for the **General Purpose Circuits** used to make proofs. A ZK circuit can generate (and verify) a proof about numbers, some of which are secret while others are revealed. The [GPC compiler](./proving-and-verifying) handles translating your app's configuration and inputs into these raw numbers.

GPC circuits provide flexibility in two key ways. A GPC circuit is made up of modules which can be configured and linked together to make different proofs. Each circuit is also a member of a family of circuits, each containing a different combination of modules. This section describes the circuits which make up a family, and how to understand the circuit identifier you'll see in your [bound config](https://docs.pcd.team/types/_pcd_gpc.GPCBoundConfig.html).

### Modular Circuits

GPC circuits are built from modules which implement reusable logic. These modules correspond to the constraints which appear in a [proof configuration](./proof-configuration). Each module is independent but can be linked to other modules to meet the needs of the proof.  Here are a few key examples of how modules are linked together:

- An **Object** module checks the signature of a single POD using its content ID and public key.
- An **Entry** module checks that an entry's name hash and value hash are included in a Merkle tree rooted in its content ID. By linking the content ID to an Object module, we prove the entry is part of a specific POD. We can optionally reveal the value hash in an output of this module.
- An **Numeric Value** module hashes a specific number and checks that the result matches the value hash of a linked Entry module. It then applies numeric constraints to the value, such as a bounds check.
- An **Entry Inequality** module is linked to two Numeric Entry modules, and can prove one value is greater than the other.

Further modules can be chained together in similar ways. The GPC compiler needs enough modules of the right types to meet the needs of a configuration. Extra modules can be disabled or filled in with default values, so the modules in a circuit don't need to be an exact match to the configuration.

The full set of modules in a circuit can be seen in its [circuit parameters](https://docs.pcd.team/types/_pcd_gpcircuits.ProtoPODGPCCircuitParams.html), like the JSON example below. You can see the parameters of all of the circuits in the default family in this [JSON file](https://github.com/proofcarryingdata/zupass/blob/main/packages/lib/gpcircuits/src/circuitParameters.json). 

```json
{
    "maxObjects": 3,
    "maxEntries": 10,
    "merkleMaxDepth": 8,
    "maxNumericValues": 4,
    "maxEntryInequalities": 2,
    "maxLists": 4,
    "maxListElements": 20,
    "maxTuples": 5,
    "tupleArity": 3,
    "includeOwnerV3": true,
    "includeOwnerV4": true
}
```

### Circuit Family

A family of circuits is made up of many circuits with different module counts. In future there might be multiple families based on different templates, but currently all circuits are part of the family identified as ProtoPODGPC. Not all possible combinations of modules have been pre-compiled for use, so the GPC library needs to be told which circuits are available.

When you call [gpcProve()](https://docs.pcd.team/functions/_pcd_gpc.gpcProve.html) or [gpcVerify()](https://docs.pcd.team/functions/_pcd_gpc.gpcVerify.html) you can specify a circuit family using an array of circuit descriptions.  Each description contains the circuit parameters, as well as [description fields](https://docs.pcd.team/types/_pcd_gpcircuits.CircuitDesc.html) including a name and a cost (size). The cost is used to pick the smallest circuit for any given proof.

Most of the time, you can use the default without passing your own circuit family. You might want to pass a custom family in order to reduce the number of artifacts you need to embed in your app, or you might instead decide to compile more circuit artifacts to generate a larger family (using the scripts in the [@pcd/gpcircuits](https://github.com/proofcarryingdata/zupass/tree/main/packages/lib/gpcircuits) package).

### Circuit identifiers

The family and parameters of a circuit are summarized in a unique identifier string. The circuit whose [parameters](#modular-circuits) are shown above is identified as `proto-pod-gpc_3o-10e-8md-4nv-2ei-4x20l-5x3t-1ov3-1ov4`.  This string is intended to be unique rather than readable, but you can see the family name and abbreviated parameters in the name. This format could change in future, so we don't recommend parsing a circuit identifier to obtain parameters.

The circuit identifier is used to look up the pre-compiled artifacts for the circuit. It's important for the prover and verifier to agree on the same circuit, which is why the circuit identifier is always included in the [bound config](https://docs.pcd.team/types/_pcd_gpc.GPCBoundConfig.html). It's also important for prover and verifier to use artifacts compiled at the same time, which is covered by the rest of this page.

## What are artifacts?

The GPC circuits in the default family have been pre-compiled for easy use. The pre-compilation of each circuit generates 3 binary files needed by either the prover or the verifier:

- **Proving Key** (`*-pkey.zkey`) is data used by the prover as the mathematical definition of the circuit.
- **Witness Generator** (`*.wasm`) is code used by the prover to calculate all the intermediate values needed to tailor the inputs to the circuit.
- **Verification Key** (`*-vkey.json`) is data used by the verifier to check the proof against the mathematical definition of the circuit.

Proving artifacts are somewhat large (10-25MB) while the verification key is smaller (15-40KB).  Both scale up roughly with the size of the circuit.  You can see an example of these artifacts for the default family on [NPM](https://www.npmjs.com/package/@pcd/proto-pod-gpc-artifacts?activeTab=code).

The circuit compilation involves a setup process which securely generates random numbers used to prove and verify. This means that the prover and verifier need to use artifacts generated at the same time in order to remain compatible. The artifact distribution mechanisms below use NPM packages with semantic versioning to distinguish between different incompatible artifacts for the same family.

{/* TODO: Document Z-API versioning when that's implemented. */}

## Using Artifacts

When you call [gpcProve()](https://docs.pcd.team/functions/_pcd_gpc.gpcProve.html) or [gpcVerify()](https://docs.pcd.team/functions/_pcd_gpc.gpcVerify.html) you are required to provide an artifact path. This identifies a folder containing artifacts for the circuits in the configured circuit family. The library will combine that path with the circuit identifier to form the full path to the file(s) it needs to do its work.

If your code is running in a browser, the artifact path must be a URL where files can be downloaded using `fetch()`. If your code is not in a browser, the artifact path must be a filesystem path accessible to the app using the Node `fs` module. (This is the reason for some of the polyfill requirements mentioned in [Installation](./getting-started#installation), which we hope to eliminate in future.)

When you deploy your app, you need to make sure the right artifact files are available when needed.  To do so you can select artifacts of a specific [version from NPM](#obtaining-artifacts). Then decide how your app will obtain those artifacts using a [URL](#artifact-urls), or from the [filesystem](#artifacts-from-filesystem).

If your app interacts with Zupass using the [Z API](/z-api/introduction), it's likely that Zupass will be generating proofs for you, but your app will still need artifacts to verify proofs. In this case it's important that your app is using the same version of artifacts as Zupass. That version is currently fixed at 0.13.0, but a protocol for version negotiation will come in future.

### Obtaining Artifacts

Pre-compiled GPC artifacts are distributed via NPM in the [@pcd/proto-pod-gpc-artifacts](https://www.npmjs.com/package/@pcd/proto-pod-gpc-artifacts) package. To be sure of picking an artifact package compatible with your GPC library, you can look at the [GPC_ARTIFACTS_NPM_VERSION](https://docs.pcd.team/variables/_pcd_gpc.GPC_ARTIFACTS_NPM_VERSION.html) constant. Currently version 0.13.0 is the stable beta version released in November 2024.

Since artifacts are large, you might not want to package them directly into your app bundle, so you should add the artifact package as a `devDependency`.

<PackageManagers
  frame="none"
  pkgManagers={["npm", "yarn", "pnpm", "bun"]}
  pkg="@pcd/proto-pod-gpc-artifacts"
  dev
/>

Your app likely won't need all of these artifacts unless it can make a lot of different types of proofs. For instance, if your app only makes proofs about one POD at a time, you don't need any artifacts for circuits with more than one Object module.  You an reduce the size of the necessary artifacts by reducing the GPC family to a subset of circuits which fit the proofs you need to make. If you do that you should use the optional `circuitFamily` argument to [gpcProve()](https://docs.pcd.team/functions/_pcd_gpc.gpcProve.html) or [gpcVerify()](https://docs.pcd.team/functions/_pcd_gpc.gpcVerify.html) to pass a smaller array of circuit descriptions, obtained by copying and filtering the [default family](https://docs.pcd.team/variables/_pcd_gpc.DefaultCircuitFamily.html). This could be as small as a single circuit for apps which make only one type of proof.

### Artifact URLs

For your clients running in a browser, you'll need a URL to be available to download at a known URL. For testing and small deployments, we provide some public options to download the artifacts from GitHub or NPM. For larger or critical production deployments, we recommend deploying artifacts to your own web server.

#### Public Download

You can directly download GPC artifacts directly from GitHub or NPM using one of several mechanisms listed below.  The [gpcArtifactDownloadURL()](https://docs.pcd.team/functions/_pcd_gpc.gpcArtifactDownloadURL.html) function will help format a URL for each of these services, but an example is provided below of for each service using artifact version 0.13.0.  While the examples show the artifact path, they link to a specific vkey file since not all download sources support listing folders:

- **jsdelivr** is a CDN backed by NPM, and the most reliable in our testing. It has a strict size limit, so may not be available in future versions.  Example: [https://cdn.jsdelivr.net/npm/@pcd/proto-pod-gpc-artifacts@0.13.0](https://cdn.jsdelivr.net/npm/@pcd/proto-pod-gpc-artifacts@0.13.0/proto-pod-gpc_1o-10e-5md-0nv-0ei-0x0l-0x0t-0ov3-1ov4-vkey.json)
- **unpkg** is a CDN backed by NPM with looser size limits, but in our testing was sometimes subject to failures or rate limits.  Example: [https://unpkg.com/@pcd/proto-pod-gpc-artifacts@0.13.0](https://unpkg.com/@pcd/proto-pod-gpc-artifacts@0.13.0/proto-pod-gpc_1o-10e-5md-0nv-0ei-0x0l-0x0t-0ov3-1ov4-vkey.json)
- **GitHub** allows direct download using a revision identified by tag or branch name.  Example: [https://raw.githubusercontent.com/proofcarryingdata/snark-artifacts/@pcd/proto-pod-gpc-artifacts@0.13.0/packages/proto-pod-gpc](https://raw.githubusercontent.com/proofcarryingdata/snark-artifacts/@pcd/proto-pod-gpc-artifacts@0.13.0/packages/proto-pod-gpc/proto-pod-gpc_1o-10e-5md-0nv-0ei-0x0l-0x0t-0ov3-1ov4-vkey.json)

Note that the `zupass` source listed in the code is intended only for use inside the Zupass website, and won't work on other domains.

### Deploying to Your Website

To avoid reliance on the download mechanisms above, which could go down or be rate-limited at any time, we recommend deploying GPC artifacts to your own web server where your client can download them reliably. To do so you'll need to copy the artifacts from `node_modules` into some location which your web server will make available to your client.

The details of how to do this will be specific to how your server is deployed and hosted. You can see examples of how this is done in the [Zupass](https://github.com/proofcarryingdata/zupass/blob/bcfe298b103907fe2f2970eed548e0b948651a58/apps/passport-client/build.ts#L240) server (deployed on Render) and the [ZuKYC](https://github.com/proofcarryingdata/zukyc/blob/3a61ebc14d4eb320caa66a2c342860606a9a389b/apps/gpc-prover-client/next.config.js#L23) server (deployed on Vercel).

### Artifacts from Filesystem

For your servers, command-line apps, and unit tests, you'll need the artifacts to be available on the filesystem. If your code is running directly from the repo where it was built, you can point directly into the `node_modules` directory (specific path will vary based on your package layout):

```ts
const GPC_ARTIFACTS_PATH = path.join(
  __dirname,
  "../node_modules/@pcd/proto-pod-gpc-artifacts"
);
```

When deploying a server app which doesn't have direct access to the build repo, you'll need to copy the artifacts from `node_modules` into some location your server can access. The details of how to do this will be specific to how your server is deployed and hosted. You can see examples of how this is done in the [Zupass](https://github.com/proofcarryingdata/zupass/blob/bcfe298b103907fe2f2970eed548e0b948651a58/apps/passport-client/build.ts#L240) server (deployed on Render) and the [ZuKYC](https://github.com/proofcarryingdata/zukyc/blob/3a61ebc14d4eb320caa66a2c342860606a9a389b/apps/gpc-prover-client/next.config.js#L23) server (deployed on Vercel).

{/* TODO: These examples aren't actually for server-side use.  Add a better example when we have one. */}


## Identity Ownership


## Coming Soon

Please pardon our dust as we finish this site.  In the mean time, check out the [learning resources](/learning).  You can also ask questions in our Telegram group at [t.me/zupass](https://t.me/zupass).

## Verification


## Coming Soon

Please pardon our dust as we finish this site.  In the mean time, check out the [learning resources](/learning).  You can also ask questions in our Telegram group at [t.me/zupass](https://t.me/zupass).

## On Chain


## Coming Soon

Please pardon our dust as we finish this site.  In the mean time, check out the [learning resources](/learning).  You can also ask questions in our Telegram group at [t.me/zupass](https://t.me/zupass).

## Resources


The POD and GPC libraries are available for JavaScript/TypeScript developers.  Start by looking at the [tutorial code here](https://github.com/proofcarryingdata/zupass/tree/main/examples/pod-gpc-example), then you can take a look at the specific packages listed below.

All code is open-source and available in the Zupass [repo](https://github.com/proofcarryingdata/zupass).  Detailed API reference documentation is at [docs.pcd.team](https://docs.pcd.team/modules/_pcd_gpc.html).

For questions or to talk with other developers, you can join our Telegram group at [t.me/zupass](https://t.me/zupass).

### @pcd/gpc

Links: [NPM](https://www.npmjs.com/package/@pcd/gpc), [tutorial](https://github.com/proofcarryingdata/zupass/blob/main/examples/pod-gpc-example/src/gpcExample.ts#L88), [API reference](https://docs.pcd.team/modules/_pcd_gpc.html), [code](https://github.com/proofcarryingdata/zupass/tree/main/packages/lib/gpc)

Allows creation of GPC proofs using high-level configuration.  The config compiler picks the right ZK circuit, and generates the circuit inputs to prove or verify as needed.

### @pcd/proto-pod-pcd-artifacts

Links: [NPM](https://www.npmjs.com/package/@pcd/proto-pod-gpc-artifacts), [tutorial](https://github.com/proofcarryingdata/zupass/blob/main/examples/pod-gpc-example/src/gpcExample.ts#L155), [API reference](https://github.com/proofcarryingdata/snark-artifacts/blob/pre-release/README.md), [code](https://github.com/proofcarryingdata/snark-artifacts/tree/pre-release/packages/proto-pod-gpc)

This package contains the binary artifacts (proving and verification keys, witness generators) needed for GPC proofs in the default `proto-pod-gpc` family.  These are large, but you'll only need a few of them, not the whole package.  Read more information about how to use these artifacts [here](/gpc/artifacts).

### @pcd/gpcircuits

Links: [NPM](https://www.npmjs.com/package/@pcd/gpcircuits), [API reference](https://docs.pcd.team/modules/_pcd_gpcircuits.html), [code](https://github.com/proofcarryingdata/zupass/tree/main/packages/lib/gpcircuits/circuits)

Contains the modular ZK circuits used to generate GPC proofs, and TypeScript helpers for using those circuits.  You don't need to look at this code to use GPCs, but you can use this code as the basis of your own ZK circuits using PODs, or to enable on-chain verification.

### @pcd/gpc-pcd

Links: [NPM](https://www.npmjs.com/package/@pcd/gpc-pcd), [tutorial](https://github.com/proofcarryingdata/zupass/blob/main/examples/pod-gpc-example/src/gpcExample.ts#L376), [API reference](https://docs.pcd.team/modules/_pcd_gpc_pcd.html), [code](https://github.com/proofcarryingdata/zupass/tree/main/packages/pcd/gpc-pcd)

Allows GPC proofs to be generated about PODs in your Zupass.  A GPCPCD is developer/hacker friendly, displaying the proof configuration and POD values directly.  Most apps don't need to interact directly with GPCPCDs, but should instead prefer to use the [Z API](/z-api/introduction).

## Related APIs

- GPC proofs are built using [PODs](/gpc/introduction)
- Interact with PODs in Zupass using the [Z API](/z-api/introduction)


## Examples


## Tutorials and Examples

See the [Getting Started](/pod/getting-started) page for an initial intro, but if you prefer learning from heavily commented example code you can read this [tutorial](https://github.com/proofcarryingdata/zupass/blob/main/examples/pod-gpc-example/src/gpcExample.ts).

### ZuKyc

An end-to-end developer demo showing how PODs & GPCs can be used to apply for a loan by proving a borrower's identity, age, and income.  You can build and run the demo locally, or using the pre-deployed servers.

- Detailed tutorial here: [README](https://github.com/proofcarryingdata/zukyc/blob/main/README.md)
- Check out the app here: [ZooLender](https://zukyc-gpc-verifier.vercel.app/), [code](https://github.com/proofcarryingdata/zukyc)

## Live Apps

These apps all use GPCs in production.  More live apps coming soon.

### FrogJuice

Squeeze your frogs and get rewards on-chain!  FrogJuice is the first demonstration of on-chain verification of GPC proofs, using frog PODs issued by FrogCrypto.

- Try it at [FrogJuice.fun](https://frogjuice.fun)
- [Source code](https://github.com/BuidlGuidl/frogcrypto-squeeze)

### Meerkat

Meerkat is a Q&A app for live audience engagement. With Meerkat, attendees of an event or conference can submit questions, upvote their favorites, share reactions, and collect session artifacts as PODs. At an event, each talk will display a QR code, making it easy to join the Q&A by verifying your access through your privacy-preserving Zupass access ticket.

- Check out the app here: [Meerkat](https://meerkat.events)
- [Source code](https://github.com/meerkat-events/meerkat)

### Frog Zone

A multiplayer game showcasing advanced cryptography primitives.  Frog Zone uses zero knowledge proofs via GPC to authenticate users to a game experience built on multi-party fully homeomorphic encryption (MPFHE). Frog Zone was playable on the floor at Devcon 7 SEA in November 2024.



# Z-API Documentation

## Introduction

The Z-API brings the power of [programmable cryptography](https://0xparc.org/blog/programmable-cryptography-1) to your web app, allowing you to create provable data and zero-knowledge proofs in as few as 10 lines of code. Powered by Zupass, this unlocks new options for privacy, user control of data, and interoperability.

# What's a Zapp?

[Zupass](https://zupass.org) provides users with a private data store and a suite of cryptographic tools to make zero-knowledge proofs about that data. Zapps are apps which integrate with Zupass to provide those features to their users.

A Zapp might use data from the user's Zupass store to authenticate them, or might store new data in Zupass. Because the data store is owned by the user, that data is available to any other applications the user choose to share it with.

Zapps are just regular web applications, and they can also read and write data from other remote sources, such as back-end services or platforms. Your Zapp does not have to use Zupass as its only, or primary, data store. However, you _can_ build Zapps which work only with data stored in Zupass if you want to.

# Why Zapps?

Zero-knowledge proofs offer powerful new ways to build applications, limiting the need for centralized APIs and promoting privacy and security. By using cryptographic signatures to authenticate data, we avoid relying on API responses as single sources of truth. Instead, users can both create and receive signed data, and choose to share proofs about that data with others.

Zapps are applications built with this architecture in mind. By using the [POD](../pod/introduction) data format and [general-purpose zero-knowledge circuits](../gpc/introduction), they can support these new workflows.

Traditionally, building apps that use zero-knowledge proofs has been hard, requiring knowledge of ZK circuits programming, and creation of new ZK-friendly data formats. [POD](../pod/introduction) and [GPC](../gpc/introduction) together provide a toolkit for solving these problems. The Z API provides an integration with [Zupass](https://zupass.org), which gives your app a pre-built POD store with end-to-end encrypted synchronization for privacy and portability, as well as management of cryptographic keys and identity.

# Z API

The Z API allows you to embed Zupass in your application, making it easy to get started with PODs and GPCs, using the user's existing Zupass identity and cryptographic keys. Crucially, this allows your Zapp to access data created by other Zapps. Providing just a handful of simple API methods, we can enable the creation, storage, and management of PODs, and the creation of GPC proofs about them.

# What's next?

- Dive in to write code on the [Getting Started](./getting-started) page.
- Read more about the [POD](/pod/introduction) and [GPC](/pod/introduction) technologies used by the Z-API.
- Read or watch more about Zupass and the Z-API in both vision and technical detail on the [Learning](/learning) page.  In particular, check out the [app development](/learning#app-development) talks for more about the Z-API and how it's used in real apps.
- Read more about specific Z-API development topics using the links on the sidebar.


## Getting Started


import { PackageManagers } from "starlight-package-managers";
import { Aside } from '@astrojs/starlight/components';

The Zapp SDK lets you build JavaScript apps which connect to Zupass, giving you access to programmable cryptography tools which enable secure and private interaction with the user's personal data.

In this guide we'll look at how to get started as an app developer, connect to Zupass, and interact with the user's data store.

## Installation

To get started with the Zapp SDK, you will need to install the `@parcnet-js/app-connector` package, using your preferred package manager:

<PackageManagers
  frame="none"
  pkgManagers={["npm", "yarn", "pnpm", "bun"]}
  pkg="@parcnet-js/app-connector"
/>

## Import the connector

Next, import the connector package in your application code:

```ts wrap=true title="src/main.ts"
import { connect } from "@parcnet-js/app-connector";
```

## Connect to Zupass

To connect, you will need to define some data about your Zapp, select a host HTML element, and choose a Zupass URL to connect to.

### Defining your Zapp

To define your Zapp:
```ts wrap=true title="src/main.ts"
import { connect, Zapp } from "@parcnet-js/app-connector";

const myZapp: Zapp = {
  name: "My Zapp Name",
  permissions: {
    REQUEST_PROOF: { collections: ["Apples", "Bananas"] },
    SIGN_POD: {},
    READ_POD: { collections: ["Apples", "Bananas"] },
    INSERT_POD: { collections: ["Apples", "Bananas"] },
    DELETE_POD: { collections: ["Bananas"] },
    READ_PUBLIC_IDENTIFIERS: {}
  }
}
```

Try to give your Zapp a simple, memorable name that is clearly tied to its branding or domain name.

#### Permissions

When connecting for the first time, your Zapp will request permissions from Zupass. These permissions determine what the Zapp will be allowed to do with user data:

<table>
<tr>
<th>Permission</th><th>Effects</th><th>Parameters</th>
</tr>
<tr>
<td>READ_PUBLIC_IDENTIFIERS</td>
<td>This permission allows your Zapp to read the user's public key and Semaphore commitments.</td>
<td>
_None._
</td>
</tr>
<tr>
<td>REQUEST_PROOF</td>
<td>This permission allows your Zapp to request zero-knowledge proofs from the user.</td>
<td>
**collections**: The names of the collections that your Zapp requires access to.
</td>
</tr>
<tr>
<td>SIGN_POD</td>
<td>This permission allows your Zapp to request the signing of a POD with the user's identity.</td>
<td>
_None._
</td>
</tr>
<tr>
<td>READ_POD</td>
<td>This permission allows your Zapp to read any POD from the specified collections.</td>
<td>
**collections**: The names of the collections that your Zapp requires access to.
</td>
</tr>
<tr>
<td>INSERT_POD</td>
<td>This permission allows your Zapp to insert PODs to the specified collections.</td>
<td>
**collections**: The names of the collections that your Zapp requires access to.
</td>
</tr>
<tr>
<td>DELETE_POD</td>
<td>This permission allows your Zapp to delete any POD from the specified collections.</td>
<td>
**collections**: The names of the collections that your Zapp requires access to.
</td>
</tr>
</table>

"Collections" are distinct groups of PODs, and allow the user to grant different levels of access to different Zapps.

<Aside type="tip" title="Built-in collections">
Zupass has a built-in collection called "Tickets". Your Zapp can also specify a new collection which doesn't already exist, and create it by inserting PODs into it.

The "Tickets" collection is special, and some tickets cannot be deleted even if your Zapp requests this permission.
</Aside>

### Select an HTML element

The app connector works by inserting an `<iframe>` element into the web page, and uses this to exchange messages with Zupass. To avoid interfering with other elements on your page, you should add an element that the app connector can use. For example, your HTML might look something like this:
```html wrap=true title="public/index.html"
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My First Zapp</title>
  </head>
  <body>
    <div id="app-connector">
      <!-- This element will be used by the app connector -->
    </div>
    <div id="app">
      <!-- Your HTML or mounted components go here -->
    </div>
    <script type="module" src="/src/app.ts"></script>
  </body>
</html>
```

Here we're using an element with the ID `app-connector` to host the `iframe`. It's important that your application does not change this element once the app connector has started.

### Choose a Zupass URL

Finally, you must choose the Zupass URL you want to connect to. The client is identified by the URL it's hosted on. For Zupass production, the URL is `https://zupass.org`, but you might be running a local development version on something like `http://localhost:3000`. Or you might be running another client altogether, in which case use the URL that it's hosted at.

### Putting it all together

Now we're ready to connect:

```ts wrap=true title="src/main.ts"
import { connect, Zapp } from "@parcnet-js/app-connector";

// The details of our Zapp
const myZapp: Zapp = {
  name: "My Zapp Name",
  permissions: {
    READ_PUBLIC_IDENTIFIERS: {}
  }
}

// The HTML element to host the <iframe>
const element = document.getElementById("parcnet-app-connector") as HTMLElement;

// The URL to Zupass
const clientUrl = "http://localhost:3000";

// Connect!
const z = await connect(myZapp, element, clientUrl);
```

The resulting `z` variable will contain an API wrapper. The API reference for this is [here](/api/classes/parcnetapi/).

## Creating and reading data

User data is stored in [POD](https://pod.org/) format. This is a cryptography-friendly data format which enables the creation of proofs about the structure, content, and provenance of individual data objects, or groups of data objects.

### Signing PODs

New PODs are created by signing a data object. This is straightforward:

```ts wrap=true title="src/main.ts"
const data: PODEntries = {
  greeting: { type: "string", value: "Hello, world" },
  magic_number: { type: "int", value: 1337n },
  email_address: { type: "string", value: "test@example.com" }
}

const signedPOD = await z.pod.sign(data);

// Will print the entries we defined above:
console.log(signedPOD.content.asEntries());

// Will print the unique signature of the POD:
console.log(signedPOD.signature);
```

The result of the `sign` method is a `POD` data object. Internally, this stores the data entries as a Merkle tree, but it's not necessary to understand how this works.

The POD's unique signature is the signed hash of the Merkle root, but you can treat it as an opaque identifier. The signature is created using a private key belonging to the user, which is managed by Zupass - your app does not have direct access to the private key.

### Inserting PODs to the data store

Once you have a POD, you can insert it to the data store:

```ts wrap=true title="src/main.ts"
await z.pod.collection("CollectionName").insert(signedPOD);
```

Zupass is responsible for saving the data and synchronizing it between devices, so your app doesn't need to worry about how this data is persisted.

The collection name should be one of the collections that your Zapp requested permission to insert PODs to. Attempting to insert to a collection without permissions will fail.

In the above example, we're inserting the POD that we created by requesting a signature from the client, but your app could also have a back-end service which signs PODs using your own private key. Those PODs can be inserted using the `insert` API. For example:

```ts wrap=true title="src/main.ts"
// Fetch the serialized POD from the server
const response = await fetch('https://your-api.com/get-pod');
const serializedPOD = await response.text();

// Deserialize the POD
const pod = POD.deserialize(serializedPOD);

// Now you can insert the POD into the data store
await z.pod.collection("CollectionName").insert(pod);
```

The details of your backend may be different, but this approach works for PODs produced by any external source.

### Deleting PODs

Your app can also delete PODs for which it knows the signature:

```ts wrap=true title="src/main.ts"
await z.pod.collection("CollectionName").delete(signature);
```

This tells the client to drop the POD from the user's data store.

### Querying for PODs

To read PODs from the data store, you can define queries which describe certain criteria for PODs:

```ts wrap=true title="src/main.ts"
import * as p from "@parcnet-js/podspec";

const query = p.pod({
  entries: {
    greeting: { type: "string" },
    magic_number: { type: "int" }
  }
});
const queryResult = await z.pod.collection("CollectionName").query();
```

This will return any PODs which have entries matching the description. The result is an array of `POD` objects, which will be empty if no matching results are found.

Queries can contain more advanced constraints:

```ts wrap=true title="src/main.ts"
import * as p from "@parcnet-js/podspec";

const validGreetings = [
  { type: "string", value: "Hello, world" },
  { type: "string", value: "Ahoy there!" },
  { type: "string", value: "Good morning, starshine. The Earth says hello!" }
];

const validNumberRange = { min: 1000n, max: 1500n };

const query = p.pod({
  entries: {
    greeting: { type: "string", isMemberOf: validGreetings },
    magic_number: { type: "int", inRange: validNumberRange }
  }
});

const queryResult = await z.pod.collection("CollectionName").query(query);
```

This query provides a list of valid strings for the `greeting` entry, and a range of valid numbers for the `magic_number` entry. You can use these features to construct very specific queries for specific PODs.

### Subscribing to queries

TODO

## Making and verifying proofs about data

PODs are designed to make it easy to create cryptographic proofs about their structure, content, and provenance. These proofs are created using **G**eneral **P**urpose **C**ircuits, or **GPC**s.

GPCs allow you to describe aspects of a POD, and make proofs about that POD without revealing all of the underlying data. For example, you could prove that you have a POD signed by a particular public key without revealing the POD's content, or prove that you have a POD with a particular entry whose value lies in a certain range or belongs to a list, without revealing the exact value.

### Making proofs

To create a proof, you must create a **proof request**. The proof request contains information about what you would like to prove, and the user can decide whether to allow the proof. Here's an example:

```ts wrap=true title="src/main.ts"
const validGreetings = [
  { type: "string", value: "Hello, world" },
  { type: "string", value: "Ahoy there!" },
  { type: "string", value: "Good morning, starshine. The Earth says hello!" }
];

const validNumberRange = { min: 1000n, max: 1500n };

const result = await z.gpc.prove({ 
  request: {
    pods: {
      pod1: {
        pod: {
          entries: {
            greeting: { type: "string", isMemberOf: validGreetings },
            magic_number: { type: "int", inRange: validNumberRange },
            email_address: { type: "string" }
          }
        }
      },
      {
        revealed: { email_address: true }
      }
    }
  }
});
```

This proof will require a POD with a valid `greeting` and `magic_number`, and will also reveal the value of the `email_address` entry.

The result has a field `success` which is set to `true` if the proof was created successfully. 

If `success` is false then the result also contains an `error` field containing an error message.

If `success` is true then the result has a further three fields:
- `proof`, which contains the cryptographic proof for later verification
- `boundConfig`, which contains the proof configuration
- `revealedClaims`, which contains the "claims" about the data which can be verified with reference to the `proof`

In the example above, the `revealedClaims` field would contain something like this:
```ts wrap=true
{
  pods: {
    pod1: {
      entries: {
        email_address: {
          type: "string",
          value: "test@example.com"
        }
      }
    }
  },
  membershipLists: {
    { type: "string", value: "Hello, world" },
    { type: "string", value: "Ahoy there!" },
    { type: "string", value: "Good morning, starshine. The Earth says hello!" }
  }
}
```

The `membershipLists` contains information about the list membership rules that apply to some entries, and contains information that was part of the input. However, the `pods` section contains details about the specific POD that the user selected, which was not part of your input.

### Verifying proofs

TODO

## User identity

Users have identity credentials, which their clients help them to manage. You can request certain public information about the user's identity using the API.

### Semaphore v3 commitment

The user's [Semaphore](https://semaphore.pse.dev/) v3 commitment can be retrieved like this:

```ts wrap=true title="src/main.ts"
const commitment = await z.identity.getSemaphoreV3Commitment();
```

The commitment is a `bigint` and uniquely identifies the user.

### Semaphore v4 commitment

The user's [Semaphore](https://semaphore.pse.dev/) v4 commitment can be retrieved like this:

```ts wrap=true title="src/main.ts"
const commitment = await z.identity.getSemaphoreV4Commitment();
```

The commitment is a `bigint` and uniquely identifies the user.


### Public key

The user's [Semaphore](https://semaphore.pse.dev/) v4 public key can be retrieved like this:

```ts wrap=true title="src/main.ts"
const commitment = await z.identity.getPublicKey();
```

The public key is a `string` and uniquely identifies the user.

## What's next?

- Check out the rest of the pages of this guide for deeper dives on various aspects of the Z-API.
- Read more about the [POD](/pod/introduction) and [GPC](/pod/introduction) technologies used by the Z-API.
- Read or watch more about Zupass and the Z-API in both vision and technical detail on the [Learning](/learning) page.  In particular, check out the [app development](/learning#app-development) talks for more about the Z-API and how it's used in real apps.


## Queries

PODs are organized into collections, but often we want to find a specific set of PODs within a collection, or across multiple collections, based on the data the PODs contain. Queries allow us to describe the characteristics of a POD, and find those PODs which match our criteria.

Here's an example query:

```ts
import * as p from "@parcnet-js/podspec";

// Declare the query
const query = p.pod({
  entries: {
    string_entry: { type: "string" },
    int_entry: { type: "int", inRange: { min: 0n, max: 100n } },
    optional_entry: { 
      type: "optional",
      innerType: {
        type: "cryptographic"
      }
    }
  }
});

// Run the query
const result = await z.pod.collection("Apples").query(query);
```

Queries work by specifying constraints on some POD entries. For a POD to match the query, it must have all of the specified entries (except for those explicitly marked as `optional`), and those entries must satisfy the criteria provided.

Queries can use the following criteria:

## type

If an entry is specified at all, it must have a type. Types can be the following:
- `string`, for text entries
- `int`, for integers, up to a maximum of 64 bits (signed), meaning 9,223,372,036,854,775,807 to -9,223,372,036,854,775,808
- `cryptographic`, for larger numbers, typically used for hashes
- `eddsa_pubkey`, for string-encoded EdDSA public keys

Examples:
```ts
const query = p.pod({
  entries: {
    string_entry: { type: "string" },
    int_entry: { type: "int" },
    cryptographic_entry: { type: "cryptographic" },
    eddsa_pubkey_entry: { type: "eddsa_pubkey" },
    optional_entry: { 
      type: "optional",
      innerType: {
        type: "cryptographic"
      }
    }
  }
});

// Would match a POD with these entries:
{
  string_entry: { type: "string", value: "example" },
  int_entry: { type: "int", value: 8388608n },
  cryptographic_entry: { type: "cryptographic", value: 117649n },
  eddsa_pubkey_entry: { type: "eddsa_pubkey", value: "2C4B7JzSakdQaRlnJPPlbksW9F04vYc5QFLy//nuIho" }
  // Since `optional_entry` is optional, this POD matches
}

// Would also match:
{
  string_entry: { type: "string", value: "example" },
  int_entry: { type: "int", value: 8388608n },
  cryptographic_entry: { type: "cryptographic", value: 117649n },
  eddsa_pubkey_entry: { type: "eddsa_pubkey", value: "2C4B7JzSakdQaRlnJPPlbksW9F04vYc5QFLy//nuIho" },
  // If optional_entry is present, it must be a `cryptographic`, so this matches
  optional_entry: { type: "cryptographic", value: 390625n }
}

// Would not match:
{
  string_entry: { type: "string", value: "example" },
  cryptographic_entry: { type: "cryptographic", value: 117649n },
  eddsa_pubkey_entry: { type: "eddsa_pubkey", value: "2C4B7JzSakdQaRlnJPPlbksW9F04vYc5QFLy//nuIho" }
  // int_entry is missing, so this doesn't match
}

// Would not match
{
  string_entry: { type: "string", value: "example" },
  // int_entry has a different type compared to the query, so this doesn't match
  int_entry: { type: "string", value: "i'm a string now" },
  cryptographic_entry: { type: "cryptographic", value: 117649n },
  eddsa_pubkey_entry: { type: "eddsa_pubkey", value: "2C4B7JzSakdQaRlnJPPlbksW9F04vYc5QFLy//nuIho" }
}
```

The type `optional` is also available. `optional` entries can be missing. However, they have an `innerType` value, which can contain filter criteria to apply to the entry if it exists, which can include the real type:
```ts
const query = p.pod({
  entries: {
    optional_entry: { 
      type: "optional",
      innerType: {
        type: "int",
        inRange: { min: 500n, max: 5000n }
      }
    }
  }
});
```

## isMemberOf/isNotMemberOf

These filters allow us to specify lists of values, and check that the entries for a POD either match (with `isMemberOf`) or do _not_ match (with `isNotMemberOf`) the list that we provide.

For example:

```ts
const query = p.pod({
  entries: {
    animal_type: {
      type: "string",
      isMemberOf: [
        { type: "string", value: "Fox" },
        { type: "string", value: "Rabbit" },
        { type: "string", value: "Camel" }
      ]
    }
  }
})
```

This example would match any POD with an `animal_type` entry, so long as that entry is a `string`, and it has a value of `"Fox"`, `"Rabbit"`, or `"Camel"`.

## inRange

For `int` values, we can check if they lie with in a minimum and maximum range.

For example:
```ts
const query = p.pod({
  entries: {
    age: {
      type: "int",
      min: 25n,
      max: 1500n
    }
  }
})
```

This query would match any POD with an `age` entry, so long as that entry is an `int` with a value between 25 and 1500, inclusive.

## Tuples

Tuples work similar to `isMemberOf` and `isNotMemberOf`, but allow us to compare against a set of entries at the same time.

For example, say a POD represents data about songs. The POD has entries for `"artist"`, and `"year_published"`. If we want to find every song by Beyoncé, we could write a query like this:

```ts
const query = p.pod({
  entries: {
    artist: { 
      type: "string",
      isMemberOf: [
        { type: "string", value: "Beyoncé"}
      ]
    }  
  }
})
```

If we want to find every song by _either_ Beyoncé or Taylor Swift, we could write a query like this:

```ts
const query = p.pod({
  entries: {
    artist: { 
      type: "string",
      isMemberOf: [
        { type: "string", value: "Beyoncé"},
        { type: "string", value: "Taylor Swift" }
      ]
    }  
  }
})
```

If we wanted to find every song by either Beyoncé or Taylor Swift that was published in 2016, we could do this:

```ts
const query = p.pod({
  entries: {
    artist: { 
      type: "string",
      isMemberOf: [
        { type: "string", value: "Beyoncé"},
        { type: "string", value: "Taylor Swift" }
      ]
    },
    year_published: {
      type: "int",
      isMemberOf: [
        { type: "int", value: 2016n }
      ]
    }
  }
})
```

But what if we want to find _either_ songs by Beyoncé from 2016, _or_ songs by Taylor Swift from 2020? For this, we need tuples!

We could write a query like this:

```ts
const query = p.pod({
  entries: {
    artist: { 
      type: "string"
    },
    year_published: {
      type: "int"
    }
  },
  tuples: [
    {
      entries: ["artist", "year_published"],
      isMemberOf: [
        [
          { type: "string", value: "Beyoncé" },
          { type: "int", value: 2016n }
        ],
        [
          { type: "string", value: "Taylor Swift" },
          { type: "int", value: 2020n }
        ]
      ]
    }
  ]
})
```

Note that the query has to declare the types of the entries to match on, and then later refers to those entries in the `tuples` object.

## Non-entry values

In addition to matching on the POD's entries, we can also match on the POD's `signerPublicKey` and `signature`.

For example:
```ts
const query = p.pod({
  entries: {
    name: { type: "string" }
  },
  signerPublicKey: {
    isMemberOf: [
      "MolS1FubqfCmFB8lHOSTo1smf8hPgTPal6FgpajFiYY",
      "YwahfUdUYehkGMaWh0+q3F8itx2h8mybjPmt8CmTJSs"
    ]
  },
  signature: {
    isMemberOf: [
      "rcjfuTtbn8cQ3wnBDR1GLN5WLl3TJRCvIBtnWsn0ZqB2QS5336v/7+xwi+RHRu8/wDJ1VDCgHFDDmlBZL1kVBA"
    ]
  }
})
```

This example is a bit contrived, but shows how it is possible to query for a POD by either the public key of the signer, or by the signature of the POD. Querying by signature is not particularly useful, since signatures are hard to guess, but if you happen to know a POD's signature then you could query to see if the user has it.

Querying by signer public key is more useful: if you know the public key of a signer, such as the organizer of an event or the operator of a game, you can query for PODs signed by them.

## Virtual entries in tuples

The signer public key can also be used as a "virtual" entry in a tuple. For example, if you are playing a game in which magical items are signed by different wizards, you might want to use a tuple like this:

```ts
const gandalfPublicKey = "MolS1FubqfCmFB8lHOSTo1smf8hPgTPal6FgpajFiYY";
const sarumanPublicKey = "YwahfUdUYehkGMaWh0+q3F8itx2h8mybjPmt8CmTJSs";

const query = p.pod({
  entries: {
    item_type: {
      type: "string"
    }
  },
  tuples: [
    {
      entries: ["item_type", "$signerPublicKey"],
      isMemberOf: [
        [
          { type: "string", value: "Staff" },
          { type: "eddsa_pubkey", value: gandalfPublicKey }
        ],
        [
          { type: "string", value: "Palantir" },
          { type: "eddsa_pubkey", value: sarumanPublicKey }
        ]
      ]
    }
  ]
})
```

This query will match on either a POD with an `item_type` entry of `"Staff"` signed by Gandalf's public key, or a POD with an `item_type` entry of `"Palantir"`, signed by Saruman's public key. Note that unlike matching directly on the public key, here we represent the public key as though it were an entry in the POD, meaning that we use `{ type: "eddsa_pubkey", value: "MolS1FubqfCmFB8lHOSTo1smf8hPgTPal6FgpajFiYY" }` rather than the string `"MolS1FubqfCmFB8lHOSTo1smf8hPgTPal6FgpajFiYY"` directly.

## Ticket Proofs

import { Aside } from '@astrojs/starlight/components';
import { PackageManagers } from "starlight-package-managers";

Zupass tickets are [PODs](https://www.pod.org), Provable Object Datatypes. This means that they're ZK-friendly, and it's easy to make proofs about them.

ZK proofs in Zupass are used to reveal information about some POD-format data that the user has. This might involve directly revealing specific POD entries, such as the e-mail address associated with an event ticket. Or, it might involve revealing that an entry has a value in a given range, or with a value that matches a list of valid values. Or, it might even involve revealing that a set of related entry values match a sets of values from a list.

<Aside type="note" title="What are entries?">
PODs are collections of "entries", which are name and value pairs, where values have a type of `string` (for text), `int` (for integers), `cryptographic` (for very large integers), and `eddsa_pubkey` (for EdDSA public keys).

Zero-knowledge proofs in Zupass work by proving that a POD's entries match certain criteria, without necessarily revealing _how_ they match it. For example, you could prove that a `birthdate` entry of type `int` is below a certain number, indicating that a person was born before a certain date, without revealing what the `birthdate` value is.
</Aside>

Zupass allows you to configure proofs by providing a set of criteria describing one or more PODs that the user must have. If the user has matching PODs, they can make a proof and share it with someone else - such as with your application or another user of your app. As the app developer, it's your job to design the proof configuration.

Because this system is very flexible, it can also be intimidating at first. Mistakes can be subtle, and might result in a proof that doesn't really prove what you want it to. To help with this, there's a specialized library for preparing ticket proof requests, `ticket-spec`. This guide will explain how to use it.

# Quick Start

Below you will find more detailed background on ticket proofs. But if you just want to get started, here's how to do it:

Following the [Getting Started](getting-started) guide, install the App Connector module and verify that you can connect to Zupass.

Next, install the `ticket-spec` package:

<PackageManagers
  frame="none"
  pkgManagers={["npm", "yarn", "pnpm", "bun"]}
  pkg="@parcnet-js/ticket-spec"
/>

Then, you can create a ticket proof request, and use it to create a proof:

```ts wrap=true title="src/main.ts"
import { ticketProofRequest } from "@parcnet-js/ticket-spec";

const request = ticketProofRequest({
  classificationTuples: [
    // If you know the public key and event ID of a POD ticket, you can specify
    // them here, otherwise delete the object below.
    {
      signerPublicKey: "PUBLIC_KEY",
      eventId: "EVENT_ID"
    }
  ],
  fieldsToReveal: {
    // The proof will reveal the attendeeEmail entry
    attendeeEmail: true
  },
  externalNullifier: {
    type: "string",
    value: "APP_SPECIFIC_NULLIFIER"
  }
});

const gpcProof = await z.gpc.prove({ request: request.schema });
```

This will create a GPC proof which proves that the ticket has a given signer public key and event ID, and also reveals the `attendeeEmail` address for the ticket.

If you know the signer public key and event ID of a ticket then you can specify those in the `classificationTuples` array, but for getting started you can delete those values if you don't know which ones to specify.

The result should be an object containing `proof`, `boundConfig`, and `revealedClaims` fields. For now, we can ignore `proof` and `boundConfig`, and focus on `revealedClaims`, which, given the above example, should look like this:

```ts wrap=true
{
  "pods": {
    "ticket": {
      "entries": {
        "attendeeEmail": {
          "type": "string",
          "value": "test@example.com"
        }
      },
      "signerPublicKey": "MolS1FubqfCmFB8lHOSTo1smf8hPgTPal6FgpajFiYY"
    }
  },
  "owner": {
    "externalNullifier": {
      "type": "string",
      "value": "APP_SPECIFIC_NULLIFIER"
    },
    "nullifierHashV4": 18601332455379395925267579735435017582946383130668625217012137367106027237345
  },
  "membershipLists": {
    "allowlist_tuple_ticket_entries_$signerPublicKey_eventId": [
      [
        {
          "type": "eddsa_pubkey",
          "value": "MolS1FubqfCmFB8lHOSTo1smf8hPgTPal6FgpajFiYY"
        },
        {
          "type": "string",
          "value": "fca101d3-8c9d-56e4-9a25-6a3c1abf0fed"
        }
      ]
    ]
  }
}
```

As we saw in the original proof request, the `attendeeEmail` entry is revealed: `revealedClaims.pods.ticket.entries.attendeeEmail` contains the value.

To understand how this works, read on!

# Configuring a ticket proof request

Ticket proofs enable the user to prove that they hold an event ticket matching certain criteria. They also allow the user to selectively reveal certain pieces of data contained in the ticket, such as their email address or name.

A typical use-case for ticket proofs is to prove that the user has a ticket to a specific event, and possibly that the ticket is of a certain "type", such as a speaker ticket or day pass. To determine this, we need to specify two or three entries:
- Public key of the ticket signer or issuer
- The unique ID of the event
- Optionally, the unique ID of the product type, if the event has multiple types of tickets

For example, if you want the user to prove that they have a ticket to a specific event, then you want them to prove the following:

- That their ticket POD was signed by the event organizer's ticket issuance key
- That their ticket has the correct event identifier
- That their ticket is of the appropriate type, if you want to offer a different experience to holders of different ticket types

## How to specify ticket details

To match a ticket based on the above criteria, you must specify _either_ pairs of public key and event ID, or triples of public key, event ID, and product ID. For example:

```ts wrap=true title="src/main.ts"
const pair = [{
  publicKey: "2C4B7JzSakdQaRlnJPPlbksW9F04vYc5QFLy//nuIho",
  eventId: "ab9306be-019f-40d9-990d-88826a15fde5"
}];
const triple = [{
  publicKey: "2C4B7JzSakdQaRlnJPPlbksW9F04vYc5QFLy//nuIho",
  eventId: "ab9306be-019f-40d9-990d-88826a15fde5",
  productId: "672c6ff1-9947-41d4-8876-4ef1e3317f08" 
}];
```

The first example, containing only a public key and event ID, will match any ticket which has those attributes. The second is more precise, requiring that the ticket have a specific product type.

It's possible to specify _multiple_ pairs or triples. For example:
```ts wrap=true title="src/main.ts"
const pairs = [
  {
    publicKey: "2C4B7JzSakdQaRlnJPPlbksW9F04vYc5QFLy//nuIho",
    eventId: "ab9306be-019f-40d9-990d-88826a15fde5"
  },
  {
    publicKey: "2C4B7JzSakdQaRlnJPPlbksW9F04vYc5QFLy//nuIho",
    eventId: "5ddb8781-b893-4187-9044-9ac229368aac"
  }
]
```

These would be used like this:

```ts wrap=true title="src/main.ts" {2-11}
const request = ticketProofRequest({
  classificationTuples: [
    {
      publicKey: "2C4B7JzSakdQaRlnJPPlbksW9F04vYc5QFLy//nuIho",
      eventId: "ab9306be-019f-40d9-990d-88826a15fde5"
    },
    {
      publicKey: "2C4B7JzSakdQaRlnJPPlbksW9F04vYc5QFLy//nuIho",
      eventId: "5ddb8781-b893-4187-9044-9ac229368aac"
    }
  ],
  fieldsToReveal: {
    // The proof will reveal the attendeeEmail entry
    attendeeEmail: true
  },
  externalNullifier: {
    type: "string",
    value: "APP_SPECIFIC_NULLIFIER"
  }
});
```

In this case, the proof request will match any ticket which matches _either_ of the above pairs. If you provide more, then the ticket just needs to match any of the provided pairs.

This underlines an important principle: when the proof is created, you might not know _which_ pair of values the user's ticket matches. This is by design, and is part of how ZK proofs provide privacy. If you only need to know that the user has a ticket matching a list of values, but don't need to know exactly which ticket the user has, then by default that information will not 

## What gets revealed in a ticket proof

If you have specified pairs or triples of public key, event ID and (optionally) product ID, then the list of valid values will be revealed in the proof. This might be the _only_ information you want to reveal: the proof discloses that the user has a ticket which satisfies these criteria, but no more.

However, you might want the proof to disclose more information about the ticket. There are two further types of information that a proof might reveal: a "nullifier hash", a unique value derived from the user's identity, and a subset of the ticket's entries.

### Nullifier hash

A nullifier hash is a unique value which is derived from the user's identity, but which cannot be used to determine the user's identity. Typically this is used to pseudonymously identify a user: if the same user creates two proofs, both proofs will have the same nullifier hash, giving the user a consistent identity, but not one that can be used to determine their public key or other information.

The nullifier hash requires an "external nullifier", a value which your application must provide. This ensures that the nullifier hash is derived from _both_ the user's identity and a value that your application provides. This means that the nullifier hash that the user has when creating proofs for your application will be different to the nullifier hash they have when creating proofs for another application.

### Revealed entries

Proofs can also directly reveal the values held in certain entries, meaning that the `revealedClaims` object in the proof result will be populated with values from the ticket that the use selects when making the proof. In the Quick Start example above, the `attendeeEmail` entry is revealed, but you can reveal any of the ticket's entries by setting them in the `fieldsToReveal` parameter:

```ts wrap=true title="src/main.ts" {10-13}
const request = ticketProofRequest({
  classificationTuples: [
    // If you know the public key and event ID of a POD ticket, you can specify
    // them here, otherwise delete the object below.
    {
      signerPublicKey: "PUBLIC_KEY",
      eventId: "EVENT_ID"
    }
  ],
  fieldsToReveal: {
    // Reveal the unique ticket ID
    ticketId: true,
    // Reveal the attendee's name
    attendeeName: true,
    // Reveal if the ticket is checked in
    isConsumed: true
  },
  externalNullifier: {
    type: "string",
    value: "APP_SPECIFIC_NULLIFIER"
  }
});
```

## Watermark

You can add a watermark to your proof, which allows you to uniquely identify a proof. Precisely which value to use for the watermark depends on your application and use-case, but you might use a unique session ID, or a single-use number generated by your application.

If you add a watermark to your proof request, you can check the watermark when later verifying the proof. A typical workflow might involve your client application requesting a random number from your server, which stores the number. The number is passed as a watermark in the proof request, and then you can send the proof to the server for verification. The server then checks that the watermark is equal to the random number it generated. By requiring the watermark to equal some single-use secret value, you ensure that the client cannot re-use a previously-generated proof.

## Verifying a ticket proof

Once a proof has been made, you can verify it.

Typically, verification is done by a different person, computer, or program than the one that produced the proof. You don't really need to verify a proof that you just created on the same computer, but if you received a proof from someone else, or if you have an application which sends proofs between, say, a client and a server then you will want to verify any proofs that you receive.

Verification covers a few important principles:
- That, given a `revealedClaims` object which makes certain statements, a proof configuration, and a proof object, the proof object really does correspond to the configuration and revealed claims. If we didn't check this, then the `revealedClaims` might contain data for which there is no proof!
- That the configuration really is the one that you expect it to be. This is important because a proof might really match a set of claims and a configuration, but if the configuration is not the one you expect then the claims might not be valid for your use-case.

### Proof requests

To make this easy to get right, we have a concept of "proof requests". When you call `ticketProofRequest` as described above, you're creating a proof request object which can be used to... request a proof. However, you can also use the proof request when _verifying_ a proof, to ensure that the proof was produced in response to the correct request.

If you're verifying the proof in the browser using the Z API, you can do so like this:

```ts wrap=true title="src/main.ts"
import { ticketProofRequest } from "@parcnet-js/ticket-spec";

const request = ticketProofRequest({
  /**
   * As per examples above
   */
});

const { proof, boundConfig, revealedClaims } = await z.gpc.prove({ request: request.schema });

const isVerified = await z.gpc.verifyWithProofRequest(proof, boundConfig, revealedClaims, proofRequest);
```

This performs both of the checks described above. Of course, since you're using the same proof request object in both cases, you already know that the proof matches the request!

However, you can use a similar technique when verifying the same proof in another environment, such as on a server:

```ts wrap=true title="src/server.ts"
import { ticketProofRequest } from "@parcnet-js/ticket-spec";
import { gpcVerify } from "@pcd/gpc";
import isEqual from "lodash/isEqual";

const request = ticketProofRequest({
  /**
   * This should be the same proof request that you use on the client.
   * It would be a good idea to define your proof request in a shared module or
   * package.
   */
});

// Here we assume that some kind of web framework such as Express is being used
// to receive these variables via a HTTP POST or similar.
const { proof, boundConfig, revealedClaims } = httpRequest.body;

const { proofConfig, membershipLists, externalNullifier, watermark } = request.getProofRequest();

// This is necessary to satisfy the type of `GPCBoundConfig`
proofConfig.circuitIdentifier = boundConfig.circuitIdentifier;

// These changes ensure that the revealed claims say what they are supposed to
revealedClaims.membershipLists = membershipLists;
revealedClaims.watermark = watermark;
if (revealedClaims.owner) {
  revealedClaims.owner.externalNullifier = externalNullifier;
}

const isVerified = await gpcVerify(
  proof,
  proofConfig as GPCBoundConfig,
  revealedClaims,
  pathToGPCArtifacts // This may vary depending on your installation
);
```

This ensures that our verified proof not only matches the claims that were sent, but that claims are those we expect them to be.

## Devcon Ticket Proofs

Above we outlined a generic approach to making proofs about tickets. If you're looking to make a proof about ownership of a Devcon ticket specifically, you can use this configuration:

```ts wrap=true title="src/main.ts" {4-5}
const request = ticketProofRequest({
  classificationTuples: [
    {
      signerPublicKey: "YwahfUdUYehkGMaWh0+q3F8itx2h8mybjPmt8CmTJSs",
      eventId: "5074edf5-f079-4099-b036-22223c0c6995"
    }
  ],
  fieldsToReveal: {
    // Reveal the attendee's name
    attendeeName: true,
    // Reveal the attendee's email
    attendeeEmail: true
  },
  externalNullifier: {
    type: "string",
    value: "APP_SPECIFIC_NULLIFIER"
  }
});
```

## Examples


## Tutorials and Examples

See the [Getting Started](/pod/getting-started) page for an initial intro, but if you prefer learning from interactive code, check out the example app below.

### ZApp Test client

A fully function Zapp client with executable examples.

- Run the test client [here](https://zapp-test-client.onrender.com/).
- Source is available in the Zupass repo [here](https://github.com/proofcarryingdata/zupass/tree/main/examples/test-zapp).

## Live Apps

These apps all use the Z-API in production.  More live apps coming soon.  They're launching at Devcon now...

### Frogcrypto

A game of collecting cryptographic frogs.  [Frogcrypto](https://frogcrypto.xyz) is re-launching at Devcon 7 SEA with new features to discover.  More details here after the conferene.

### Meerkat

Meerkat is a Q&A app for live audience engagement. With Meerkat, attendees of an event or conference can submit questions, upvote their favorites, share reactions, and collect session artifacts as PODs. At an event, each talk will display a QR code, making it easy to join the Q&A by verifying your access through your privacy-preserving Zupass access ticket.

- Check out the app here: [Meerkat](https://meerkat.events)
- [Source code](https://github.com/meerkat-events/meerkat)

### Frog Lab

Derive novel substances from your frogs.  The lab uses the Z-API to select frogs, and generate novel substances saved back to Zupass as PODs.

- Try it out at [shuljin.engineering](https://shulgin.engineering)
- [Source code](https://github.com/Moving-Castles/shulgin.engineering)

### FrogJuice

Squeeze your frogs and get rewards on-chain!  FrogJuice is the first demonstration of on-chain verification of GPC proofs, using frog PODs issued by FrogCrypto.

- Try it at [FrogJuice.fun](https://frogjuice.fun)
- [Source code](https://github.com/BuidlGuidl/frogcrypto-squeeze)


