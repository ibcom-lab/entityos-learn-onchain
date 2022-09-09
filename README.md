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