function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  return word.charAt(0).toUpperCase() + word.slice(1);
}



function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  const firstChar = firstName.charAt(0).toUpperCase();
  const secondChar = lastName.charAt(0).toUpperCase();
  return firstChar + "." + secondChar
}


function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  if (vatRate === 0) {
    return originalPrice
  } else {
    const vatPrice = originalPrice / 100
    const num = vatPrice * vatRate
    const total = parseFloat((originalPrice + num).toFixed(2))
    return total
  }
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  if (reduction === 0) {
    return originalPrice
  } else {
    const salePrice = originalPrice / 100
    const num = salePrice * reduction
    const total = parseFloat((originalPrice - num).toFixed(2))
    return total
  }
}

function getMiddleCharacter(str) {
  let length = str.length
  let middle = Math.floor(length / 2)
  if (length % 2 === 0) {
    return str[middle -1] + str[middle]
  } else {
    return str[middle]
  }
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  return word.split("").reverse().join("")
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  return words.split("").reverse().join("")
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  
  }


function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
