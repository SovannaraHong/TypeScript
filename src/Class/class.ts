// class Car {

//   fun(brand: string, model: string) {
//     this.brand = "BMW";
//     this.model = "7 Series";
//   }
//   brand:string;
//   model:string;
// }

//** option 1
//  */
class Car {
  constructor() {
    this.brand = "Toyota";
    this.model = "7 series";
  }
  brand: string;
  model: string;
}
const myCar = new Car();
console.log(myCar);

//** option 2 keep edit for your sef
//  */

class Stock {
  constructor(brand: string, model: string, price: number) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  brand: string;
  model: string;
  price: number;
}
const myStock = new Stock("HOda", "kava", 2000);
console.log(myStock);
