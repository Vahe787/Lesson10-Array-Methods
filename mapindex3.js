function parseInteger([...arr]) {
  const res = arr.map((el) => {
    if (el == Number(el)) {
      return Number(el);
    } else {
      return null;
    }
  });
  return res;
}
console.log(parseInteger(["1", "2", "123", "34"]));
