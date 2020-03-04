function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  const fill = sandwich.fillings
  return fill
  //console.log(sandwich.fillings);
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  if (person.city === "Manchester") {
    return true
  } else {
    return false
  }
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  let sheep = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "sheep") {
      sheep++
    }
  }
  return sheep
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  let pc = person.address.postCode;
  console.log(pc);
  //if (pc.startsWith('M', 0){
  if (pc.charAt(0) === 'M') {
    return true
  } else if (pc.charAt(1) === 0)  {
    return true
  } else {
    return false
  }
} 

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
