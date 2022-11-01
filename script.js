let equalInput = 0;
//Refer all buttons excluding AC and DEL
let keyInput = document.querySelectorAll(".input-keys");
//Refer input,equal,clear and erase
let input = document.getElementById("input");
let equal = document.getElementById("equals");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");


//Access each class using forEach
keyInput.forEach((button_class) => {
  button_class.addEventListener("click", () => {
    if (equalInput == 1) {
      input.value = "";
      equalInput = 0;
    }
    //display value of each button
    input.value += button_class.value;
  });
});

//Solve the user's input when clicked on equal sign
equal.addEventListener("click", () => {
  equalInput = 1;
  let inp_val = input.value;
  try {
    //evaluate user's input
    let solution = eval(inp_val);
    //True for natural numbers
    //false for decimals
    if (Number.isInteger(solution)) {
      input.value = solution;
    } else {
      input.value = solution.toFixed(2);
    }
  } catch (err) {
    //If user has entered invalid input
    alert("Invalid Input");
  }
});

//Clear Whole Input
clear.addEventListener("click", () => {
  input.value = "";
});
// //Erase Single Digit
erase.addEventListener("click", () => {
  input.value = input.value.substr(0, input.value.length - 1);
});