// Selection Sort works by repeatedly finding the smallest element 
// from the unsorted part of the array and putting it in its correct place.
// Find the smallest → Swap → Move forward

function selectionSort(arr) {
    // Get the length of the array
    let n = arr.length;
    // Outer loop: Traverse through all elements in the array
    for (let index = 0; index < n - 1; index++) {
        // Assume the minimum is the first element of the unsorted part
        let minIndex = index;
        // Inner loop: Find the minimum element in the unsorted part
        for (let sIndex = index + 1; sIndex < n; sIndex++) {
            // If the current element is smaller than the minimum, update minIndex
            if (arr[sIndex] < arr[minIndex]) {
                minIndex = sIndex;
            }
        }
        // Swap the found minimum element with the first element of the unsorted part
        let temp = arr[minIndex];
        arr[minIndex] = arr[index];
        arr[index] = temp;
    }
    return arr;
}

// Example usage:
let arr = [64, 25, 12, 22, 11];
console.log("Original array: " + arr);
let sortedArray = selectionSort(arr);
console.log("Sorted array: " + sortedArray);