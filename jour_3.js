const insertionSort2UN = (n, arr) => {
  let counter = 0;
  for (let index = 0; index <= n * 2; index++) {
    index = counter;
    let currentElement = arr[index];
    const previousElement = arr[index - 1];
    const nextElement = arr[index + 1];
    if (currentElement < previousElement) {
      arr[index] = previousElement;
      arr[index - 1] = currentElement;
    }
    if (arr[index] > nextElement) {
      currentElement = arr[index];
      arr[index] = arr[index + 1];
      arr[index + 1] = currentElement;
      console.log(arr.join(" "));
    }
    counter++;
    // if (counter < n) counter++;
    if (counter >= n) counter = 0;
  }
};

const insertionSort2DEUX = (n, arr) => {
  for (let index = 0; index < n; index++) {
    for (let j = index; j >= 0; j--) {
      const element = arr[j];
      if (arr[j - 1] > element) {
        arr[j] = arr[j - 1];
        arr[j - 1] = element;
      }
    }
    console.log(arr.join(" "));
  }
};

const arr = [7, 4, 3, 5, 6, 2, 1];

console.log(insertionSort2UN(6, arr));

const insertionSort2UN = (n, arr) 