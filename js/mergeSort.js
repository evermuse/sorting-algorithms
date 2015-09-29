function _mergeSort(arr) {

  if (arr.length < 2) {

    return arr;

  }

  var mid = Math.floor(arr.length / 2);
  var left = _mergeSort(arr.slice(0, mid));
  var right = _mergeSort(arr.slice(mid));

  return merge(left, right);

}

function merge (a, b) {

  var result = [];

  while (a.length > 0 && b.length > 0)

    result.push(a[0] < b[0] ? a.shift() : b.shift());

  return result.concat(a.length ? a : b);

}