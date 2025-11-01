enum Priority {
  low = 1,
  high = 2,
  Urgent = 3,
}

function CheckSystem(problem: string, priority: Priority) {
  if (priority === Priority.low) console.log("Low priority issue:", problem);
  else if (priority === Priority.high)
    console.log("High priority issue:", problem);
  else if (priority === Priority.Urgent)
    console.log("System needs to fix now:", problem);
}

CheckSystem("error hosting", Priority.Urgent);
