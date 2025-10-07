class StockCar {
  constructor(public brand: string, private price: number) {}
  addDes(des: number): void {
    const newPrice = this.price - des;
    this.price = newPrice;
  }
}
class Car extends StockCar {
  constructor(brand: string, price: number, public model: string) {
    super(brand, price);
  }
}
const myCar = new Car("H", 3999, "GTR");
myCar.addDes(999);
console.log(myCar);
