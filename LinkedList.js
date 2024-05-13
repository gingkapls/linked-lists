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

  toString = () => {
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

  pop = () => {
    let temp = this.#head;
    while (temp.next?.next != null) {
      temp = temp.next;
    }
    let res = temp.next;
    temp.next = null;
    this.#size -= 1;
    return res;
  };

  contains = (value) => {
    let temp = this.#head;
    while (temp != null) {
      if (temp.value === value) return true;
      temp = temp.next;
    }
    return false;
  };

  find = (value) => {
    let temp = this.#head;
    let index = 0;

    while (temp != null) {
      if (temp.value === value) return index;
      temp = temp.next;
      index += 1;
    }
    return null;
  };

  // Extra credit
  insertAt = (index, value) => {
    // Out of bounds
    if (index > this.#size) {
      return null;
    }

    // Attach to head
    if (index === 0) {
      this.prepend(value);
      return this;
    }

    // Negative indexing
    if (index < 0) {
      index = (this.#size + index) % this.#size;
    }

    let prev = this.#head;
    for (let i = 1; i < index; ++i) {
      prev = prev.next;
    }

    const curr = new Node({ value });
    curr.next = prev.next;
    prev.next = curr;

    return this;
  };
};

module.exports = LinkedList;
