type Product = "BMW" | "ROSE" | "TOYOTA";
class CarStock {
  constructor(brand: string, model: string, Stock: Product) {
    this.brand = brand;
    this.model = model;
    this.Stock = Stock;
  }
  brand: string;
  model: string;
  Stock: Product;
}
const stockOne = new CarStock("hoda", "kava", "TOYOTA");
console.log(stockOne);

//* create add feature product =====================

type AdminShipStock = {
  author: string;
  readonly Id?: number;
};

class Option {
  constructor(
    name: string,
    age: number,
    gender: string,
    role: string,
    phone: number[]
  ) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.role = role;
    this.phone = phone;
  }
  name: string;
  age: number;
  gender: string;
  role: string;
  phone: number[];
  feature: string[] = [];
  addFeature(feature: string): void {
    this.feature.push(feature);
  }
}

const objMember = new Option("luffy", 20, "Male", "User", [34656]);

objMember.addFeature("HONDA");
console.log(objMember);
