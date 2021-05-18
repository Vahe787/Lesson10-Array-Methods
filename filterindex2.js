let users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
  },
];

function getLang([...users]) {
  let newUsers = [];
  users.filter((el) => {
    if (el.lang === "ENG") {
      newUsers.push(el);
    }
  });
  return newUsers;
}
console.log(getLang(users));
