let arr = [1, 2, 3];
function myForEach(array, action) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    action(element, index, array);
  }
}

myForEach(arr, (el) => {
  console.log(el);
});
