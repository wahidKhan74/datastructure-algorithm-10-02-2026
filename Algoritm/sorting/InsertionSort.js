// Insertion Sort is a simple sorting algorithm that builds a sorted array one element at a time.
// At each step:
// The left side is sorted,
// The right side is unsorted,
// You pick an element from the unsorted side and insert it into the right position in the sorted side.

function insertionSort(arr) {
    // Get the length of the array
    let n = arr.length;
    // Traverse through 1 to n
    for (let index = 1; index < n; index++) {
        let key = arr[index]; // The current element to be compared
        let sortIndex = index - 1; // The index of the last element in the sorted part
        // Move elements of arr[0..index-1], that are greater than key,
        // to one position ahead of their current position
        while (sortIndex >= 0 && arr[sortIndex] > key) {
            arr[sortIndex + 1] = arr[sortIndex]; // Shift the element to the right
            sortIndex = sortIndex - 1; // Move to the previous element
        }
        arr[sortIndex + 1] = key; // Insert the key in its correct position
    }
    return arr;
}

// Example usage:
let arr = [12, 11, 13, 5, 6];
console.log("Original array: " + arr);
let sortedArray = insertionSort(arr);
console.log("Sorted array: " + sortedArray);