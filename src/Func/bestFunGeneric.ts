class Collection<T> {
  private item: T[] = [];
  constructor(initailItem: T[] = []) {
    this.item = Array.from(new Set(initailItem));
  }
  addData(...data: T[]): void {
    this.item.push(...data);
    this.item = Array.from(new Set(data));
  }
  remove(num: T): void {
    this.item = this.item.filter((item) => {
      return item !== num;
    });
  }
  getAll(): T[] {
    return [...this.item];
  }
}
const obj = new Collection<number>([1, 2, 3, 4, 5, 6, 4, 343, 2, 1, 3, 1]);
obj.addData(2, 3, 45, 5, 6, 8);
console.log(obj.getAll());

obj.remove(2);
console.log(obj.getAll());
console.log(obj);
