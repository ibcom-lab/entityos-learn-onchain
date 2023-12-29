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
