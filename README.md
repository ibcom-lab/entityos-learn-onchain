# BlockFrost Service
- https://blockfrost.io/
- https://docs.blockfrost.io/
- https://github.com/blockfrost/blockfrost-js
- https://github.com/blockfrost/blockfrost-js/wiki/BlockFrostAPI.md

# Lucid Library:
Incorporting BlockFrost
- https://www.npmjs.com/package/lucid-cardano

# Usage
- See index.js, settings.json & event-...json
- e.g. lambda-local -l index.js -t 9000 -e event-blockchain-query.json

# Setup

BlockFrost As Service:

entityos.cloud.save(
{
    object: 'core_url',
    data:
    {
        title: 'BlockFrost',
        type: 4,
        url: 'https://github.com/blockfrost/blockfrost-js'
    }
});

Create a link to back to URL (as Service) to hold the projectId.
core_url mydigitstructure object id is 298, objectcontext is id of the URL (created above).
Category is Indentity [4].
Use lambda-local -l index.js -t 9000 -e event-blockchain-key-categories.json to see category values.

entityos.cloud.save(
{
    object: 'core_protect_key',
    data:
    {
        title: 'BlockFrost Project ID',
        object: 298,
        objectcontext: {url id},
        category: 4,
        type: 2,
        key: {project_ID}
    }
});

entityos.cloud.search(
{
    object: 'core_protect_key',
    fields: ['title', 'object', 'objectcontext', 'category', 'type', 'key'],
    filters: [{field: 'category', comparision: 'EQUAL_TO', value: 4}]
});

Create a link to back to URL (as Service) to hold the projectId.
Category is Blockchain Address [6].

entityos.cloud.save(
{
    object: 'core_protect_key',
    data:
    {
        title: 'Blockchain Address',
        object: 22,
        objectcontext: app.whoami().thisInstanceOfMe.user.id,
        category: 6,
        type: 1,
        key: {address}
    }
});

entityos.cloud.search(
{
    object: 'core_protect_key',
    fields: ['title', 'object', 'objectcontext', 'category', 'type', 'key'],
    filters: [{field: 'category', comparision: 'EQUAL_TO', value: 6}]
});

# Cardano Foundation NodeJS Library:

https://www.npmjs.com/package/@cardano-foundation/cardano-verify-datasignature

npm i @cardano-foundation/cardano-verify-datasignature

const verifyDataSignature = require('@cardano-foundation/cardano-verify-datasignature');
const key =
  'a4010103272006215820d3f4fb49336e8eced6ebdfbbebba204a93d3e4b9c5386854279e1dab70ee8a9f';
const signature =
  '84582aa201276761646472657373581de1737b27e0c7c9053dc4fa0f7364afeac7ebccf2dcc5f9452af5dbb8dca166686173686564f4443132333458400de36f2d9c985bb689bd3ee9e21667f148687ea50088708e8d6b3dbbfa252db68680e83c31b28e441678bb43c6adc4d49129b58b78095bf5d1c09fe8acd8880f';
const message = '1234';
const address = 'stake1u9ehkflqclys20wylg8hxe90atr7hn8jmnzlj3f27hdm3hqwfw72q';

console.log(verifyDataSignature(signature, key)); // true
console.log(verifyDataSignature(signature, key, message)); // true
console.log(verifyDataSignature(signature, key, message, address)); // true

# Create Cardano Address
BrowserJS or NodeJS
- Using Memnomic

Libs:
- Cardano-Serialisation
- typhonjs






