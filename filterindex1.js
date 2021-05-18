const arr = [1, 2, "a", true, {}, undefined, 55, false, "hi", null, 166, NaN];

function filtNumbers(arr) {
  let newArr = arr.filter((el) => {
    if (typeof el === "number") {
      return el;
    }
  });
  return newArr;
}
console.log(filtNumbers(arr));
