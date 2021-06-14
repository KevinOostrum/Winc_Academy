const colors = ["yellow", "blue", "red", "orange"];

// Old methods
// while loop: 5 lines
let i = 0;
while (i < colors.length) {
    console.log(colors[i]);
    i++
}

// for loop: 3 lines
for (i = 0; i < colors.length; i++) {
    console.log(colors[i]); 
}

// New method using .forEach: 1 line
colors.forEach(element => console.log(element));

// 1. my while loop takes 5 lines of code and my for loop takes 3 lines.
// 2. .forEach takes up only 1 line of code
// 3. array method cannot get into an infinite loop, you dont have to add ++ to iterations and had better readability

const testObject = { 
    name: "kevin",
    age: 29,
    hair: "yup still there",
    hairColor: "brown"
};

for ( x in testObject) {
  console.log(testObject[x]);
}
