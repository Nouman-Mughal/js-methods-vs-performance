const { performance } = require('perf_hooks'); //Timing library

function objectSolution(nums) {
  let testObj = {};
  for (let i = 0; i < nums.length; i++) {
    let aNum = nums[i];
    if (testObj[aNum]) {
      return true;
    } else {
      testObj[aNum] = true;
    }
  }

  return false;
}

function setSolution(nums) {
  let testSet = new Set(nums);
  return testSet.size !== nums.length;
}
const mapSolution = nums => {
    let seen = new Map();
    for (let num = 0; num < nums.length; num++) {
       if (seen.has(nums[num])) return true;
       seen.set(nums[num]);
    }
    return false;
  };
  const filterMethod=nums=> {
    var seen = {};
    return nums.filter(function(item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
}

function runTest(testFunction, testArray) {
  console.log('   Running test:', testFunction.name);
  let start = performance.now();
  let result = testFunction(testArray);
  let end = performance.now();
  console.log('      Duration:', end - start);
}

let arr = [];
let setSize = 10000000;
for (var i = 0; i < setSize; i++) {
  arr.push(i);
}
console.log('Set size:', setSize);
runTest(objectSolution, arr);
runTest(setSolution, arr);
runTest(mapSolution, arr); 
runTest(filterMethod,arr)