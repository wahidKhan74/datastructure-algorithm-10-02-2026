// Binary Search :  Binary Search works only on sorted arrays.
// It repeatedly divides the array in half until the target is found.

function binarySearch(arr, target) {
    let left = 0;  // Starting index
    let right = arr.length - 1;  // Ending index

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);  // Calculate the middle index (pivot)
        if (arr[mid] === target) {
            return mid;  // Target found, return the index
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
const result = binarySearch(sortedArray, target);

if (result !== -1) {
    console.log(`Target found at index: ${result}`);
} else {
    console.log('Target not found in the array.');
}
