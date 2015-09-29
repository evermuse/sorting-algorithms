var sortModule = (function() {

  var module = {

    setSortTypeButtonTemplate : _setSortTypeButtonTemplate,
    setSortSectionTemplate : _setSortSectionTemplate,
    setOpeningStage : _setOpeningStage,
    setSectionStage : _setSectionStage,
    bubbleSort : _bubbleSort,
    quickSort : _quickSort,
    mergeSort : _mergeSort,
    insertionSort : _insertionSort,
    selectionSort : _selectionSort,
    init : _init

  };

  //array for all sort methods

  var sortArr = [5,4,2,9,8,7,3,6,1];

  //set sortTypeButton template content

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
    sortTypeButtonTemplate.content.appendChild(sortTypeButton);
    sortTypeButton.className = 'sortTypeButton';

  }

  //set sortSortSection template content

  function _setSortSectionTemplate() {

    //define template for DRY rendering of HTML sort elements

    var sortSectionTemplate = document.createElement('template');
    document.head.appendChild(sortSectionTemplate);
    sortSectionTemplate.id = 'sortSectionTemplate';

    //define container in template

    var sortContainer = document.createElement('section');
    sortSectionTemplate.content.appendChild(sortContainer);
    sortContainer.className = 'sortContainer';

    //section heading in template

    var sortHeading = document.createElement('h1');
    sortContainer.appendChild(sortHeading);
    sortHeading.className = 'sortHeading';

    var SortBlockContainer = Object.create(HTMLElement.prototype);
    document.registerElement('sort-block-container');

    var sortBlockContainer = document.createElement('sort-block-container');
    sortContainer.appendChild(sortBlockContainer);
    sortBlockContainer.className = 'sortBlockContainer';

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

    var buttonNav = document.createElement('nav');
    document.body.appendChild(buttonNav);
    buttonNav.id = 'buttonNav';

    //grab the sortTypeButtonTemplate

    var template = document.querySelector('#sortTypeButtonTemplate');

    //create five unique clones of the sortTypeButtonTemplate within the Template

    for (var i = 0; i < arr.length; i++) {

      //clone the contents of the template

      var clone = document.importNode(template.content, true);

      //grab the a copy of the sortTypeButton element w/in the template to clone

      var sortTypeButtonClone = clone.querySelector('.sortTypeButton');

      //add the necessary unique attributes

      sortTypeButtonClone.id = arr[i] + 'SortTypeButton';
      sortTypeButtonClone.dataset.id = arr[i];
      sortTypeButtonClone.textContent = arr[i];
      sortTypeButtonClone.innerHTML = arr[i];
      sortTypeButtonClone.addEventListener('click', function() {

        _setSectionStage(this.dataset.id, sortArr);
        buttonNav.removeChild(this);

      });

      buttonNav.appendChild(clone);

    }

  }

  function _setSectionStage(sortName, sortArr) {

    //grab the sortSectionTemplate

    var template = document.querySelector('#sortSectionTemplate');

    //clone the contents of template

    var clone = document.importNode(template.content, true);

    //grab the contatiner and heading contents and set some unique Section tags

    var sortContainerClone = clone.querySelector('.sortContainer');
    sortContainerClone.id = sortName + 'SortContainer';

    var sortHeadingClone = clone.querySelector('.sortHeading');
    sortHeadingClone.id = sortName + 'SortHeading';
    sortHeadingClone.innerHTML = sortName + ' Sort Visualization';

    var sortBlockContainerClone = clone.querySelector('.sortBlockContainer');
    sortBlockContainerClone.id = sortName + 'SortBlockContainer';

    document.body.appendChild(clone);

    var newContainer = document.querySelector('#' + sortName + 'SortBlockContainer');

    //define new HTML element block elements specific to the sort

    var SortBlock = Object.create(HTMLElement.prototype);
    document.registerElement(sortName + '-sort-block');

    //instantiate the sort-block elements on the page for the length of the array and create the innerHTML from the sortArray

    for (var i = 0; i < sortArr.length; i++) {

      var sortBlock = document.createElement(sortName + '-sort-block');

      sortBlock.dataset.id = i;
      sortBlock.className = 'sortBlock ' + sortName + 'SortBlock';
      sortBlock.innerHTML = sortArr[i];

      newContainer.appendChild(sortBlock);

    }

    //button for end-user to start sort

    var sortStartButton = document.createElement('button');
    newContainer.appendChild(sortStartButton);
    sortStartButton.id = sortName + 'SortStartButton';
    sortStartButton.dataset.id = sortName + 'Sort';
    sortStartButton.className = 'sortStartButton';
    sortStartButton.innerHTML = 'Sort';
    sortStartButton.addEventListener('click', _bubbleSort);
    sortStartButton.addEventListener('click', function() {

      module[this.dataset.id](sortArr);

    });

    //button for end-user to start compare

    // var compareStartButton = document.createElement('button');
    // sortContainer.appendChild(bubbleSortStartButton);
    // sortStartButton.id = 'bubbleSortStartButton';
    // sortStartButton.innerHTML = 'Sort';
    // sortStartButton.addEventListener('click', _bubbleSort);

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