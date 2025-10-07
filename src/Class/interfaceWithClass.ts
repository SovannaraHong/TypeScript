type CheckStock = {
  brand: string;
  Id: number;
  price: number;
  model: string;
  qty: number;
};

interface Bulling {
  show_Bulling(): string;
}
class Product {
  constructor(
    public brand: string,
    private Id: number,
    protected price: number
  ) {}
  CalDes(des: number): void {
    const newDes = this.price - des;
    this.price = newDes;
  }
}
class Stock extends Product implements Bulling {
  constructor(
    brand: string,
    Id: number,
    price: number,
    public model: string,
    public qty: number
  ) {
    super(brand, Id, price);
  }
  show_Bulling(): string {
    return `Hello from implement`;
  }
  stockProduct: CheckStock[] = [];
  addStock(...stock: CheckStock[]) {
    this.stockProduct.push(...stock);
  }
}

const objOne = new Stock("Provida", 1, 2000, "Water", 20);
objOne.addStock({
  brand: "HONDA",
  Id: 2,
  price: 2500,
  model: "AHSONG",
  qty: 5,
});
objOne.CalDes(300);
objOne.show_Bulling();
console.log(objOne);
