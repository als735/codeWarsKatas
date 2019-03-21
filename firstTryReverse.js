// My first attempt 
// function firstReverseTry(arr) {
 // var newArr = []; 
  //newArr.pop(arr[]);
 // newArr.slice(1,6);
 // newArr.shift(arr); 
// }
// return newArr; 

// firstReverseTry([1, 2, 3, 4, 5]);  

//my second attempt 
// function firstReverseTry(arr) {
  
  // var newArr = []; 
  
  // newArr.pop(arr);
  // newArr.slice(1, arr.length);
  // newArr.shift(arr); 
  
  // return newArr; 
// }

// Dan's answer with explanation 
function firstReverseTry(arr) {
    //if the array is empty, then just return the array 
    if(arr.length === 0){
      return arr
    }
    //LOGICALLY thinking through the steps of the problem! 
    // FInd the values      ([]) 
    //find the first element in the array       ([]) - we know its zero 
    const first = arr[0]; 
    // we know the last element will be      ([].array.length - 1) 
    const lastIndex=arr.length-1; 
    const last = arr[lastIndex]; 
    
    //Swap the values 
    //set the first item in the array to the last 
    arr[0] = last; 
    //set the last item in the array to the first 
    arr[lastIndex] = first; 
    //return the array 
    } 
    return arr; 
    
    
    // ANSWER
    function firstReverseTry(arr) {
      if(arr.length === 0){
        return arr
      }
        const first = arr[0];
        const lastIndex=arr.length-1; 
        const last = arr[lastIndex];
        
        arr[0] = last; 
        arr[lastIndex] = first; 
        return arr; 
      }
    
    
    //Josh's answer// 
    function firstReverseTry(arr) {
      return arr.length > 1 ? shiftFirstandLast(arr)  : arr
     }
     
     const shiftFirstandLast = (arr) => {
      const last = arr.shift();
      return [arr.pop(), ...arr, last];
     }
    
     