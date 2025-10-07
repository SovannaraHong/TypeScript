//*best practice

class Collection<T> {
  constructor(private data: T[] = []) {}
  addData(...item: T[]) {
    this.data.push(...item);
  }
}
type Product = {
  brand: string;
  price: number;
};
const newObj = new Collection<Product>();
newObj.addData({ brand: "Toyota", price: 34 });
console.log(newObj);
