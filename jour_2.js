const arr = [2, 4, 6, 8, 3];

const sortInsertion = (n, arr) => {
  if (n <= 0 || n > 100) return "n must be positive and less or equal than 100";

  for (let index = n ; index >= 0; index--) {
    const currentElement = arr[index];
    const nextElement = arr[index - 1];

    if (currentElement < nextElement) {
      arr[index] = nextElement;
      console.log(arr.join(' '));
      arr[index - 1] = currentElement;
    }
  }
  return arr.join(' ');
};

console.log(sortInsertion(5, arr));
