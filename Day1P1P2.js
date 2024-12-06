
//parse function
function parseListOfLocations (stringInput) {
    let splitInput = stringInput.split('\n').map(input => input.split(' ').filter(input => input.length > 0))
  
  let listOne = []
  let listTwo = []

  
  for (let i = 0; i < splitInput.length; i++) {
    let first = splitInput[i][0]
    let second = splitInput[i][1]
    
    listOne.push(parseInt(first))
    listTwo.push(parseInt(second))
    
  }
  
  return {listOne, listTwo}
  
}


// Part One
function findDistanceOfLocations (stringInput) {
  
  const { listOne, listTwo } = parseListOfLocations(stringInput)
  let newList = []
  
  
  listOne.sort()
  listTwo.sort()
  
  
  for (let i = 0; i < listOne.length; i++) {
    
    newList.push(Math.abs(listOne[i] - listTwo[i]))
  }
  // console.log(newList.reduce((a, b) => a + b, 0))
 
  return newList.reduce((a, b) => a + b, 0)
}

findDistanceOfLocations(input)



