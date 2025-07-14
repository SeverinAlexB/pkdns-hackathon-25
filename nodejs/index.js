/**
 * Untested. Waiting for https://github.com/pubky/pkarr/pull/153 to be merged.
 */

const { Client, SignedPacket } = require('pkarr');

const client = new Client();
const keypair = new Keypair();
console.log("Created keypair", keypair.public_key_string());

const builder = SignedPacket.builder();
builder.addSvcbRecord(".", 1, "127.0.0.1", 300);
const packet = builder.buildAndSign(keypair);
client.publish(packet);  
console.log("Published packet", packet);

let resolved = client.resolve(keypair.public_key_string());
console.log("Resolved", resolved);










