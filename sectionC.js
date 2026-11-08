// ---------------------Section C — Flags, Searching & Filtering (20 Marks)---------------------------




// Question 11 — Student Name Search (5 Marks)


// var students = ["Ali", "Ahmed", "Sara", "Hamza", "Ayesha"];

// var userName = prompt("Eneter Your Name");

// var isMatsch = false;


// for (var i = 0; i < students.length; i++) {

//     if(students[i] === userName) {
//         isMatsch = true;
//         alert("Student Found!")

//         break
//     }
// }

// console.log(isMatsch)

// if(isMatsch == false) {
//     alert("Student Not Found")
// }


// ----------------------------------------Question 11 Completed-------------------------------


// Question 12 — Find a Number (5 Marks)

// var numbers = [10, 25, 40, 55, 70, 85, 100];

// var userNumber = +prompt("Enter Number:");

// var foundIndex = -1;

// for (var i = 0; i < numbers.length; i++) {

//     if (numbers[i] === userNumber) {
//         foundIndex = i;
//         break;
//     }
// }

// console.log("Enter Number", userNumber)

// if (foundIndex >= 0) {
//     console.log("Number found at index " + foundIndex + ".");
// }

// if (foundIndex == -1) {
//     console.log("Number not found");
// }



// -----------------------------------Question 11 Completed---------------------------------


// Question 13 — Filter Numbers (5 Marks)


// var numbers = [12, -5, 0, 18, -9, 25, 0, -3, 40];

// var positive = [];
// var negative = [];
// var zeroes = [];


// for(i = 0; i < numbers.length; i++) {

//     if(numbers[i] > 0) {
//         positive.push(numbers[i]);
//     }

      
//     if(numbers[i] < 0) {
//         negative.push(numbers[i])
//     }


//      if(numbers[i] === 0) {
//         zeroes.push(numbers[i])
//     }

// }

// console.log("Positve: " + positive);
// console.log("Negative: " + negative);
// console.log("zeroes: " + zeroes);


// -------------------------------------Question 13 Completed---------------------------------------



// Question 14 — Remove Duplicate Numbers (5 Marks)


// var numbers = [10, 20, 10, 30, 20, 40, 30, 50];

// var arr = [];

// var isDuplicate = false;

// for (var i = 0; i < numbers.length; i++) {

//     isDuplicate = false;

//     for (var j = 0; j < arr.length; j++) {

//         if (numbers[i] === arr[j]) {

//             isDuplicate = true;

//             break;
//         }
//     }

//     if (isDuplicate === false) {

//         arr.push(numbers[i]);
//     }
// }

// console.log("Unique Numbers", arr);