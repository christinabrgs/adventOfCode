

// Parse input and counts the amount of safe lines
function parseStringInput (stringInput) {
  
    // parses string input into an array of array and creating a variable safeSets that will store all safe values
    const parsedInput = stringInput.split('\n').map(line => line.split(' '))
    const safeSets = new Set ()
  
  
  // looping through parsedInput array  
  for (n = 0; n < parsedInput.length; n++) {
    
    safeSets.add(parsedInput[n])
  
    
    // looping through each array value in parsedInput array
    for (j = 0; j < parsedInput[n].length - 2; j++) {
      const curr = parseInt(parsedInput[n][j])
      const next = parseInt(parsedInput[n][j + 1])
      const nextNext = parseInt(parsedInput[n][j + 2])
      const diff = Math.abs(curr - next)
      const sDiff = Math.abs(next - nextNext)
      
  
    // checks if curr, next, nextNext neither descending or ascending then checks if removing any indices produces a diff result
    if ((curr > next && next < nextNext) || (curr < next && next > nextNext)) 
      {
        safeSets.delete(parsedInput[n])
      }
  
    // checks if curr, next, nextNext are equal in value then checks if removing any indices produces a diff result
    if (curr === next || next === nextNext) {
          safeSets.delete(parsedInput[n])
      }
      
      // checks if curr, next, nextNext is ascending or descending
      if ((curr < next && next < nextNext && diff <= 3 && sDiff <= 3) || (curr > next && next > nextNext && diff <= 3 && sDiff <= 3))
      {
        continue
      }
      else {
      safeSets.delete(parsedInput[n])
      break
      }
      
      // checks diff of curr, next, nextNext
      if (diff > 3 || sDiff > 3) {
        safeSets.delete(parsedInput[n])
        break
      }
    
    }
  }
    console.log(`endresult: ${safeSets.size}`)
  }
  
  parseStringInput(input)
  
  