class Obj {
  constructor(public name: string, public age: number) {}
  feature: number[] = [];
  addFeature(a: number, b: number): void {
    this.feature.push(a + b);
  }
}
const numPlus = new Obj("Nara", 43);
numPlus.addFeature(3, 2);
console.log(numPlus);

class GenericClass {
  constructor(public name: string, private age: number) {}
}
const myClass = new GenericClass("nara", 45);
console.log(myClass);
