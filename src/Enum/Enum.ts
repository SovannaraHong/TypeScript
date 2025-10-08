enum Objective {
  Low = 1,
  Hight = 2,
  Ur = 3,
}

function CheckEnum(check: number): void {
  if (check === Objective.Low) {
  } else if (check === Objective.Hight) {
  } else if (check === Objective.Ur) {
    return console.log("need...for fetching data");
  }
}
console.log(CheckEnum(2));
