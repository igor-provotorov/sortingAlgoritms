// bubble sort

function bubbleSort(array) {
  console.log('input array is ' + array);
  let len = array.length;

  for (let i = len - 1; i >= 0; i--) {
    for (let j = 1; j <= i; j++) {
      let temp = 0;
      if (array[j] < array[j - 1]) {
        temp = array[j - 1];
        array[j - 1] = array[j];
        array[j] = temp;
      }
    }
  }
  console.log('output array is ' + array);
}

bubbleSort([2, 1, 0, 3, 2, 6, 0]);
