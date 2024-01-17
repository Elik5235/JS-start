const dogArray = [
  {
    nik: "tuz",
    color: "black",
    w: 3,
    age: 4,
  },
  {
    nik: "muz",
    color: "red",
    w: 36,
    age: 45,
  },
  {
    nik: "kuz",
    color: "yel",
    w: 6,
    age: 5,
  },
  {
    nik: "fuz",
    color: "blue",
    w: 7,
    age: 6,
  },
];

dogArray.sort((dog1, dog2) => {
  if (dog1.age > dog2.age) {
    return -1;
  }
  else{
    return 1;
  }
});
