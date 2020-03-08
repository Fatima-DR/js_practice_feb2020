function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  let smallNum = nums.filter(num => num < 1)
  return smallNum

}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  return names.filter(name => name.startsWith(char));
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  return words.filter(word => word.startsWith('to '))
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.filter(num => num % 1 === 0)
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  let arr = []
  users.forEach(user => arr.push(user.data.city['displayName']))
  return arr
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  return nums.map(num => Math.round(Math.sqrt(num) * 100)/ 100)
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  return sentences.filter(sentence => sentence.toLowerCase().includes(str))
  
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  
  return triangles.map(triangle =>Math.max(...triangle))
}


module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
