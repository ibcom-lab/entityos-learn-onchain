// In Browser:
//https://unpkg.com/bip39

function harden(num) {
  return 0x80000000 + num;
}

const bip39 = require ('bip39');

// The strength is set to 256 bits for a 24-word mnemonic
const strength = 256; // 128 for 12 words, 256 for 24 words
const mnemonic = bip39.generateMnemonic(strength);
console.log('24-word Mnemonic:', mnemonic);

var entropy = bip39.mnemonicToEntropy(mnemonic);
console.log(entropy)

const CardanoWasm = require("@emurgo/cardano-serialization-lib-nodejs");

const rootKey = CardanoWasm.Bip32PrivateKey.from_bip39_entropy(
  Buffer.from(entropy, 'hex'),
  Buffer.from(''),
);

console.log('rootKey:');
console.log(rootKey);
console.log(rootKey.to_bech32());
console.log(rootKey.to_hex());

const rootKey2 = CardanoWasm.Bip32PrivateKey.from_bech32(
  'xprv1czft78lpypk008cu86pry3ux2x32xpzauyay98sexuluxhfr0ffmhjn7s83a2fypz9aypwmghwrr8zrs2d50gtcl4j4xluzsc3gz9g7k8mglymjgls47rc7dpcq82vr5av24qvmsthk0uxn6rsc2ar7n3y5dddwc'
);

console.log('rootKey2:');
console.log(rootKey2);
console.log(rootKey2.to_bech32());

const rootKey3 = CardanoWasm.Bip32PrivateKey.from_hex(
  '55s425juyjpfl0uj2z3mau359q9600v8ea7fwt3yzxc5ql0eyxd3qcdtauj2e0d3176196746071f7966001535ed99f8d996f53a2cc2d9bed7d7f6bfdf0e34b1de179373e55fe2d8f1e3cd7a357d9f6b72811292c2bac19a4355563883cca52155525c24829fbf9250a3bef234280ba7bd87cf7c972e2411b1407df9219b106'
);

console.log('rootKey3:');
console.log(rootKey3);
console.log(rootKey3.to_hex());

const accountKey = rootKey
  .derive(harden(1852)) // purpose
  .derive(harden(1815)) // coin type
  .derive(harden(0)); // account #0
  
console.log(accountKey);

const utxoPubKey = accountKey
  .derive(0) // external
  .derive(0)
  .to_public();

console.log(utxoPubKey);

const stakeKey = accountKey
  .derive(2) // chimeric
  .derive(0)
  .to_public();

console.log(stakeKey);

// base address with staking key
const baseAddr = CardanoWasm.BaseAddress.new(
  CardanoWasm.NetworkInfo.mainnet().network_id(),
  CardanoWasm.StakeCredential.from_keyhash(utxoPubKey.to_raw_key().hash()),
  CardanoWasm.StakeCredential.from_keyhash(stakeKey.to_raw_key().hash()),
);

console.log(baseAddr);

// enterprise address without staking ability, for use by exchanges/etc
const enterpriseAddr = CardanoWasm.EnterpriseAddress.new(
  CardanoWasm.NetworkInfo.mainnet().network_id(),
  CardanoWasm.StakeCredential.from_keyhash(utxoPubKey.to_raw_key().hash())
);

console.log(enterpriseAddr);

// pointer address - similar to Base address but can be shorter, see formal spec for explanation
const ptrAddr = CardanoWasm.PointerAddress.new(
  CardanoWasm.NetworkInfo.mainnet().network_id(),
  CardanoWasm.StakeCredential.from_keyhash(utxoPubKey.to_raw_key().hash()),
  CardanoWasm.Pointer.new(
    100, // slot
    2,   // tx index in slot
    0    // cert indiex in tx
  )
);

console.log(ptrAddr);

// reward address - used for withdrawing accumulated staking rewards
const rewardAddr = CardanoWasm.RewardAddress.new(
  CardanoWasm.NetworkInfo.mainnet().network_id(),
  CardanoWasm.StakeCredential.from_keyhash(stakeKey.to_raw_key().hash())
);

console.log(rewardAddr);

const address = baseAddr.to_address();

console.log(address);
console.log(address.to_bech32());

console.log('STRICAJS:');

const tjs = require ("@stricahq/bip32ed25519");

// Bip39 entropy from mnemonics
tjs.Bip32PrivateKey.fromEntropy(entropy).then(
function (tjs_rootKey) {
  console.log('tjs-root-key:')
  console.log(tjs_rootKey)

  // hardened derivation
  const tjs_accountKey = tjs_rootKey
        .derive(2147483648 + 1852) // purpose
        .derive(2147483648 + 1815) // coin type
        .derive(2147483648 + 0); // account index

  const tjs_spendingKey = tjs_accountKey
        .derive(0) // chain
        .derive(0) // payment key index
        .toPrivateKey();

  const tjs_pubKey = tjs_spendingKey
        .toPublicKey()
        .toBytes();

  console.log(tjs_accountKey)
  console.log(tjs_spendingKey)
  console.log(tjs_pubKey)

});

//LUCID:

//https://lucid.spacebudz.io/docs/getting-started/choose-wallet/
