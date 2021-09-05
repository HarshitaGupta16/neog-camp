// Function to reverse the string
function reverseStr(str) {
  var listOfChars = str.split("");
  var reverseListOfChars = listOfChars.reverse();
  var reversedStr = reverseListOfChars.join("");
  return reversedStr;
}

// Function to find if string is palindrome or not
function isPalindrome(str) {
  var reverse = reverseStr(str);
  return str === reverse;
}

// Function to convert date from date format to string format
function convertDateToStr(date) {
  var dateStr = { day: "", month: "", year: "" };

  if (date.day < 10) {
    dateStr.day = "0" + date.day;
  } else {
    dateStr.day = date.day.toString();
  }

  if (date.month < 10) {
    dateStr.month = "0" + date.month;
  } else {
    dateStr.month = date.month.toString();
  }

  dateStr.year = date.year.toString();

  return dateStr;
}

// date object
// var date = {
//   day: 15,
//   month: 9,
//   year: 2020
// }

// Generate different formats of date
function getAllDateFormats(date) {
  var dateStr = convertDateToStr(date);

  var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
  var mmddyyy = dateStr.month + dateStr.day + dateStr.year;
  var yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
  var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2);
  var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2);
  var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day;

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
  var day = date.day + 1;
  var month = date.month;
  var year = date.year;

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
    (month = 1), year++;
  }

  return {
    day: day,
    month: month,
    year: year
  };
}

function getPreviousDate(date) {
  var day = date.day - 1;
  var month = date.month;
  var year = date.year;

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
function getNextPalindromeDate(date) {
  var counter = 0;
  var nextDate = getNextDate(date);
  // var prevDate = getPreviousDate(date);

  while (1) {
    counter++;
    var isPalindrome = checkPalindromeForAllDateFormats(nextDate);
    if (isPalindrome) {
      break;
    }
    nextDate = getNextDate(nextDate);
  }

  // while(1) {
  //   var isPalindrome = checkPalindromeForAllDateFormats(prevDate);
  //   if(isPalindrome) {
  //     break;
  //   }
  //   prevDate = getPreviousDate(prevDate);
  // }

  return [counter, nextDate];
}

var bdayInputRef = document.querySelector("#bday-input");
var showBtnRef = document.querySelector("#show-btn");
var resultRef = document.querySelector("#result");

function clickHandler(e) {
  // console.log(document.body.scrollHeight);
  // resultRef.scrollIntoView(false);
  // window.scrollTo(0, document.body.scrollHeight);
  // window.scroll({ top: window.scrollHeight("#main"), behavior: "smooth" });
  // window.scroll({ top: 600, behavior: "smooth" });
  // document.getElementById("result").scrollIntoView();
  // window.scrollBy(0, 200);

  var dateStr = bdayInputRef.value;
  var dateIntoList = dateStr.split("-");
  var date = {
    day: Number(dateIntoList[2]),
    month: Number(dateIntoList[1]),
    year: Number(dateIntoList[0])
  };
  // to show the result box only when button is clicked
  if (resultRef.style.display === "none") {
    resultRef.style.display = "block";
  }
  if (checkPalindromeForAllDateFormats(date)) {
    resultRef.innerText = "Yay! Your birthday is a palindrome!! 🥳🥳";
  } else {
    var [ctr, nextDate] = getNextPalindromeDate(date);
    resultRef.innerText = `Your birthday is not a palindrome. 😔
    The nearest palindrome date is ${nextDate.day}-${nextDate.month}-${nextDate.year}. You missed it by ${ctr} days.`;
  }
  resultRef.scrollIntoView(true);
}

showBtnRef.addEventListener("click", clickHandler);

// console.log(getNextPalindromeDate(date))
// console.log(getPreviousDate(date))
