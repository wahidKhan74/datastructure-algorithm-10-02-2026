// Hash Map : A hash map is a data structure that can map keys to values
// A HashMap stores key–value pairs and uses a hash function to compute an index in an internal array (called buckets). 
// To handle collisions, we usually use chaining (linked lists/arrays at each bucket) or open addressing.

class HashMap {
    constructor(size = 16) {
        this.bucket = new Array(size);  // Create an array of bucket
        this.size = size;  // Size of the bucket of the hash map
    }

    // Hash function to compute the index for a given key
    hash(key) {
        let hashValue = 0;
        for (let char of key) {
            hashValue += char.charCodeAt(0);  // Simple hash function: sum of character codes
        }
        return hashValue % this.size;  // Modulo to fit within bucket size
    }

    // Method to set a key-value pair in the hash map
    set(key, value) {
        const index = this.hash(key);  // Get the index for the key
        if (!this.bucket[index]) {
            this.bucket[index] = [];  // Initialize bucket if it doesn't exist
        }
        // Check if the key already exists and update the value
        for (let i = 0; i < this.bucket[index].length; i++) {
            if (this.bucket[index][i][0] === key) {
                this.bucket[index][i][1] = value;  // Update the value if key exists
                return;
            }
        }
        // If key doesn't exist, add the new key-value pair
        this.bucket[index].push([key, value]);
    }
    
    // Method to get a value for a given key
    get(key) {
        const index = this.hash(key);  // Get the index for the key
        if (this.bucket[index]) {
            for (let i = 0; i < this.bucket[index].length; i++) {
                if (this.bucket[index][i][0] === key) {
                    return this.bucket[index][i][1];  // Return the value if key exists
                }
            }
        }
        return undefined;  // Return undefined if key doesn't exist
    }

    // Method to delete a key-value pair from the hash map
    delete(key) {
        const index = this.hash(key);  // Get the index for the key
        if (this.bucket[index]) {
            for (let i = 0; i < this.bucket[index].length; i++) {
                if (this.bucket[index][i][0] === key) {
                    this.bucket[index].splice(i, 1);  // Remove the key-value pair
                    this.size--;  // Decrease the size of the hash map
                    return true;  // Return true if deletion was successful
                }
            }
        }
        return false;  // Return false if key doesn't exist
    }

    // Method to check if a key exists in the hash map
    has(key) {
        const index = this.hash(key);  // Get the index for the key
        if (this.bucket[index]) {
            for (let i = 0; i < this.bucket[index].length; i++) {
                if (this.bucket[index][i][0] === key) {
                    return true;  // Return true if key exists
                }
            }
        }
        return false;  // Return false if key doesn't exist
    }

    // Method to get the number of key-value pairs in the hash map
    getSize() {
        let count = 0;
        for (let bucket of this.bucket) {
            if (bucket) {
                count += bucket.length;  // Count the number of key-value pairs in each bucket
            }
        } 
        return count;  // Return the total count of key-value pairs
    }

    // Method to clear the hash map
    clear() {
        this.bucket = new Array(this.size);  // Reset the bucket array
        this.size = 0;  // Reset the size of the hash map
    }

    // Method to get all keys in the hash map
    keys() {
        const keysArray = [];
        for (let bucket of this.bucket) {
            if (bucket) {
                for (let pair of bucket) {
                    keysArray.push(pair[0]);  // Add the key to the keys array
                }
            }
        }
        return keysArray;  // Return the array of keys
    }

    // Method to get all values in the hash map
    values() {
        const valuesArray = [];
        for (let bucket of this.bucket) {
            if (bucket) {
                for (let pair of bucket) {
                    valuesArray.push(pair[1]);  // Add the value to the values array
                }
            }
        }
        return valuesArray;  // Return the array of values
    }

    // Method to get all key-value pairs in the hash map
    entries() {
        const entriesArray = [];
        for (let bucket of this.bucket) {
            if (bucket) {
                for (let pair of bucket) {
                    entriesArray.push(pair);  // Add the key-value pair to the entries array
                }
            }
        }
        return entriesArray;  // Return the array of key-value pairs
    }

}

// Example usage:
const hashMap = new HashMap();

// Setting key-value pairs in the hash map
hashMap.set("name", "Alex");
hashMap.set("age", 30);
hashMap.set("place", "New York");
hashMap.set("gender", "Male");

// Getting values from the hash map
console.log(hashMap.get("name"));  // Output: Alex
console.log(hashMap.get("age"));   // Output: 30
console.log(hashMap.get("city"));   // Output: undefined (key doesn't exist)

// Checking if keys exist in the hash map
console.log("Age key exist : " , hashMap.has("age"));
console.log("City key exist : " , hashMap.has("city"));

// Deleting a key-value pair from the hash map
console.log("Delete age key : " , hashMap.delete("age"));  // Output: true
console.log("Delete city key : " , hashMap.delete("city"));  // Output: false (key doesn't exist)

// Getting the size of the hash map
console.log("Size of hash map : " , hashMap.getSize());  // Output: 1 (only "name" key exists)

// Getting all keys in the hash map
console.log("Keys in hash map : " , hashMap.keys());  // Output: [ 'name', 'place', 'gender' ]

// Getting all values in the hash map
console.log("Values in hash map : " , hashMap.values());  // Output: [ 'Alex', 'New York', 'Male' ]

// Getting all key-value pairs in the hash map
console.log("Entries in hash map : " , hashMap.entries());  // Output: [ [ 'name', 'Alex' ], [ 'place', 'New York' ], [ 'gender', 'Male' ] ]

// Clearing the hash map
hashMap.clear();
console.log("Size of hash map after clearing : " , hashMap.getSize());  // Output: 0
