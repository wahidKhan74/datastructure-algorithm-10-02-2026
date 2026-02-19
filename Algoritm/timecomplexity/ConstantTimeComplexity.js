// Constant Time Complexity O(1)
// In constant time complexity, the time taken to execute the algorithm does not depend on the size of the input data. 
// It means that the algorithm will always take the same amount of time to execute, regardless of the size of the input.

function getFirstElement(arr) {
    // This function returns the first element of the array, regardless of the size of the array.
    return arr[0];
}

// Example usage:
const myArray = [10, 20, 30, 40, 50];
console.log(getFirstElement(myArray)); // Output: 10

const numbers2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200];
console.log(getFirstElement(numbers2)); // Output: 10

// In both cases, the function getFirstElement takes the same amount of time to execute, regardless of the size of the input array. 
// Therefore, it has a constant time complexity of O(1).

function isFirstElementEven(arr) {
    return arr[0] % 2 === 0;
}

// Example usage: O(1)
console.log(isFirstElementEven(myArray)); // Output: true
console.log(isFirstElementEven(numbers2)); // Output: true