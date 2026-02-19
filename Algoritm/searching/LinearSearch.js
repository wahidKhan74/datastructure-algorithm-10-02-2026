// Linear Search : Simple search algorithm.
// Go through the array one element at a time until you find the target.
// Works on both sorted & unsorted arrays.

function linearSearch(arr, target) {

    // Iterate through the array
    for (let index = 0; index < arr.length; index++) {
        // If the target is found, return the index
        if (arr[index] === target) {
            return index;  // Return the index of the target
        }
    }
    // If the target is not found, return -1
    return -1;
}

// If you want to find all occurrences of the target, you can modify the function to return an array of indices:
function linearSearchAll(arr, target) {
    const indices = [];
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] === target) {
            indices.push(index);  // Add the index to the result array
        }
    }
    return indices;  // Return the array of indices (empty if target not found)
}



// Example usage:
const array = [50, 392, 22, 81, 11, 2, 90, 2, 98, 34, 2];
const target = 32;


// const result = linearSearch(array, target); // first match expected
const result = linearSearchAll(array, target); // all matches expected

if (result.length > 0) {
    console.log(`Target found at indices: ${result}`);
} else {    
    console.log('Target not found in the array.');
}
