/***********************************************************************
 * BONUS PROBLEM
************************************************************************
Write a recursive function `makeTree(categories, parent)` that takes an array of
categories objects, each of which have an id property, and a parent property and
returns a nested tree of those objects using the parent properties to construct
the tree.

A parent value of null means you are at the bottom of the tree and the category
has no parent, so the default value parent is be null if no parent is
provided.

Example 1:

Given an array of objects with id properties to create our tree:

const categories1 = [
    { id: 'animals', 'parent': null },
    { id: 'mammals', 'parent': 'animals' }
];

const tree1 = makeTree(categories1, null);

We should return a tree like this:

{
  animals: {
    mammals: {}
  }
}

Example 2:
Now imagine we have a database that returns a bunch of rows of data:

const categories2 = [
    { id: 'animals', 'parent': null },
    { id: 'mammals', 'parent': 'animals' },
    { id: 'cats', 'parent': 'mammals' },
    { id: 'dogs', 'parent': 'mammals' },
    { id: 'chihuahua', 'parent': 'dogs' },
    { id: 'labrador', 'parent': 'dogs' },
    { id: 'persian', 'parent': 'cats' },
    { id: 'siamese', 'parent': 'cats' }
];

Then we call the function with the categories:
const tree2 = makeTree(categories2, null);

The call above should return the tree below:

{
    animals: {
        mammals: {
            dogs: {
                chihuahua: {},
                labrador: {}
            },
            cats: {
                persian: {},
                siamese: {}
            }
        }
    }
}

***********************************************************************/

// const makeTree = (categories, parent) => {
// if (categories.length === 0) {
// return parent
// }

// let first = categories[0];
// if (first.parent !== null ) {
// parent[first.parent] = first.id

// } else {
//     parent[categories.id] = {};
// }
// // return makeTree(categories.slice(1), parent)
// console.log(parent)

// }

// { id: 'animals', 'parent': null },
// { id: 'mammals', 'parent': 'animals' },
// { id: 'cats', 'parent': 'mammals' },









const makeTree = (categories, parent) => {
    debugger;
    let obj = {};

// We don't need a base case as .forEach is going to go through the whol array until the end.
categories.forEach((category) => {
    if (category.parent === parent) {
        obj[category.id] = makeTree(categories, category.id)
    }
});     
        return obj
    }


const categories1 = [
    { id: 'animals', 'parent': null },
    { id: 'mammals', 'parent': 'animals' }
];

const tree1 = makeTree(categories1, null);

// We should return a tree like this:

// {
//   animals: {
//     mammals: {}
//   }
// }

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = makeTree;

// This problem was inspired by a Fun Fun Function video:
// https://www.youtube.com/watch?v=k7-N8R0-KY4
