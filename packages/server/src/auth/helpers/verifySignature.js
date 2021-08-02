const {
  fromRpcSig,
  ecrecover,
  pubToAddress,
  isValidChecksumAddress,
  toBuffer,
  bufferToHex,
  hashPersonalMessage
} = require('ethereumjs-util');

module.exports = function verifySignature({ msg, signature, address }) {
  if (!isValidChecksumAddress(address)) {
    return false;
  }

  const buffer = hashPersonalMessage(Buffer.from(msg, 'utf-8'));
  const sig = fromRpcSig(signature);
  const publicKey = ecrecover(toBuffer(buffer), sig.v, sig.r, sig.s);
  const verifiedAddress = bufferToHex(pubToAddress(publicKey));

  // The signature verification is successful if the address found with
  // ecrecover matches the initial publicAddress
  return address.toLowerCase() === verifiedAddress.toLowerCase();
};
