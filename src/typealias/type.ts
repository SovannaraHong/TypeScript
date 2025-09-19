type RGB = [number, number, number];

const getColor = (rgb: RGB): RGB => {
  return rgb;
};

console.log(getColor([1, 2, 3]));

//====================type with function

type Cale = (a: number, b: number) => number;

const getCale: Cale[] = [];

function getfun(n: number, n1: number): number {
  return n + n1;
}

getCale.push(getfun);
console.log(getCale);
