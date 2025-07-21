import { Client, SignedPacket, Keypair } from '@synonymdev/pkarr';

async function main() {
    const client = new Client();
    const keypair = new Keypair();
    console.log("Created keypair", keypair.public_key_string());
    
    // Publish a packet
    const builder = SignedPacket.builder();
    builder.addSvcbRecord(".", 1, "127.0.0.1", 300);
    const packet = builder.buildAndSign(keypair);
    await client.publish(packet);  
    console.log("Published packet!");
    
    // Resolve it again
    let resolved_packet = await client.resolve(keypair.public_key_string());
    if (!resolved_packet) {
        console.log("No packet found");
        return;
    }

    console.log("Resolved packet timestamp", resolved_packet.timestampMs);
    console.log("Record count", resolved_packet.recordCount);
    for (let record of resolved_packet.records) {
        console.log("- Record", record);
    }
};

main();
