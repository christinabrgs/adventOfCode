

// Parse input and checks for safe lines then checks if unsafe lines can be made safe
function isSafe(numbers){
    safe = true
  
      // looping through each array value in numbers array
      for (j = 0; j < numbers.length - 2; j++) {
          
        const curr = parseInt(numbers[j])
        const next = parseInt(numbers[j + 1])
        const nextNext = parseInt(numbers[j + 2])
        const diff = Math.abs(curr - next)
        const sDiff = Math.abs(next - nextNext)
        
    
      // checks if curr, next, nextNext neither descending or ascending then checks if removing any indices produces a diff result
      if ((curr > next && next < nextNext) || (curr < next && next > nextNext)) 
        {
          safe = false;
        }
    
      // checks if curr, next, nextNext are equal in value then checks if removing any indices produces a diff result
      if (curr === next || next === nextNext) {
            safe = false;
        }
        
        // checks if curr, next, nextNext is ascending or descending
        if ((curr < next && next < nextNext && diff <= 3 && sDiff <= 3) || (curr > next && next > nextNext && diff <= 3 && sDiff <= 3))
        {
          continue
        }
        else {
        safe = false;
        break
        }
        
        // checks diff of curr, next, nextNext
        if (diff > 3 || sDiff > 3) {
          safe = false;
          break
        }
      
      }
  
    return safe;
  }
  
  function parseStringInput (stringInput) {
    
    // parses string input into an array of array and creating a variable safeSets that will store all safe values
    const parsedInput = stringInput.split('\n').map(line => line.split(' '))
    let count = 0
    
  
    for (const reports in parsedInput) {
      
      let report = parsedInput[reports]
      let val = reports
      let safe = isSafe(report)
      
      if(safe){
        count++;
      }
      else if (!safe) {
        let newReport = report
        for (let i = 0; i < report.length; i++) {
        let newReport = report.slice(0, i).concat(report.slice(i + 1));
        // console.log(newReport);
        if (isSafe(newReport)) {
          count ++ 
          break
        }
        }
        console.log(newReport)
        
      }
    }
    
    console.log(count)
  }
  
  parseStringInput(input)