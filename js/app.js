var sortModule = (function() {

  var module = {

    setTemplate : _setTemplate,
    setStage : _setStage,
    bubbleSort : _bubbleSort,
    quickSort : _quickSort,
    init : _init

  };

  function _setTemplate(sortName) {

    //define template for DRY rendering of HTML elements

    var sortTemplate = document.createElement('template');
    document.head.appendChild(sortTemplate);
    sortTemplate.id = 'sortTemplate';

    //define container in template

    var sortContainer = document.createElement('section');
    sortTemplate.appendChild(sortContainer);
    sortContainer.id = sortName + 'SortContainer';
    sortContainer.className = 'sortContainer';

    //section heading in template

    var sortHeading = document.createElement('h1');
    sortContainer.appendChild(sortHeading);
    sortHeading.id = sortName + 'SortHeading';
    sortHeading.className = 'sortHeading';
    sortHeading.innerHTML = sortName + ' Sort Visualization';

    //define new HTML element[sortName]sort-block

    var SortBlock = Object.create(HTMLElement.prototype);
    document.registerElement( sortName + 'sort-block');

    //instantiate the sort-block elements on the page for the length of the array and create the block text node from the array

    for (var i = 0; i < arr.length; i++) {

      var sortBlock = document.createElement( sortName + 'sort-block');
      sortContainer.appendChild(SortBlock);
      sortBlock.dataset.id = i;
      sortBlock.className = sortName + 'sortBlock';
      sortBlock.innerHTML = arr[i];

    }

  }

  function _setStage(sortName) {


    //button for end-user to start merge

    var bubbleSortStartButton = document.createElement('button');
    bubbleSortContainer.appendChild(bubbleSortStartButton);
    bubbleSortStartButton.id = 'bubbleSortStartButton';
    bubbleSortStartButton.innerHTML = 'Sort';
    bubbleSortStartButton.addEventListener('click', _bubbleSort);

  }

  function _init(sortName) {

    _setTemplate(sortName);

    _setStage(sortName);

  }

  return module;

})();

document.addEventListener('DOMContentLoaded', function() {

  sortModule.init(sortName);

});