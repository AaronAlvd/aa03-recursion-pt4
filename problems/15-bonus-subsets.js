/***********************************************************************
 * BONUS PROBLEM
************************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples: 

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/

const subsets = (arr) => {
  // debugger
    if (arr.length === 0) {
      return [[]];
    }
      let first = arr[0];
      let variable = subsets(arr.slice(1))
      
      return variable.concat(variable.map(el => 
          el.concat(first)
      ))
        
      
      // [[]].concat([arr])
      // }
    //  [[]].concat(arr)
    //  return subsets(arr.slice(1))
    }

// const subsets = (arr) => {
// if () {

// }

// else {
// return subsets(arr)
// }

// }

// let array = [[]];
// for (let el of arr) {
//   array.push([el])
// }
// console.log(array)





// console.log(subsets([])) // [[]]
console.log(subsets([1])) // [[], [1]]
// console.log(subsets([1, 2])) // [[], [1], [2], [1, 2]]
// subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
