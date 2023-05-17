/* 
Title ======
    Duplicate Encoder
*/

// Answer 
const duplicateEncode = (word) => {
  let lowecasedWord = word.toLowerCase()
  let spreadedWord = lowecasedWord.split("")
  let res = ""
  for (let i = 0; i < word.length; i++) {
    spreadedWord.filter((el) => lowecasedWord[i] === el).length > 1 ? res += ")" : res += "("
  }
  return res
}

// Codewars: https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript