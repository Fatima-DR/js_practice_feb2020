function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map(num => (num * num))
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  let firstWord = words[0]
  for (let i = 1; i < words.length; i++){
    firstWord += words[i].charAt(0).toUpperCase() + words[i].slice(1)  
  }
  return firstWord
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let j = 0;
  for (let i = 0; i < people.length; i++){
    j += people[i].subjects.length
  }
  return j
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  for (let i = 0; i < menu.length; i++){
    if (menu[i].ingredients.includes(ingredient)){
      return true
    } 
  }
  return false
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  const dupNum = [];
  for (let i = 0; i < arr1.length; i++){
    let itemArray1 = arr1[i];
    for (let j = 0; j < arr2.length; j++){
      let itemArray2 = arr2[j];
      if (itemArray1 === itemArray2){
        if (dupNum.includes(itemArray1) !== true)
        dupNum.push(itemArray1)
      }
    }
  }
  return dupNum.sort()
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
