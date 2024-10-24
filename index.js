const form = document.querySelector("form");
const sortButton = document.getElementById("sortOne");
const sortAll = document.getElementById("sortAll");

let numbers = [];
let oddNumbers = [];
let evenNumbers = [];

const printNumbers = () => {
  const numberBankOutput = document.querySelector("#numberBank output");
  numberBankOutput.innerText = numbers.join(", ");

  const oddOutput = document.querySelector("#odds output");
  oddOutput.innerText = oddNumbers.join(", ");

  const evenOutput = document.querySelector("#evens output");
  evenOutput.innerText = evenNumbers.join(", ");

  const sortAll = document.querySelector("#sort all");
  sortAll.innerText = sortAll.join(", ");
};

const categorizeNumber = (number) => {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  } else {
    oddNumbers.push(number);
  }
};

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const data = new FormData(event.target);
  const numberInput = data.get("number").trim();

  if (numberInput !== "" && !isNaN(numberInput)) {
    numbers.push(Number(numberInput)); 
    printNumbers();
  } else {
    console.log("Invalid input: Please enter a numeric value.");
  }
  form.reset();
});

sortButton.addEventListener("click", function (event) {
  if (numbers.length > 0) {
    const firstNumber = numbers.shift();
    categorizeNumber(firstNumber);
    printNumbers();
  } else {
    console.log("No numbers to sort.");
  }
});

sortAll.addEventListener("click", function (event) {
  while (numbers.length > 0) {
    const number = numbers.shift();
    categorizeNumber(number);
  }
  printNumbers();
});
