function hasTargetSum(array, target) {
  // // Write your algorithm here
      if (target === handleArr) {
        return true 
      } else {

        console.log(target)
        console.log(handleArr)
        return false
      }

}


function handleArr(array) {
  for (i = 0; 1 < array.length; i++ ) {

    if (target === array[0] + array[i+1]) {
      console.log(array[0])
      console.log(array[i+1])
      console.log((array[0] + array[i+1]))
      console.log(target)
      
    }

    return array[0] + array[i+1]

  }


}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  write a function takes and  array of numbers
  take the numbers pairing each until they add up to the target number 
  if there is a match return true 
  if there is not a match return false

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
