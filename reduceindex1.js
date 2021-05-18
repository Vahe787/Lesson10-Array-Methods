const arr = [22 + 55 + 166 + 366 + 205 + 333 + 95 + 62 + 43];
function sumArrNum18(arr) {
  let res = arr.reduce((acc, el) => {
    if (el >= 18) {
      acc += el;
    }
    return acc;
  }, 0);
  return res;
}
console.log(sumArrNum18(arr));
