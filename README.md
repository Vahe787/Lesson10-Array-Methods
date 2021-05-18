# Array Methods

---

## Concatenate the two arrays

---

```javascript
const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8, 9];
const arr3; // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## How to take arguments in sum function?

---

```javascript
function sum() {
  return args.reduce((sum, current) => {
    return sum + current;
  });
}
sum(1, 2); // prints 3
sum(1, 2, 3); // prints 6
```

## How to pass arguments in sum function?

---

```javascript
function sum(x, y, z) {
  return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum()); // prints 6
```

## Swapping Values using the Destructuring Assignment

---

```javascript
let a = 3;
let b = 6;
console.log(a); //6
console.log(b); //3
```
