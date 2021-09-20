const loopInvariant = (s, arr) => {
  const ar = [];
  for (let index = 0; index < s; index++) {
    for (let j = index; j >= 0; j--) {
      const currentElement = arr[j];
      if (ar.length == 0) ar[0] = arr[0];
      if (arr[j - 1] > currentElement) {
        arr[j] = arr[j - 1];
        arr[j - 1] = currentElement;
        ar.unshift(arr[j-1]);
        console.log(ar)
      }
    }
  }
  return ar
};

const array = [7, 4, 3, 5, 6, 2];
const array2 = [2, 1, 3, 1, 2]

const runningTime = (arr) => {
    let counter = 0;
    let sumCounter = 0;
    
  for (let index = 0; index < arr.length; index++) {
    for (let j = index; j >= 0; j--) {
      const element = arr[j];
      if (arr[j - 1] > element) {
        arr[j] = arr[j - 1];
        arr[j - 1] = element;
        counter++;
      }
      sumCounter += counter;
      counter = 0;
    }
  }
  return sumCounter;
}

console.log(runningTime(array2));
