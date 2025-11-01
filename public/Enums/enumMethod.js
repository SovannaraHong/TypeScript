var Priority;
(function (Priority) {
    Priority[Priority["low"] = 1] = "low";
    Priority[Priority["high"] = 2] = "high";
    Priority[Priority["Urgent"] = 3] = "Urgent";
})(Priority || (Priority = {}));
function CheckSystem(problem, priority) {
    if (priority === Priority.low)
        console.log("Low priority issue:", problem);
    else if (priority === Priority.high)
        console.log("High priority issue:", problem);
    else if (priority === Priority.Urgent)
        console.log("System needs to fix now:", problem);
}
CheckSystem("error hosting", Priority.Urgent);
export {};
//# sourceMappingURL=enumMethod.js.map