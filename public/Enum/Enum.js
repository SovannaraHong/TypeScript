var Objective;
(function (Objective) {
    Objective[Objective["Low"] = 1] = "Low";
    Objective[Objective["Hight"] = 2] = "Hight";
    Objective[Objective["Ur"] = 3] = "Ur";
})(Objective || (Objective = {}));
function CheckEnum(check) {
    if (check === Objective.Low) {
    }
    else if (check === Objective.Hight) {
    }
    else if (check === Objective.Ur) {
        return console.log("need...for fetching data");
    }
}
console.log(CheckEnum(2));
export {};
//# sourceMappingURL=Enum.js.map