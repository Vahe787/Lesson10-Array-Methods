const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    isAstronaut: true,
  },
  {
    username: "Nil Armstrong",

    lang: "ENG",
    isAstronaut: true,
  },
  {
    username: "Elon Musk",
    isAstronaut: false,
  },
];

function filterByField() {
  let newUsers = [];
  users.filter((el) => {
    if (el["isAstronaut"] === true) {
      newUsers.push(el);
    }
  });
  return newUsers;
}
console.log(filterByField(users));
