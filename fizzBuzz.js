//my solution 
function fizzbuzz(n)
{
  let array = [];
  // create a new array 
  
  for(let i=1; i<=n; i++){  //for loop it! 
  if(i % 3 === 0 && i % 5 === 0){
    array.push("FizzBuzz");
    } else if (i % 3 === 0) {
    array.push("Fizz");
    } else if (i % 5 ===0){
    array.push("Buzz");
    }else{
    array.push(i)
    }
  }
  return array;
}

// Brockstons solution 
const fizzbuzz = (n) => {
    let newArr = [];
    for (let i = 1; i <= n; i++) {
        newArr.push(i%3===0&&i%5===0?"FizzBuzz":i%3===0?"Fizz":i%5===0?"Buzz":i)
    }
    return newArr
}
// matts solution 
function fizzbuzz(n) {
    const output = [];
    for (let i = 1; i <= n; ++i) {
        const multipleOf3 = !(i % 3);
        const multipleOf5 = !(i % 5);
        if (multipleOf3) {
            if (multipleOf5)
                output.push("FizzBuzz");
            else
                output.push("Fizz");
        } else if (multipleOf5)
            output.push("Buzz");
        else
            output.push(i);
    }
    return output;
}