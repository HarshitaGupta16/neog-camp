import "./styles.css";

const initialStockPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stocks-quantity");
const currentStockPrice = document.querySelector("#current-price");
const btnRef = document.querySelector("#submit-btn");
const outputResult = document.querySelector("#output-result");

// if (initialPrice === 0) {
//   btnRef.disabled = true;
// }

if (initialStockPrice === 0) {
  btnRef.disabled = true;
}
btnRef.addEventListener("submit", submitHandler);

function submitHandler(event) {
  event.preventDefault();
  let iniPrice = initialStockPrice.value;
  let qty = stocksQuantity.value;
  let currPrice = currentStockPrice.value;
  // console.log(initialPrice)
  calculateProitAndLoss(Number(iniPrice), Number(qty), Number(currPrice));
}

function calculateProitAndLoss(initialPrice, quantity, currentPrice) {
  // if () {
  //   alertBox.innerHTML = "!! All fields are mandatory !!";
  // }
  if (initialPrice !== 0 && quantity !== 0 && currentPrice !== 0) {
    if (initialPrice > currentPrice) {
      // Loss
      let lossOnTotalQuantiy = (initialPrice - currentPrice) * quantity;
      let lossPercent = ((lossOnTotalQuantiy / initialPrice) * 100).toFixed(2);
      outputMessageDisplay(
        `The loss is ${lossOnTotalQuantiy} and loss percentage is ${lossPercent}`
      );
      outputResult.style.display = "block";
      outputResult.style.backgroundColor = "#DC2626";
    } else if (initialPrice < currentPrice) {
      // Profit
      let profitOnTotalQuantity = (currentPrice - initialPrice) * quantity;
      let profitPercent = (
        (profitOnTotalQuantity / initialPrice) *
        100
      ).toFixed(2);
      outputMessageDisplay(`The profit is ${profitOnTotalQuantity} and the profit 
    percentage is ${profitPercent} `);
      outputResult.style.display = "block";
      outputResult.style.backgroundColor = "#65A30D";
    } else {
      // no profit no loss

      outputMessageDisplay("No profit no loss!!");
      outputResult.style.display = "block";
      outputResult.style.backgroundColor = "gray";
    }
  }
}

function outputMessageDisplay(msg) {
  outputResult.innerHTML = msg;
}
