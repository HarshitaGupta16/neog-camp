// This code is to get the count like count of likes on social media.

import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [likeCounter, setLikeCounter] = useState(0);

  function likeClickHandler() {
    var newLikeCounter = likeCounter + 1;
    setLikeCounter(newLikeCounter); // set the like counter value as the new value
    console.log("clicked!!");
    console.log("count is " + likeCounter);
  }
  return (
    // JSX is this html thing,
    // we can put JS inside this JSX
    <div className="App">
      <h1> Emoji Interpreter</h1>
      <button onClick={likeClickHandler}>Like Me! </button> {likeCounter}
    </div>
  );
}

/**
 *  things to notice
 *  in react we use className instead of class
 * class --> className
 * beacause class is a reserved keyword in JS
 * style --> JSX takes style as an object instead of string
 */
