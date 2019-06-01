'use strict';
class AnimalShelter {
  constructor() {
    this.catQueue = [];
    this.dogQueue = [];
    this.dogFront = null;
    this.catFront = null;
    this.placement = 0;
  }

  enqueue(val) {
    if (val !== 'dog' || val !== 'cat') {
      return null;
    }
    if (val === 'dog') {
      this.dogFront = this.dogFront[this.dogFront.length - 1];
      const dog = {};
      this.placement = this.placement++;
      return (this.dogQueue = this.dogQueue.push(dog));
    } else {
      this.catFront = this.catFront[this.catFront.length - 1];
      const cat = {};
      this.placement = this.placement++;
      return (this.catQueue = this.catQueue.push(cat));
    }
  }

  dequeue(val) {
    if (val !== 'dog' || val !== 'cat') {
      return null;
    }
    if (val === 'dog') {
      return this.dogFront;
    } else {
      return this.catFront;
    }
  }
}

module.exports = AnimalShelter;
