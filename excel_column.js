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

const numberArray = [10, 2, 20, 32, 1, 0];
const newArr = [];

// Fonction qui renvoie le plus grand élément du tableau
// L'ajouter dans un nouveau tableau
// Le supprimer dans l'ancien tableau
const orderArrar = (arr) => {
  for (let index = 0; index < arr.length; index++) {
    const currentElement = arr[index];

    for (let j = 0; j < arr.length; j++) {
      const element = arr[j];
      if (element != currentElement && currentElement < element) {
        arr.push(currentElement);
        arr.splice(j, 1);

      } 
      else if(element != currentElement && currentElement > element) {
        arr.unshift(element);
        arr.splice(j, 1);
      } 
    }
  }
  return arr;
};

console.log(orderArrar(numberArray));