// Jump Search Works on a sorted array (like Binary Search).
// Instead of checking one by one (Linear Search), it jumps ahead in fixed steps.
// When it overshoots, it does a linear search backward in that block.

function jumpSearch(arr, target) {
    const n = arr.length; // n=10
    const step = Math.floor(Math.sqrt(n)); // step=3
    let prev = 0;

    // step 1: Jump ahead in blocks of size 'step'  // arr[Math.min(step, n) - 1] = arr[2] = 2
    while (arr[Math.min(step, n) - 1] < target) {   // 2 < 5
        prev = step; //  prev=3
        if (prev >= n) { // 3 >= 10
            return -1; // Target not found
        }
        step += Math.floor(Math.sqrt(n)); // step=6
    }

    // step2 : Linear search in identified block
    for (let i = prev; i < Math.min(step, n); i++) {  // i=3 to prev=6
        if (arr[i] === target) {
            return i; // Target found, return the index
        }
    }
    return -1; // Target not found in the array
}

// Example usage:
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 5;
const result = jumpSearch(arr, target);
console.log(result); // Output: 5 (index of the target)