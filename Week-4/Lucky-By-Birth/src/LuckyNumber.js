import React from "react";
import happy from "/src/happy.svg";
import unhappy from "/src/unhappy.svg";

const LuckyNumber = ({ bDate, luckyNo }) => {
  // let dateInNumber = Date.parse(bDate);
  // const [messageWithImage, setMessageWithImage] = useState(["", ""]);

  const happyImgDiv = (
    <img alt="happy" src={happy} width="100%" height="250px" />
  );
  const unhappyImgDiv = (
    <img alt="unhappy" src={unhappy} width="100%" height="250px" />
  );
  let messageWithImage = {};

  function findSum(bDate) {
    // const bDateArray = bDate.split("-");
    let sum = 0;
    for (let i = 0; i < bDate.length; i++) {
      if (bDate[i] !== "-") {
        sum += Number(bDate[i]);
      } else {
        continue;
      }
    }
    return sum;
    // console.log(sum);
    // if (sum % luckyNo === 0) {
    //   return true;
    // }
    // return false;
  }
  let sum = findSum(bDate);
  // console.log(sum);
  if (sum % luckyNo === 0) {
    // setMessageWithImage(["It is a lucky number", happyImgDiv]);
    messageWithImage = {
      message: "Hurray!! You are a lucky person 😃",
      image: happyImgDiv
    };
  } else {
    messageWithImage = {
      message: "Oops!! You are not lucky 😥",
      image: unhappyImgDiv
    };
  }
  /*const message = isLuckyNumber(bDate, luckyNo)
    ? setMessageWithImage(["It is a lucky number", happy])
    : "It is not a lucky number";*/
  // while(dateInNumber !== 0){
  //   let rem = dateInNumber % 10
  //   sum += rem
  //   dateInNumber /= 10
  // }
  return (
    // {/* <div>{onReceivingMessage(messageWithImage)}</div> */}
    // {/* <div>{messageWithImage}</div>{" "} */}
    <div style={{ backgroundColor: "var(--secondary-color)" }}>
      <div
        style={
          {
            // fontWeight: "bold",
            // display: "block",
            // padding: "1rem 0rem 0.5rem"
          }
        }
      >
        {messageWithImage.message}{" "}
      </div>
      {messageWithImage.image}
    </div>
  );
};

export default LuckyNumber;
