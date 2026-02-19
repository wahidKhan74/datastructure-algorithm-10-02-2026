// Binary Search :  Binary Search works only on sorted arrays.
// It repeatedly divides the array in half until the target is found.

//Ex :: find all occurrences of the target in a sorted array
function binarySearchAll(arr, target) {
     let left = 0;  // Starting index
     let right = arr.length - 1;  // Ending index
     let indices = [];

     while (left <= right) {
        const mid = Math.floor((left + right) / 2);  // Calculate the middle index (pivot)
        if (arr[mid] === target) {
           indices.push(mid);  // Target found, add the index to the result array
           // Search for duplicates on the left side
           let temp = mid - 1;
           while (temp >= 0 && arr[temp] === target) {
               indices.push(temp);
               temp--;
           }
           // Search for duplicates on the right side
           temp = mid + 1;
           while (temp < arr.length && arr[temp] === target) {
               indices.push(temp);
               temp++;
           }
           return indices;  // Return all indices where target is found
        } else if (arr[mid] < target) {
            left = mid + 1;  // Search in the right half
        } else {
            right = mid - 1;  // Search in the left half
        }
    }
    return -1;  // Target not found in the array
}


// Example usage:
const sortedArray = [2, 11, 22, 22, 22, 34, 34, 50, 81, 90, 98, 392, 500];
const target = 22;
const result = binarySearchAll(sortedArray, target);

if (result !== -1) {
    console.log(`Target found at indices: ${result}`);
} else {
    console.log('Target not found in the array.');
}
