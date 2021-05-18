const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    age: 24,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    age: 22,
  },
];

function getAverageAge(users) {
  let res = users.reduce((acc, el) => {
    return (acc.age + el.age) / users.length;
  });
  return res;
}

console.log(getAverageAge(users));
