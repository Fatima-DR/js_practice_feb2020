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
  // looking at list in an array
  // create a for loop to access array
  // access property people.subject
  // loop around and count (add) how many subjects are in the list
  // return total amound of subjects
  let j = 0;
  for (let i = 0; i < people.length; i++){
    j += people[i].subjects.length
  }
  return j
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // looking at a list in an array
  // looking to return true or false
  // create for loop to look into the array
  // access menu[i].ingredients
  // .includes(ingredient) will give a true or false and check for specific word
  // return true or false

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
  // looking at comparing 2 arrays
  // check both arrays to see if there are any duplicate numbers
  // for loop to go through the first arrays
  // loop inside the for loop to compare the 2nd array
  // only display the duplicate number once
  // only going up in sequential order
  // returning number back into an array
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
