const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  getLength() {
    if (!this.chain) {
      this.chain = [];
    }

    return this.chain.length;
  },

  addLink(value) {
    if (!this.chain) {
      this.chain = [];
    }

    this.chain.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if (!this.chain[position - 1]) {
      delete this.chain;
      throw new Error(`You can't remove incorrect link!`);
    }

    this.chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    if (!this.chain) {
      this.chain = [];
    }

    this.chain.reverse();
    return this;
  },

  finishChain() {
    let result = this.chain.join('~~');
    delete this.chain;
    return result;
  },
};

module.exports = {
  chainMaker,
};
