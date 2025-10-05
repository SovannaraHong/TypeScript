type RGB = [number, number, number];

const getColor = (rgb: RGB): RGB => {
  return rgb;
};

console.log(getColor([1, 2, 3]));

//====================type with function

type Calc = (a: number, b: number) => number;

const get_Calculate: Calc[] = [];

function get_fun(n: number, n1: number): number {
  return n + n1;
}

get_Calculate.push(get_fun);
console.log(get_Calculate);

//============================

type User = {
  name: string;
  email: string;
};
type Member = User & {
  role: boolean;
};
const userAdmin: Member = {
  name: "nara",
  email: "nara13",
  role: true,
};
console.log(userAdmin);
