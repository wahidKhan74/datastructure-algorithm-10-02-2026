let studentNames = ['Alax', 'John', 'Mike', 'William', 'David'];
let studentMarks = [70, 80, 90, 60, 75];

console.log('====================================');
console.log(studentNames);
console.log(studentMarks);
console.log('====================================');

// find first element
console.log("first", studentNames[0]);
console.log("first", studentMarks[0]);

// find last element
console.log("last",  studentNames[studentNames.length-1]);
console.log("last",  studentMarks[studentMarks.length-1]);

// find midd element
console.log("mid", studentNames[(studentNames.length-1)/2]);
console.log("mid", studentMarks[(studentMarks.length-1)/2]);

// length
console.log("length", studentNames.length);
console.log("length", studentMarks.length);


console.log(studentNames[5]); // Array index out of bound // Js : undefined
console.log(studentNames[-5]); // Array index out of bound // Js : undefined

// Arrays method
// add element to the last
studentNames.push("Mohan");
console.log("last",  studentNames[studentNames.length-1]);

// add element to begining 
studentNames.unshift("Marray");
console.log("first",  studentNames[0]);

// remove the last element
studentNames.pop();
console.log("last",  studentNames[studentNames.length-1]);

// remove the first element
studentNames.shift();
console.log("first",  studentNames[0]);

console.log('====================================');
// iterations
// forward traversing
for(let index = 0 ; index < studentNames.length ; index++){
    console.log(studentNames[index]);
}
console.log('====================================');
// forward traversing
for(let revIndex = studentNames.length-1 ; revIndex >= 0 ; revIndex--){
    console.log(studentNames[revIndex]);
}

console.log('====================================');


