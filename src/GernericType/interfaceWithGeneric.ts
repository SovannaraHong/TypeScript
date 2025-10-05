interface Collection<T> {
  brand: string;
  data: T[];
}
type Product = {
  brand: string;
  price: number;
};
const oneObj: Collection<Product> = {
  brand: "hongda",
  data: [{ brand: "nara", price: 4399 }],
};
console.log(oneObj);
