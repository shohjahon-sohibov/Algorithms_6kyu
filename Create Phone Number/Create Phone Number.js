/* 
Title ======
    Create Phone Number

*/

// Answer 
function createPhoneNumber(numbers){
  let beginNum = numbers.slice(0, 3).join("")
  let midNum = numbers.slice(3, 6).join("")
  let lastNum = numbers.slice(6, 10).join("")
  return `(${beginNum}) ${midNum}-${lastNum}`
}

// Codewars: https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript