class Node {
    constructor(value = null) {
      this.value = value;
      this.nextNode = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.headNode = null;
      this.tailNode = null;
      this.length = 0;
    }
  
    append(value) {
      const newNode = new Node(value);
      if (!this.headNode) {
        this.headNode = newNode;
        this.tailNode = newNode;
      } else {
        this.tailNode.nextNode = newNode;
        this.tailNode = newNode;
      }
      this.length++;
    }
  
    prepend(value) {
      const newNode = new Node(value);
      if (!this.headNode) {
        this.headNode = newNode;
        this.tailNode = newNode;
      } else {
        newNode.nextNode = this.headNode;
        this.headNode = newNode;
      }
      this.length++;
    }
  
    size() {
      return this.length;
    }
  
    head() {
      return this.headNode;
    }
  
    tail() {
      return this.tailNode;
    }
  
    at(index) {
      if (index < 0 || index >= this.length) return null;
      let currentNode = this.headNode;
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.nextNode;
      }
      return currentNode;
    }
  
    pop() {
      if (this.length === 0) return;
      if (this.length === 1) {
        this.headNode = null;
        this.tailNode = null;
      } else {
        let currentNode = this.headNode;
        while (currentNode.nextNode !== this.tailNode) {
          currentNode = currentNode.nextNode;
        }
        currentNode.nextNode = null;
        this.tailNode = currentNode;
      }
      this.length--;
    }
  
    contains(value) {
      let currentNode = this.headNode;
      while (currentNode) {
        if (currentNode.value === value) return true;
        currentNode = currentNode.nextNode;
      }
      return false;
    }
  
    find(value) {
      let index = 0;
      let currentNode = this.headNode;
      while (currentNode) {
        if (currentNode.value === value) return index;
        currentNode = currentNode.nextNode;
        index++;
      }
      return null;
    }
  
    toString() {
      let result = [];
      let currentNode = this.headNode;
      while (currentNode) {
        result.push(`( ${currentNode.value} )`);
        currentNode = currentNode.nextNode;
      }
      return result.join(' -> ') + ' -> null';
    }
  
    insertAt(value, index) {
      if (index < 0 || index > this.length) return;
      if (index === 0) {
        this.prepend(value);
        return;
      }
      if (index === this.length) {
        this.append(value);
        return;
      }
      const newNode = new Node(value);
      const prevNode = this.at(index - 1);
      newNode.nextNode = prevNode.nextNode;
      prevNode.nextNode = newNode;
      this.length++;
    }
  
    removeAt(index) {
      if (index < 0 || index >= this.length) return;
      if (index === 0) {
        this.headNode = this.headNode.nextNode;
        if (this.length === 1) {
          this.tailNode = null;
        }
      } else {
        const prevNode = this.at(index - 1);
        prevNode.nextNode = prevNode.nextNode.nextNode;
        if (index === this.length - 1) {
          this.tailNode = prevNode;
        }
      }
      this.length--;
    }
  }
  
  export default LinkedList;