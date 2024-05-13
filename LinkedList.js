const Node = require("./Node.js");

const LinkedList = class {
  #head;
  #size;

  constructor() {
    this.#head = null;
    this.#size = 0;
  }

  append = (value) => {
    // List has no nodes
    if (this.#head === null) {
      this.#head = new Node({ value });
      this.#size += 1;
      return this;
    }

    let temp = this.#head;
    while (temp.next != null) {
      temp = temp.next;
    }
    temp.next = new Node({ value });

    this.#size += 1;
    return this;
  };

  prepend = (value) => {
    const next = this.#head;
    this.#head = new Node({ value });
    this.#head.next = next;
    this.#size += 1;
    return this;
  };

  print = () => {
    let temp = this.#head;
    let str = "";
    while (temp != null) {
      str += `( ${temp.value} ) -> `;
      temp = temp.next;
    }
    return `${str}null`;
  };

  get size() {
    return this.#size;
  }

  get head() {
    return this.#head;
  }

  get tail() {
    let temp = this.#head;
    while (temp.next != null) {
      temp = temp.next;
    }
    return temp;
  }

  at = (index) => {
    // Out of Bounds
    if (index > this.#size) {
      return null;
    }

    // Negative indexing
    if (index < 0) {
      index = (this.#size + index) % this.#size;
    }

    let temp = this.#head;
    for (let i = 0; i < index; ++i) {
      temp = temp.next;
    }
    return temp;
  };
    

};

module.exports = LinkedList;
