class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }
}
class AnimalShelter {
  constructor() {
    this.queue = [];
  }

  enqueue(name, species) {
    this.queue.push(new Animal(name, species));
  }

  dequeue(pref) {

    if (pref === undefined && this.queue.length) {
      return this.queue.shift().name;
    } else {
      for (let i = 0; i < this.queue.length; i++) {
        if (this.queue[i].species === pref) {
          return this.queue.splice(i, 1)[0].name;
        }
      }
    }
  }
}


module.exports = AnimalShelter, Animal;
