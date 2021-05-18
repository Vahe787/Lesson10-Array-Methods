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

const getUsernameLengths = (users) =>
  users.map((el) => {
    return [el.username.length].join();
  });

console.log(getUsernameLengths(users));
