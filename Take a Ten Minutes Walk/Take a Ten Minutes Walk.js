/* 
Title ========
    Take a Ten Minutes Walk
*/

// Answer
function isValidWalk(walk) {
  let ns = 0, we = 0; 
    for (let dir of walk) { 
      if (dir == 'n') ns += 1; 
      if (dir == 's') ns -= 1; 
      if (dir == 'w') we += 1; 
      if (dir == 'e') we -= 1; 
    } 

    return walk.length == 10 && ns === 0 && we === 0; 
}

// Codewars: https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript