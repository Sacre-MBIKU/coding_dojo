const str = "A";
const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const getIndex = (letter) => alphabet.indexOf(letter) + 1;

const getColumn = (str) => {
  let somme = 0;
  let counter = str.length - 1;
  const strArray = str.toLowerCase().split("");

  const strMapNumbers = strArray.map((letter) => {
    const letterTransformedToNumber = getIndex(letter) * Math.pow(26, counter);
    counter--;
    return letterTransformedToNumber;
  });

  strMapNumbers.forEach((number) => (somme += number));
  return somme;
};

console.log(getColumn("aaa"));
