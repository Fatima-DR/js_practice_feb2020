const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  let foundNum = null
  for (let i = 0; i < nums.length; i++) {
    if (n === nums[i]) {
      foundNum = nums[i + 1];
      break;
    }
  }
  if (isNaN(foundNum)) {
    return null
  } else {
    return foundNum
  }
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  const addingStr = { "0": 0, "1": 0 };
  let one = 0;
  for (let i = 0; i < str.length; i++) {
    one = str[i];
    if (addingStr[one] === undefined) {
      addingStr[one] = 1;
    } else {
      addingStr[one] += 1;
    }
  }
  return addingStr
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  return parseInt(n.toString().split("").reverse().join(""));
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  let count = 0;
  for (i = 0; i < arrs.length; i++) {
    let temp = 0;
    const subArray = arrs[i];
    for (j = 0; j < subArray.length; j++) {
      temp = subArray[j] + temp;
    }
    count = count + temp;
  }
  return parseInt(count);
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length > 1) {
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
  }
  return arr;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  arr = Object.values(haystack)
  for (let i = 0; i < arr.length; i++) {

    if (isNaN(arr[i])) {
      const str = arr[i].toString().toLowerCase()
      if (str.includes(searchTerm.toLowerCase())) {
        return true
      }
    }
  }
  return false
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  const addingStr = {};
  let one = 0;
  str = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "");
  const arr = str.toLowerCase().split(' ');
  for (let i = 0; i < arr.length; i++) {
    one = arr[i];
    if (addingStr[one] === undefined) {
      addingStr[one] = 1;
    } else {
      addingStr[one] += 1;
    }
  }
  return addingStr
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
