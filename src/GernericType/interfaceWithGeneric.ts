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
///

interface MemberUser {
  readonly dbId: number;
  name: string;
  age: number;
  product: string[];
}
type AdminShip<T> = MemberUser & {
  author: string;
  role: T[];
};

type Products = {
  brand: string;
  price: number;
};
const createProduct: MemberUser = {
  dbId: 1,
  name: "nara",
  age: 12,
  product: ["coca", "carabav", "alcohol"],
};

const createByAdmin: AdminShip<Products> = {
  dbId: 12,
  author: "admin",
  name: "akira_dev",
  age: 24,
  product: ["coca", "carabav", "alcohol"],
  role: [
    {
      brand: "honda",
      price: 300,
    },
  ],
};
console.log(createProduct, createByAdmin);
