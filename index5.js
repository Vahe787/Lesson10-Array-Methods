function num([...arr], a = "Asc") {
  if (a === "Asc") {
    return arr.sort((a, b) => a - b);
  } else if (a === "Desc") {
    return arr.sort((a, b) => b - a);
  }
}

console.log(num([1, 2, 3], "Desc"));
