// Exponential Time Complexity: O(2^n) : The time taken grows exponentially with the size of the input.
// This means if the input size increases by 1, the time taken doubles.
// Example: A function that generates all fibonacci numbers up to n.
// 1 , 1 , 2, 3, 5, 8 , 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2); // recusrsive call
}


// Example usage:
console.log(fibonacci(10)); // Output: 55 :: O(2^n)
console.log(fibonacci(20)); // Output: 6765 :: O(2^n)
console.log(fibonacci(30)); // Output: 832040 :: O(2^n)