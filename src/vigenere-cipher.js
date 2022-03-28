const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(encryptionType = 'direct') {
    this.encryptionType = encryptionType;
    this.alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.alphaSet = new Set(this.alpha);
  }

  encrypt(message, key) {
    // Check argument types
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    let encryptedMessage = '';

    for (let i = 0, keyIndex = 0; i < message.length; i++, keyIndex++) {
      // Initialize current character
      let currentChar = message[i].toUpperCase();

      // Check for alphabetic value
      // if not, add value to message unchanged
      // and skip key index incremention
      if (!this.alphaSet.has(currentChar)) {
        encryptedMessage += currentChar;
        keyIndex--;
        continue;
      }

      // Maje sure keyIndex is always
      // smaller than key length
      if (keyIndex === key.length) keyIndex = 0;

      // Calculate offset of current key character
      const currentKeyChar = key[keyIndex].toUpperCase();
      const keyOffset = this.alpha.indexOf(currentKeyChar);

      // Calculate offset of current character
      const alphaOffset = this.alpha.indexOf(currentChar);

      // Combine them to get
      // new position of current character
      const newPosition = (alphaOffset + keyOffset) % 26;

      // Encrypt current character and
      // add to the encrypted message
      currentChar = this.alpha[newPosition];
      encryptedMessage += currentChar;
    }

    if (this.encryptionType === 'direct') {
      return encryptedMessage;
    } else {
      return encryptedMessage.split('').reverse().join('');
    }
  }

  decrypt(encryptedMessage, key) {
    // Check argument types
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    let decryptedMessage = '';

    for (let i = 0, keyInd = 0; i < encryptedMessage.length; i++, keyInd++) {
      // Initialize current character
      let currentChar = encryptedMessage[i].toUpperCase();

      // Check for alphabetic value
      // if not, add value to message unchanged
      // and skip key index incremention
      if (!this.alphaSet.has(currentChar)) {
        decryptedMessage += currentChar;
        keyInd--;
        continue;
      }

      // Maje sure keyIndex is always
      // smaller than key length
      if (keyInd === key.length) keyInd = 0;

      // Calculate offset of current key letter
      const currentKeyChar = key[keyInd].toUpperCase();
      const keyOffset = this.alpha.indexOf(currentKeyChar);

      // Calculate offset of current letter
      // in encrypted text
      const alphaOffset = this.alpha.indexOf(currentChar);

      // Combine them to get
      // old position of current character
      let oldIndex = alphaOffset - keyOffset;
      if (oldIndex < 0) {
        // if the value is negative, it means that
        // the total sum of offset when encrypting
        // exceeded 26, thus it was subtracted, so we add 26 back
        oldIndex += 26;
      }
      const oldPosition = oldIndex % 26;

      // Encrypt current character and
      // add to the encrypted message
      currentChar = this.alpha[oldPosition];
      decryptedMessage += currentChar;
    }

    if (this.encryptionType === 'direct') {
      return decryptedMessage;
    } else {
      return decryptedMessage.split('').reverse().join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine,
};
