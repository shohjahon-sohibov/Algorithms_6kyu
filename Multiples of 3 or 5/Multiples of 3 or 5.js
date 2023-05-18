/* 
Titile ========
    Multiples of 3 or 5
*/

// Answer
function solution(number){
  let sum = 0
  for (let i = 0; i < number; i++) {
    if(i % 3 === 0) {
      sum += i
    } else if(i % 5 === 0) {
      sum += i
    }
  }
  return sum
}

// Codewars: codewars.com/kata/514b92a657cdc65150000006/train/javascript