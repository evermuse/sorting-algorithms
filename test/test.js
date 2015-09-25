var expect = chai.expect;
var should = chai.should();

describe('bubbleSort', function() {

  it('should be a function', function() {

    bubbleSort.should.be.a('function');

  });

  it('should take in an array as an argument', function() {

    expect(bubbleSort.bind('string')).to.throw(Error);
    expect(bubbleSort.bind(42)).to.throw(Error);
    expect(bubbleSort.bind(undefined)).to.throw(Error);
    expect(bubbleSort.bind(null)).to.throw(Error);

  });

  it('should return the array in sorted order', function() {

    expect(bubbleSort([5,2,7,4])).to.eql([2,4,5,7]);

  });

});

describe('quickSort', function() {

  it('should be a function', function() {

    quickSort.should.be.a('function');

  });

  it('should take in an array as an argument', function() {

    expect(quickSort.bind('string')).to.throw(Error);
    expect(quickSort.bind(42)).to.throw(Error);
    expect(quickSort.bind(undefined)).to.throw(Error);
    expect(quickSort.bind(null)).to.throw(Error);

  });

  it('should return the array in sorted order', function() {

    expect(quickSort([5,2,7,4])).to.eql([2,4,5,7]);

  });

});

describe('mergeSort', function() {

  it('should be a function', function() {

    mergeSort.should.be.a('function');

  });

  it('should take in an array as an argument', function() {

    expect(mergeSort.bind('string')).to.throw(Error);
    expect(mergeSort.bind(42)).to.throw(Error);
    expect(mergeSort.bind(undefined)).to.throw(Error);
    expect(mergeSort.bind(null)).to.throw(Error);

  });

  it('should return the array in sorted order', function() {

    expect(mergeSort([5,2,7,4])).to.eql([2,4,5,7]);

  });

});

describe('insertionSort', function() {

  it('should be a function', function() {

    insertionSort.should.be.a('function');

  });

  it('should take in an array as an argument', function() {

    expect(insertionSort.bind('string')).to.throw(Error);
    expect(insertionSort.bind(42)).to.throw(Error);
    expect(insertionSort.bind(undefined)).to.throw(Error);
    expect(insertionSort.bind(null)).to.throw(Error);

  });

  it('should return the array in sorted order', function() {

    expect(insertionSort([5,2,7,4])).to.eql([2,4,5,7]);

  });

});

describe('selectionSort', function() {

  it('should be a function', function() {

    selectionSort.should.be.a('function');

  });

  it('should take in an array as an argument', function() {

    expect(selectionSort.bind('string')).to.throw(Error);
    expect(selectionSort.bind(42)).to.throw(Error);
    expect(selectionSort.bind(undefined)).to.throw(Error);
    expect(selectionSort.bind(null)).to.throw(Error);

  });

  it('should return the array in sorted order', function() {

    expect(selectionSort([5,2,7,4])).to.eql([2,4,5,7]);

  });

});