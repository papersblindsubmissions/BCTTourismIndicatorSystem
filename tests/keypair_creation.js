const driver = require('bigchaindb-driver')
const fs = require('fs');


let alice = new driver.Ed25519Keypair()
let bob = new driver.Ed25519Keypair()
let chris = new driver.Ed25519Keypair()

global.alice_pubkey = alice.publicKey;
global.alice_privkey = alice.privateKey;

global.bob_pubkey = bob.publicKey;
global.bob_privkey = bob.privateKey;

global.chris_pubkey = chris.publicKey;
global.chris_privkey = chris.privateKey;


console.log('Alice public key: ', alice_pubkey)
console.log('Alice private key: ', alice_privkey)

console.log('Bob public key: ', bob_pubkey)
console.log('Bob private key: ', bob_privkey)

console.log('Chris public key: ', chris_pubkey)
console.log('Chris private key: ', chris_privkey)




fs.writeFileSync('alice.pubkey', alice_pubkey);

fs.writeFileSync('alice.privkey', alice_privkey);

fs.writeFileSync('bob.pubkey', bob_pubkey);

fs.writeFileSync('bob.privkey', bob_privkey);

fs.writeFileSync('chris.pubkey', chris_pubkey);

fs.writeFileSync('chris.privkey', chris_privkey);
