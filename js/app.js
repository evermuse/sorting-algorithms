var sortModule = (function() {

  var module = {

    setSortTypeButtonTemplate : _setSortTypeButtonTemplate,
    setSortSectionTemplate : _setSortSectionTemplate,
    setOpeningStage : _setOpeningStage,
    setSectionStage : _setSectionStage,
    bubbleSort : _bubbleSort,
    quickSort : _quickSort,
    init : _init

  };

  function _setSortTypeButtonTemplate() {

    //define button template for DRY rendering of HTML button elements

    var sortTypeButtonTemplate = document.createElement('template');
    document.head.appendChild(sortTypeButtonTemplate);
    sortTypeButtonTemplate.id = 'sortTypeButtonTemplate';

    //define new HTML element sort-type-button

    var SortTypeButton = Object.create(HTMLElement.prototype);
    document.registerElement('sort-type-button');

    //instantiate the sort-type-button elements on the page for the length of the array and create the innerHTML from the array

    var sortTypeButton = document.createElement('sort-type-button');
    sortTypeButtonTemplate.appendChild(sortTypeButton);
    sortTypeButton.className = 'sortTypeButton';

  }

  function _setSortSectionTemplate() {

    // //define template for DRY rendering of HTML sort elements

    // var sortSectionTemplate = document.createElement('template');
    // document.head.appendChild(sortSectionTemplate);
    // sortSectionTemplate.id = 'sortSectionTemplate';

    // //define container in template

    // var sortContainer = document.createElement('section');
    // sortSectionTemplate.appendChild(sortContainer);
    // sortContainer.className = 'sortContainer';
    // sortContainer.id = sortName + 'SortContainer';

    // //section heading in template

    // var sortHeading = document.createElement('h1');
    // sortContainer.appendChild(sortHeading);
    // sortHeading.className = 'sortHeading';
    // sortHeading.id = sortName + 'SortHeading';
    // sortHeading.innerHTML = sortName + ' Sort Visualization';

    // //define new HTML element[sortName]sort-block

    // var SortBlock = Object.create(HTMLElement.prototype);
    // document.registerElement( sortName + 'sort-block');

    //instantiate the sort-block elements on the page for the length of the array and create the innerHTML from the array

    // for (var i = 0; i < arr.length; i++) {

    //   var sortBlock = document.createElement( sortName + 'sort-block');
    //   sortContainer.appendChild(SortBlock);
    //   sortBlock.dataset.id = i;
    //   sortBlock.className = sortName + 'sortBlock';
    //   sortBlock.innerHTML = arr[i];

    // }

  }

  //sets the opening stage with header

  function _setOpeningStage(arr) {

    //add header and h elements & populate innerHTML
    var pageHeader = document.createElement('header');
    document.body.appendChild(pageHeader);

    var pageHeading = document.createElement('h1');
    pageHeader.appendChild(pageHeading);
    pageHeading.id = 'titleHeading';
    pageHeading.innerHTML = 'Sort Visualization';

    var pageSubHeading = document.createElement('h2');
    pageHeader.appendChild(pageSubHeading);
    pageSubHeading.id = 'subTitleHeading';
    pageSubHeading.innerHTML = 'Pick a Sort Method! (or more than one to compare)';

    //grab the sortTypeButtonTemplate & clone the contents

    var template = document.querySelector('#sortTypeButtonTemplate');

    //clone the contents of the template before placing on the DOM

    var templateClone = document.importNode(template.content, true);

    //create five unique clones of the sortTypeButtonTemplate within the Template

    for (var i = 0; i < arr.length; i++) {

      templateClone.querySelector('.sortTypeButton').dataset.id = arr[i];
      var sortTypeButtonClone = templateClone.querySelector('.sortTypeButton');
      //sortTypeButtonClone.dataset.id = arr[i];
      sortTypeButtonClone.textContent = arr[i];
      sortTypeButtonClone.id = arr[i] + 'SortTypeButton';
      sortTypeButtonClone.innerHTML = arr[i];
      sortTypeButtonClone.addEventListener('click', function() {

        _setMainStage(arr[i]);

      });

      document.body.appendChild(templateClone);

    }

    document.body.appendChild(templateClone);

  }

  function _setSectionStage(sortName) {




    //button for end-user to start sort

    var sortStartButton = document.createElement('button');
    sortContainer.appendChild(bubbleSortStartButton);
    sortStartButton.id = 'bubbleSortStartButton';
    sortStartButton.innerHTML = 'Sort';
    sortStartButton.addEventListener('click', _bubbleSort);

    //button for end-user to start compare

    var compareStartButton = document.createElement('button');
    sortContainer.appendChild(bubbleSortStartButton);
    sortStartButton.id = 'bubbleSortStartButton';
    sortStartButton.innerHTML = 'Sort';
    sortStartButton.addEventListener('click', _bubbleSort);

  }

  //init function populates the template content and starts the process of setting the stage

  function _init(sortName) {

    _setSortTypeButtonTemplate();

    _setSortSectionTemplate();

    _setOpeningStage(['bubble', 'quick', 'merge', 'insertion', 'selection']);

  }

  return module;

})();

document.addEventListener('DOMContentLoaded', function() {

  sortModule.init();

});