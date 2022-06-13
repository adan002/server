// Write your codebelow this line
function decodeString(code) {
    let decipher = Number(code[0])
    let solution = ""
    for (let i = 1; i < code.length; i++) {
      let strValue = code[i].charCodeAt() + decipher 
      solution += String.fromCharCode(strValue)
    }
    return solution
  }
    console.log(decodeString('2fcjjm'))