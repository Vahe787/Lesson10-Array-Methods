function sum(...args) {
  const sumNum = args.reduce((sum, current) => sum + current);
  return sumNum;
}
console.log(sum(1, 2));
console.log(sum(1, 2, 3, 4, 5, 6));
