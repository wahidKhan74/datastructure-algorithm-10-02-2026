// Linear Time Complexity : O(n) : The time taken grows linearly with the size of the input.
// This means if the input size doubles, the time taken also doubles.
// Example: A function that prints all elements of an array.

function printAll(arr){
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        console.log(element);
    }
}

// Example usage:
let numebrs = [10, 20, 30, 40, 50];
printAll(numebrs); // Output: 10, 20, 30, 40, 50  :: O(n)

let moreNumbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
printAll(moreNumbers); // Output: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 :: O(n)


let cart = ["milk", "bread", "eggs", "butter", "chilli"];

function checkExpiry(cart) {
    for (let index = 0; index < cart.length; index++) {
        const element = cart[index];
        console.log(`Checking expiry for ${element}`);
    }
}

checkExpiry(cart); // Output: Checking expiry for milk, bread, eggs, butter, chilli :: O(n)

// In all the above examples, the time taken to execute the function grows linearly with the size of the input array. 
// Therefore, these functions have a linear time complexity of O(n).