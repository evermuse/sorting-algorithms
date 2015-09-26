var arr = [5,4,2,9,8,7,3,6,1];

function _quickSort(arr) {

  //base case - return the array if it is of size 1 or less

  if (arr.length < 2) {

    return arr;

  }

  //define pivot position, pivot value, and arrays to store the values less than and greater than the pivot

  var pIndex = Math.floor(arr.length / 2),
      pivot = arr[pIndex],
      less = [],
      more = [];

  //iterate through the array pushing numbers higher than the pivot into the more array, numbers lower than the pivot into the less array, and letting the pivot fall through

  for (var i = 0; i < arr.length; i++) {

    if (i === pIndex) {

      continue;

    }

    if (arr[i] < pivot) {

      less.push(arr[i]);

    } else {

      more.push(arr[i]);

    }

  }

  //call the function recursively on the less and more arrays while concating them to the pivot

  return _quickSort(less).concat([pivot]).concat(_quickSort(more));

}

console.log(_quickSort(arr));