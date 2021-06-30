import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🙂": "slightly smiling face",
  "😀": "grinning face",
  "😃": "grinning face with big eyes",
  "😄": "grinning face with smiling eyes",
  "😘": "face throwing a kiss",
  "🤫": "shushing face",
  "🤐": "zipper-mouth face",
  "😅": "grinning face with sweat",
  "🤣": "rolling on the floor laughing",
  "😂": "face with Tears of Joy",
  "😋": "Face Savoring Food",
  "❤️": "love",
  "🙏": "folded hands",
  "🙌": "celebratory (two raised hands)",
  "💯": "achievement, support",
  "☺️": "smiling",
  "😕": "confused",
  "😈": "devilish behavior"
};

const popularEmojiDictionary = {
  "😃": "grinning face with big eyes",
  "😄": "grinning face with smiling eyes",
  "😘": "face throwing a kiss",
  "😂": "face with tears of joy",
  "😍": "smiling face with heart-eyes",
  "😋": "hungry",
  "❤️": "love",
  "🙏": "folded hands",
  "😢": "cry"
};

var emojiWeKnow = Object.keys(popularEmojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function inputChangeHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "we don't have this emoji in our database!!";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = popularEmojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 className="text-style"> Emoji Interpreter</h1>
      <div>
        <img
          style={{
            maxWidth: "150px",
            paddingBottom: "3rem"
            // marginLeft: "-50%"
          }}
          src="https://cliparting.com/wp-content/uploads/2018/03/animated-emoticons-2018-35.gif"
          alt="emoji-see-below"
        />
      </div>
      <h3 className="text-style-left">Search your emoji here</h3>
      <input onChange={inputChangeHandler} />
      <h3 className="text-style">Some Popular Emojies</h3>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            key={emoji}
            className="emoji-styling"
          >
            {emoji}
          </span>
        );
      })}
      <div className="meaning">{meaning}</div>
      <img
        className="img-style"
        src="https://i.pinimg.com/originals/0d/cd/6f/0dcd6f4e410a34465a2d611913199e50.gif"
        alt="emoji-dance"
      />
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
