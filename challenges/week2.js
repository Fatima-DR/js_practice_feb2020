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
  const oneBus = 40
  const busNumbers = Math.ceil(people / oneBus)
  return busNumbers
  
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
  let pc = person.address.postCode;
  let city = person.address.city;
  if (pc.charAt(0) === 'M' && city === 'Manchester') {
    return true;
  } return false;
}


module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
