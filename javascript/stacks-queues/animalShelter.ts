interface Animal {
  name: string;
  type: "cat" | "dog";
}

export class Shelter {
  queueArray: Animal[] = [];
  enqueue(name: string, type: "cat" | "dog"): void {
    const animal: Animal = { name, type };
    this.queueArray.push(animal);
    console.log(this.queueArray);
  }

  dequeue(type?: "cat" | "dog"): string {
    // If no type is given (type === undefined), return the next animal.
    if (type === undefined && this.queueArray.length) {
      return this.queueArray.shift().name;
    } else {
      for (let i = 0; i < this.queueArray.length; i++) {
        if (this.queueArray[i].type === type) {
          return this.queueArray.splice(i, 1)[0].name;
        }
      }
    }
  }
}
