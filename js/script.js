// bubble sort
console.log("----bubble-----");
function bubbleSort(array) {
  console.log(`input array is [${array}]`);
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
  console.log(`output array is [${array}]`);
}

bubbleSort([2, 1, 0, 3, 2, 6, 0]);
console.log("--------------");
console.log("--------------");
console.log("----merge sort-----");
//merge sort
function mergeSort(arr){
  console.log("mergeSort part: " + arr);
  var len = arr.length;
  if(len <2)
     return arr;
  var mid = Math.floor(len/2),
      left = arr.slice(0,mid),
      right =arr.slice(mid);
  //send left and right to the mergeSort to broke it down into pieces
  //then merge those
  return merge(mergeSort(left),mergeSort(right));
}

function merge(left, right){
  var result = [],
      lLen = left.length,
      rLen = right.length,
      l = 0,
      r = 0;
  while(l < lLen && r < rLen){
     if(left[l] < right[r]){
       result.push(left[l++]);
     }
     else{
       result.push(right[r++]);
    }
  }  
  //remaining part needs to be addred to the result
  console.log("merge part:  " + result.concat(left.slice(l)).concat(right.slice(r)));
  return result.concat(left.slice(l)).concat(right.slice(r));
}

mergeSort([2,3,1,5,5,6,4]);
console.log("--------------");