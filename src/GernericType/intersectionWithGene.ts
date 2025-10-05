interface ID {
  id: number;
}
function addProduct<T>(value: T): T & ID {
  const id = Math.random();
  return { ...value, id };
}

type Product = {
  brand: string;
  price: number;
};

const product: Product = { brand: "HONDA", price: 2300 };
console.log(addProduct(product));
// console.log(addProduct<Product>({ brand: "HONDA", price: 2000 }));
