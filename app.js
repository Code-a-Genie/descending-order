// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Solution
function descendingOrder(n){
    let sortedDigits = n.toString().split('').sort(function(a ,b){
      return b - a;
    })
    let result = parseInt(sortedDigits.join(''));
    
    return result;
  }