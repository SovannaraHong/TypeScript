// const setFun = new Set<number>();
// setFun.add(3,34,546,2,3);
// console.log(setFun);
//* add item []arr
// class Collection<T> {
//   constructor(public data: T[]) {}
//   addData(...item: T[]): void {
//     this.data.push(...item);
//   }
// }
// const obj = new Collection<string>(["hdfdlfd", "rdfd"]);
// obj.addData("dhhkhfd", "dfhksh");
// console.log(obj);
//* add item arr obj
class Collection<T> {
  constructor(public data: T[]) {}
  addData(...item: T[]): void {
    this.data.push(...item);
  }
}
type Product = {
  brand: string;
  price: number;
};

const obj = new Collection<Product>([
  {
    brand: "hello",
    price: 34,
  },
]);
obj.addData({ brand: "wwe", price: 200 });
console.log(obj);
