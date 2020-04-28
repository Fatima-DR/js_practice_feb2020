

const sumMultiples = arr => {
  if (arr === undefined) throw new Error("arr is required");
  let resultMultiples = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0 || arr[i] % 5 === 0) {
      resultMultiples += arr[i];
    }
  }
  return resultMultiples;
};


const isValidDNA = str => {
  if (str === undefined) throw new Error("str is required");
  for (let i = 0; i < str.length; i++) {
    if (str[i].includes("C", "G", "T", "A")) {
      return true;
    }
  }
  return false;
};


const getComplementaryDNA = str => {
  if (str === undefined) throw new Error("str is required");
  if (!isValidDNA(str)) { throw new Error("no valid DNA base") }
  let basePair = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "T") {
      basePair.push("A");
    }
    if (str[i] === "C") {
      basePair.push("G");
    }
    if (str[i] === "A") {
      basePair.push("T")
    }
    if (str[i] === "G") {
      basePair.push("C")
    }
  }
  return basePair.toString(" ").replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "");

};


const isItPrime = n => {
  if (n === undefined) throw new Error("n is required");
  if (n % 2 === 0) {
    return false
  }
  return true
};


const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");

  const arr = [];

  for (let i = 0; i < n; i++) {
    arr.push(fill)
    Array(n).fill(arr)
  }
  return Array(n).fill(arr)

};

const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");

  let count = 0;

  if (staff.length < 3) {
    return false
  }
  for (let i = 0; i < staff.length; i++) {
    if (staff[i].rota.includes(day)) {
      count += 1
    }
  }
  if (count > 2) {
    return true
  }
  return false
};



module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
};
