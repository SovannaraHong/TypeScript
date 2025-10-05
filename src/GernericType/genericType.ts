function showNumber(value: number): number {
  return value;
}
function showString(value: string): string {
  return value;
}
function showBoolean(value: boolean): boolean {
  return value;
}

// generic type
// not only Use T it can use from a-z
function ShowGeneric<T>(value: T): T {
  return value;
}
ShowGeneric(1);
// use with arrow function

const Show = <F>(value: F): F => {
  return value;
};

//============example ======================

function formatUpperCase(value: any): any {
  return value;
}
const displays = "akira";

console.log(formatUpperCase(displays.toUpperCase()));

function display<T>(value: T): T {
  return value;
}
