// Quick Sort is another Divide and Conquer algorithm.
// It picks an element as a pivot and partitions the array around the pivot.
// Elements smaller than pivot (left side),
// Elements greater than pivot (right side).
// Then it recursively sorts the sub-arrays left and right of the pivot.

function quickSort(arr) {
    // Base case: If the array has 0 or 1 element, it's already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Choose the last element as the pivot
    const pivot = arr[arr.length - 1];
    
    // Partition the array into three parts: less than, equal to, and greater than the pivot
    const lessThanPivot = [];
    const equalToPivot = [];
    const greaterThanPivot = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            lessThanPivot.push(arr[i]);
        } else if (arr[i] === pivot) {
            equalToPivot.push(arr[i]);
        } else {
            greaterThanPivot.push(arr[i]);
        }
    }

    // Recursively sort the less than and greater than partitions and concatenate the results
    return [...quickSort(lessThanPivot), ...equalToPivot, ...quickSort(greaterThanPivot)];
}

// Example usage:
let arr = [10, 7, 8, 9, 1, 5];
console.log("Original array: " + arr);

let sortedArray = quickSort(arr);
console.log("Sorted array: " + sortedArray);
