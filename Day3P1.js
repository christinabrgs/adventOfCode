const fs = require('fs')

fs.readFile('input.txt', 'utf8', (err, data) => {
    if(err) {
        console.error('Error reading the file', err)
        return
    }
    else {
        processData(data)
        processDoMuls(data)
    }
})

function processData (data) {

    let removeDonts = processDoMuls(data)

    // storing regex rules in variable
    const mulDigs = /mul\((\d{1,3}),\s*(\d{1,3})\)/g;
    let count = 0
    
    // using .exec to find matches in data string that equals regex sequence and storing the instance in a variable
    // looping through so long as it is not null and add 1 to the count for each instance
    let match;
    let listMatches = []
    
    while ((match = mulDigs.exec(removeDonts)) !== null) {
        listMatches.push(match[0])
    }
    // console.log('evaluate:', eval(listMatches[0]))

    listMatches.forEach((a) => {
        let product = eval(a)
        count += product
    })

    console.log(count)
}


function processDoMuls (data) {
    let pattern = /don't\(\).*?(?:do\(\)|$)/gs;
    let removeDonts = data.replace(pattern, "")

    return removeDonts
}

function mul(a, b) {
    return a * b
}


