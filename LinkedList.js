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

    let h = this.#head;
    while (h?.next != null) {
      h = h.next;
    }
    h.next = new Node({ value });

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
    let h = this.#head;
    let str = "";
    while (h != null) {
      str += `( ${h.value} ) -> `;
      h = h.next;
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
    let h = this.#head;
    while (h.next != null) {
      h = h.next;
    }
    return h;
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

    let h = this.#head;
    for (let i = 0; i < index; ++i) {
      h = h.next;
    }
    return h;
  };
};

module.exports = LinkedList;
