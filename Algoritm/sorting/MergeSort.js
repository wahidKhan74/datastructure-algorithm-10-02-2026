// Merge Sort is a divide-and-conquer algorithm that splits an array into halves,
//  sorts each half, and then merges them back together.

function mergeSort(arr) {
    // Base case: If the array has 0 or 1 element, it's already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Split the array into halves
    const mid = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, mid);
    const rightHalf = arr.slice(mid);

    // Recursively sort both halves
    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);

    // Merge the sorted halves
    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    // Create an empty array to hold the merged result
    const merged = [];
    // Initialize pointers for left and right arrays
    let leftIndex = 0;
    let rightIndex = 0;

    // Merge the two arrays by comparing elements and adding the smaller one to the merged array
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            merged.push(left[leftIndex]);
            leftIndex++;
        } else {
            merged.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // If there are remaining elements in the left array, add them to merged
    while (leftIndex < left.length) {
        merged.push(left[leftIndex]);
        leftIndex++;
    }
    // If there are remaining elements in the right array, add them to merged
    while (rightIndex < right.length) {
        merged.push(right[rightIndex]);
        rightIndex++;
    }
    return merged;
}

// Example usage:
let arr = [38, 27, 43, 3, 9, 82, 10];
console.log("Original array: " + arr);
let sortedArray = mergeSort(arr);
console.log("Sorted array: " + sortedArray);
