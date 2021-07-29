import { useState } from "react";
import LuckyNumber from "./LuckyNumber";
import background from "/src/background.svg";
import formBackground from "/src/form-background-img.svg";
import "./styles.css";

export default function App() {
  const [birthday, setBirthday] = useState("");
  const [luckyNumber, setLuckyNumber] = useState(0);
  const [printMessage, setPrintMessage] = useState(false);

  const dateHandler = (event) => {
    setBirthday(event.target.value);
    setPrintMessage(false);
  };

  const luckyNoHandler = (event) => {
    setLuckyNumber(event.target.value);
    setPrintMessage(false);
  };

  const clickHandler = (event) => {
    setPrintMessage(true);
    event.preventDefault();

    return (<LuckyNumber
      bDate={birthday}
      luckyNo={luckyNumber}
      className="output"
    />);
    
  };

  return (
    <div className="App">
      <div
        className="page-background"
        style={{
          backgroundImage: `url(${background})`,
          minHeight: "90vh",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        {/* <img src={background} style={{maxWidth: '1000px'}}/> */}
        <div className="front-page-box">
          <h1>Check your luck here </h1>
          <a href="#form-page">Scroll down to play the game</a>
        </div>
      </div>

      <section id="form-page" className="section">
        {/* <small>🌸</small> Check your luck here <small>🌸</small> */}
        <div
          className="form-bg"
          style={{
            backgroundImage: `url(${formBackground})`,
            minHeight: "65vh",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            backgroundPosition: "top"
          }}
        >
          <form className="birthday-form" onSubmit={clickHandler}>
            <div className="privacy-box">
              <strong>Privacy Notice!</strong> We will not store any of your
              personel information.
            </div>
            <label htmlFor="bday">Enter Your Birthday</label>
            <input
              type="date"
              onChange={dateHandler}
              id="bday"
              // max="31/12/2021"
              // value={birthday}
              required
            />
            <label htmlFor="lucky">Your lucky number</label>
            <input
              type="number"
              onChange={luckyNoHandler}
              id="lucky"
              step="1"
              min="1"
              required
            />
            <button type="submit" style={{ cursor: "pointer" }}>
              Check
            </button>
          </form>
        </div>

        <div className="label">
          {printMessage && (
            <LuckyNumber
              bDate={birthday}
              luckyNo={luckyNumber}
              className="output"
            />
          )}
        </div>

        {/* {msgWithImg} */}
        <footer>
          <div className="footer-header">You can also connect me on:</div>
          <ul className="list-non-bullet">
            <li className="list-item-inline">
              <a href="https://github.com/HarshitaGupta16" target="_blank">
                <i className="fab fa-github" aria-hidden="true">
