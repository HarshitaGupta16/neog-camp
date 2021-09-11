// Function to reverse the string
function reverseStr(str) {
  let reversedString = str.split("").reverse().join("");
  // var reverseListOfChars = listOfChars.reverse();
  // var reversedStr = reverseListOfChars.join("");
  return reversedString;
}

// Function to find if string is palindrome or not
function isPalindrome(str) {
  let reversedStr = reverseStr(str);
  return str === reversedStr;
}

// Function to convert date from date format to string format
function convertDateToStr(date) {
  let dateToStringFormat = { day: "", month: "", year: "" };

  if (date.day < 10) {
    dateToStringFormat.day = "0" + date.day;
  } else {
    dateToStringFormat.day = date.day.toString();
  }

  if (date.month < 10) {
    dateToStringFormat.month = "0" + date.month;
  } else {
    dateToStringFormat.month = date.month.toString();
  }

  dateToStringFormat.year = date.year.toString();

  return dateToStringFormat;
}

// date object
// var date = {
//   day: 15,
//   month: 9,
//   year: 2020
// }

// Generate different formats of date
function getAllDateFormats(date) {
  let dateInStringFormat = convertDateToStr(date);

  let ddmmyyyy =
    dateInStringFormat.day + dateInStringFormat.month + dateInStringFormat.year;
  let mmddyyy =
    dateInStringFormat.month + dateInStringFormat.day + dateInStringFormat.year;
  let yyyymmdd =
    dateInStringFormat.year + dateInStringFormat.month + dateInStringFormat.day;
  let ddmmyy =
    dateInStringFormat.day +
    dateInStringFormat.month +
    dateInStringFormat.year.slice(-2);
  let mmddyy =
    dateInStringFormat.month +
    dateInStringFormat.day +
    dateInStringFormat.year.slice(-2);
  let yymmdd =
    dateInStringFormat.year.slice(-2) +
    dateInStringFormat.month +
    dateInStringFormat.day;

  return [ddmmyyyy, mmddyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
}

// check palindrome date for all date formats
function checkPalindromeForAllDateFormats(date) {
  var listOfPalindromes = getAllDateFormats(date);

  var flag = false;
  for (var i = 0; i < listOfPalindromes.length; i++) {
    if (isPalindrome(listOfPalindromes[i])) {
      flag = true;
    }
  }
  return flag;
}

// Check leap year
function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  }
  if (year % 100 === 0) {
    return false;
  }
  if (year % 4 === 0) {
    return true;
  }
  return false;
}

function getNextDate(date) {
  let day = date.day + 1;
  let month = date.month;
  let year = date.year;

  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (month === 2) {
    //check for february
    if (isLeapYear(year)) {
      if (day > 29) {
        day = 1;
        month++;
      }
    } else {
      if (day > 28) {
        day = 1;
        month++;
      }
    }
  } else {
    // check if the day exceeds the maximum day in the month
    if (day > daysInMonth[month - 1]) {
      day = 1;
      month++;
    }
  }

  if (month > 12) {
    month = 1;
    year++;
  }

  return {
    day: day,
    month: month,
    year: year
  };
}

function getPreviousDate(date) {
  let day = date.day - 1;
  let month = date.month;
  let year = date.year;

  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (day === 0) {
    if (month === 3) {
      if (isLeapYear(year)) {
        day = 29;
      } else {
        day = 28;
      }
    } else {
      if (month === 1) {
        day = 31;
      } else {
        day = daysInMonth[month - 2]; //for 1/02/2020, prev day will be 31 for prev month                                    (daysInMonth[2-2] = daysInMonth[0] = 31)
      }
    }
    month--;
  }

  if (month === 0) {
    month = 12;
    year--;
  }

  return {
    day: day,
    month: month,
    year: year
  };
}

// Function to get next palindrome date
function getNearestPalindromeDate(date) {
  let counterN = 0;
  let counterP = 0;
  let nextDate = getNextDate(date);
  let prevDate = getPreviousDate(date);

  while (1) {
    counterN++;
    var isPalindromeForNextDate = checkPalindromeForAllDateFormats(nextDate);
    if (isPalindromeForNextDate) {
      break;
    }
    nextDate = getNextDate(nextDate);
  }

  while (1) {
    counterP++;
    let isPalindromeForPrevDate = checkPalindromeForAllDateFormats(prevDate);
    if (isPalindromeForPrevDate) {
      break;
    }
    prevDate = getPreviousDate(prevDate);
  }

  if (counterN <= counterP) {
    return [counterN, nextDate];
  } else {
    return [counterP, prevDate];
  }
}

const bdayInputRef = document.querySelector("#bday-input");
const showBtnRef = document.querySelector("#show-btn");
const resultRef = document.querySelector("#result");

function clickHandler() {
  const dateStr = bdayInputRef.value;
  const dateIntoArray = dateStr.split("-");
  const date = {
    day: Number(dateIntoArray[2]),
    month: Number(dateIntoArray[1]),
    year: Number(dateIntoArray[0])
  };
  // to show the result box only when button is clicked
  if (resultRef.style.display === "none") {
    resultRef.style.display = "block";
  }
  if (checkPalindromeForAllDateFormats(date)) {
    resultRef.innerText = "Yay! Your birthday is a palindrome!! 🥳🥳";
  } else {
    const [ctr, nextDate] = getNearestPalindromeDate(date);
    resultRef.innerText = `Your birthday is not a palindrome. 😔
    The nearest palindrome date is ${nextDate.day}-${nextDate.month}-${nextDate.year} (dd/mm/yyyy). You missed it by ${ctr} days.`;
  }
  resultRef.scrollIntoView(true);
}

showBtnRef.addEventListener("click", clickHandler);

// console.log(getNextPalindromeDate(date))
// console.log(getPreviousDate(date))
