var arr = [5,4,2,9,8,7,3,6,1];

function _selectionSort(arr) {

  var min;

  for (var i = 0; i < arr.length; i++) {

    //set minimum to this position

    min = i;

    //check the rest of the array to see if anything is smaller

    for (var j = i + 1; j < arr.length; j++) {

      if (arr[j] < arr[min]) {

        min = j;

      }

    }

    //if the minimum isn't in the position, swap it

    if (i != min) {

      var temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;

    }

  }

  return arr;

}

console.log(_selectionSort(arr));