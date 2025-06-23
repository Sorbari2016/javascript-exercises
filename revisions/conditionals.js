// JAVASCRIPT EXERCISE FOR CONDITIONALS

// CODE BLOCKS 

// if statement
// Check for just one condition, only. 
if (typeof "Rachel" === "string") {
    "Rachel is a damsel"; 
}


// If-else statement
// Checks for 2 conditions, the one in the bracket has to be true. 
// If it is not true, we check the else block, it hsa to be false. 
if (1 == 1 && 1 < 5) {
    console.log("1 is the starting point")
} else {
    console.log("1 is really stupid")
}


// if-else-if-else 
// Like the IFS in spreadsheets softwares. 
// Check for multiple statements

const firstName = "Clematins"

if (firstName.includes('C')) {
    console.log("Clematins starts with C")
}else if (firstName.toUpperCase = "Clematins") {
    console.log("C would be irrelevant")
} else { 
    console.log("Clematins isnt such a unique name")
}


// Switch statement 
// Best for checking multiple fixed values. 

switch (firstName) {
    case "Clematins":
        console.log("Clematins isn't such a unique name");
        break;
    case "Cle":
        console.log("Clematins is from the name Matins");
        break;
    default:
        console.log("The name is fake");
}

// Ternary Operator
console.log(number % 2 === 0 ? "Even" : "Odd")

// Ternary ==> 
    // Condition
    // ? if true
    // : else false