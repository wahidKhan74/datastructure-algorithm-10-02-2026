// Bubble Sort is one of the simplest sorting algorithms.
// It works by repeatedly comparing adjacent elements in an array and swapping them if they are in the wrong order.

function bubbleSort(arr) {
    // Get the length of the array
    let n = arr.length;
    // Outer Loop: Traverse through all elements in the array
    for (let index = 0; index < n - 1; index++) {
        // Inner Loop: Compare adjacent elements and swap if necessary
        for (let sIndex = 0; sIndex < n - index - 1; sIndex++) {
            // If the current element is greater than the next element, swap them
            if (arr[sIndex] > arr[sIndex + 1]) {
                // Swap arr[sIndex] and arr[sIndex + 1]
                let temp = arr[sIndex];
                arr[sIndex] = arr[sIndex + 1];
                arr[sIndex + 1] = temp;
            }
        }
    }
    return arr;
}


// Example usage:
let arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array: " + arr);
let sortedArray = bubbleSort(arr);
console.log("Sorted array: " + sortedArray);