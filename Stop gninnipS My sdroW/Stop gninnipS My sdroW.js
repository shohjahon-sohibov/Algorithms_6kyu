/* 
Title ===========
    Stop gninnipS My sdroW

*/

// Answer
function spinWords(string){
    let strArr = string.split(" ")
    let res = []
    strArr.map((el) => el.length >= 5 ? res.push(el.split("").reverse().join("")): res.push(el))
    return res.join(" ")
  }
              

// Codewars: https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript