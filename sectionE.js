// -------------------Section E — Real-World Logic Challenges (15 Marks)------------------------



// Question 19 — Student Result Analyzer (7 Marks)



// var students = ["Ali", "Sara", "Ahmed", "Ayesha", "Hamza"];

// var marks = [78, 92, 45, 88, 33];


// var passed = 0;
// var failed = 0;
// var totalMarks = 0;


// var heighestMarks = marks[0];
// var topStudents = students[0];


// for(var i = 0; i < students.length; i++) {

//     totalMarks = totalMarks + marks [i];


//     if(marks[i] >= 50) {
//         passed++;
//         console.log(students[i] + " - " + marks[i] + " - PASS");
//     }



//      if(marks[i] < 50) {
//         failed++;
//         console.log(students[i] + " - " + marks[i] + " -FAIL");
//      }



//      if(marks[i] > heighestMarks) {
        
//         heighestMarks = marks[i];
//         topStudents = students[i];

//      }

// }




// var average = totalMarks / students.length;


// console.log("Total Students: " + students.length);
// console.log("Passed: " + passed);
// console.log("Failed: " + failed);
// console.log("Top Student: " + topStudents + " (" + heighestMarks + ")");
// console.log("Class Average: " + average);


// -------------------------------------Question 19 Completed--------------------------------------




// Question 20 — Mini Shopping Cart (8 Marks)




// var products = ["Keyboard", "Mouse", "Monitor", "USB", "Headphones"];

// var prices = [2500, 1200, 22000, 800, 3500];


// // Display Products

// alert(
//     "1. Keyboard - Rs. 2500\n" +
//     "2. Mouse - Rs. 1200\n" +
//     "3. Monitor - Rs. 22000\n" +
//     "4. USB - Rs. 800\n" +
//     "5. Headphones - Rs. 3500"
// );


// // Taking Input

// var productNumber = Number(prompt("Enter Product Number:"));
// var quantity = Number(prompt("Enter Quantity:"));

// var isValid = true;


// // Validating Product Number

// if (Number.isInteger(productNumber) === false ||
//     productNumber < 1 ||
//     productNumber > products.length) {

//     alert("Invalid Product Number!");
//     isValid = false;
// }


// // Validating Quantity

// if (Number.isInteger(quantity) === false || quantity <= 0) {

//     alert("Invalid Quantity!");
//     isValid = false;
// }


// // Calculating Bill

// if (isValid === true) {

//     var index = productNumber - 1;

//     var productName = products[index];
//     var unitPrice = prices[index];

//     var subtotal = unitPrice * quantity;

//     var discount = 0;

//     if (subtotal >= 5000) {
//         discount = subtotal * 10 / 100;
//     }

//     var finalBill = subtotal - discount;


//     // Displaying Final Bill

//     console.log("Product: " + productName);
//     console.log("Unit Price: Rs. " + unitPrice);
//     console.log("Quantity: " + quantity);
//     console.log("Subtotal: Rs. " + subtotal);
//     console.log("Discount: Rs. " + discount);
//     console.log("Final Bill: Rs. " + finalBill);
// }


// ------------------------------------Question 20 completed------------------------------