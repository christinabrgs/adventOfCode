
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



// Part Two
function findSimilarityScore(stringInput) {
  const { listOne, listTwo } = parseListOfLocations(stringInput)
  
  // console.log(listTwo)
  
  const listOneSet = new Map ()
  
  const map = listTwo.reduce((a, b) => {
    if (a.has(b)) {
      let val = a.get(b)
      a.set(b, val + 1)
    } else {
      a.set(b, 1)
    }
    return a
  }, new Map ())
  
  const checkAgainstListOne = listOne.reduce((a, b) => {
    let count = map.has(b) ? map.get(b) : 0
    return a + (b * count)
  }, 0)
  
// console.log(checkAgainstListOne)
  
}

findSimilarityScore(input)