function _quickSort() {

  //the swapped var will let be used to know when the sort is done

  var swapped;

  //wrap the for loop in an interval so the movement of nodes is visible as the sort progresses

  var toStop = setInterval(function() {

    swapped = false;

    //comparison nodes to enable removal and insertion on the DOM

    var currentNode;
    var nodeAtNext;
    var nodeToMove;

    for (var i = 0; i < arr.length; i++) {

      if (arr[i] > arr[i + 1]) {

        //if the current value is greater than the next set a temp variable with the current value

        var temp = arr[i];

        //similar to above set the current node and next node to enable DOM removal / insertion

        currentNode = document.querySelector('bubblesort-block[data-id="' + i + '"]');
        nodeAtNext = document.querySelector('bubblesort-block[data-id="' + [i + 1] + '"]');

        //assign current value to the next index position

        arr[i] = arr[i + 1];

        //remove the nextNode from the DOM and reset the data-id attribut to the correct index position

        nodeToMove = bubbleSortContainer.removeChild(nodeAtNext);
        nodeToMove.setAttribute('data-id', i);

        //insert the removed node back into the DOM before the currentNode and set the currentNode's data-id to the nextNode

        bubbleSortContainer.insertBefore(nodeToMove, currentNode);
        currentNode.setAttribute('data-id', i + 1);

        //re-assign the temp variable to the next array position

        arr[i + 1] = temp;

        swapped = true;

      }

    }

    if (!swapped) {

      clearInterval(toStop);

    }

  }, 500);

  return arr;

}