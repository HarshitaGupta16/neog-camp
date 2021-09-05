import "./styles.css";

// document.getElementById("app").innerHTML = ``;

const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const btnRef = document.querySelector("#submit-btn");
const outputBox = document.querySelector("#output-box");

// console.log(initialPrice);

// if (initialPrice === 0) {
//   btnRef.disabled = true;
// }
btnRef.addEventListener("click", submitHandler);

function submitHandler() {
  let ip = initialPrice.value;
  let qty = stocksQuantity.value;
  let curr = currentPrice.value;
  // console.log(initialPrice)

  calculateProitAndLoss(Number(ip), Number(qty), Number(curr));
}

function calculateProitAndLoss(initialP, quantity, currentP) {
  // if () {
  //   alertBox.innerHTML = "!! All fields are mandatory !!";
  // }

  if (initialP > currentP) {
    // Loss
    let lossOnTotalQuantiy = (initialP - currentP) * quantity;
    let lossPercent = ((lossOnTotalQuantiy / initialP) * 100).toFixed(2);
    showOutput(
      `The loss is ${lossOnTotalQuantiy} and loss percentage is ${lossPercent}`
    );
    outputBox.style.display = "block";
    outputBox.style.backgroundColor = "#DC2626";
  } else if (initialP < currentP) {
    // Profit
    let profitOnTotalQuantity = (currentP - initialP) * quantity;
    let profitPercent = ((profitOnTotalQuantity / initialP) * 100).toFixed(2);
    showOutput(`The profit is ${profitOnTotalQuantity} and the profit 
    percentage is ${profitPercent} `);
    outputBox.style.display = "block";
    outputBox.style.backgroundColor = "#65A30D";
  } else {
    // no profit no loss
    if (initialP !== 0 || quantity !== 0 || currentP !== 0) {
      showOutput("No profit no loss!!");
      outputBox.style.display = "block";
      outputBox.style.backgroundColor = "gray";
    }
  }
}

function showOutput(message) {
  outputBox.innerHTML = message;
}
