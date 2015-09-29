function _insertionSort(arr) {

  var value,                    // the value currently being compared
      i,                        // index into unsorted section
      j;                        // index into sorted section

  for (i = 0; i < arr.length; i++) {

    // store the current value because it may shift later

    value = arr[i];

    /*
     * Whenever the value in the sorted section is greater than the value
     * in the unsorted section, shift all items in the sorted section over
     * by one. This creates space in which to insert the value.
     */

    for (j = i - 1; j > -1 && arr[j] > value; j--) {

      arr[j + 1] = arr[j];

    }

    arr[j + 1] = value;

  }

  return arr;

}