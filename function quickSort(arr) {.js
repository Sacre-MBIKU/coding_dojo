function quickSort(arr) {
    // Write your code here
    const left = [];
    const right = [];
    const equal = [];
    let quickSortArr = [];
    const pivot = arr[0];
  
    for (let index = 0; index < arr.length; index++) {
      const currentElement = arr[index];
  
      if (currentElement < pivot) {
        left.push(currentElement);
      } else if (currentElement > pivot) {
        right.push(currentElement);
      } else {
        equal.push(currentElement);
      }
    }
  
    //quickSortArr = [...left, ...equal, ...right];
    quickSortArr = left.concat(equal, right);
    return quickSortArr;
  }
  
  const arr = [5, 7, 4, 3, 8, 5];
  console.log(quickSort(arr));  