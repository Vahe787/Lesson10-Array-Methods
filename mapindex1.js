const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
  },
];

const getUsersName = (users) =>
  users.map((el) => {
    return [el.username].join();
  });

console.log(getUsersName(users));
