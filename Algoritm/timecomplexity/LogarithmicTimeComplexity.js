// Logarithmic Time Complexity: O(log n) : The time taken grows logarithmically with the size of the input.
// This means if the input size doubles, the time taken increases by a constant amount.

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
            return mid; // Target found at index mid
        } else if (arr[mid] < target) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }
    return -1; // Target not found
}

// Example usage:
const sortedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

console.log("element found at index : "+ binarySearch(sortedNumbers, 5)); // Output: 4 (index of 5) :: O(log n)