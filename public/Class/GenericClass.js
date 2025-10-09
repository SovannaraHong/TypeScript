//*best practice
class Collection {
    constructor(data = []) {
        this.data = data;
    }
    addData(...item) {
        this.data.push(...item);
    }
}
const newObj = new Collection();
newObj.addData({ brand: "Toyota", price: 34 });
console.log(newObj);
export {};
//# sourceMappingURL=GenericClass.js.map