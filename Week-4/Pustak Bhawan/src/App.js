import { useState } from "react";
import React from "react";
import "./styles.css";

export default function App() {
  let [bookList, setBookList] = useState([]);

  const mytholoyDictionary = [
    { name: "Shri Ram charitmanas", author: "Tulsidas" },
    { name: "Mahabharat", author: "Ved Vyas" },
    {
      name: "Bhagwat Geeta: Yatharoop",
      author: "A.C. Bhaktivendanta Swami Prabhupada"
    },
    {
      name: "Guru Granth Sahib: The Literary Persepective",
      author: "Mohinder Kaur Gill"
    },
    { name: "The Holi Bible", author: "King James Version" }
  ];

  const historyDictionary = [
    {
      name: "Indians: A Breif History of Civilization ",
      author: "Namit Arora "
    },
    { name: "History of Modern India", author: "Bipin Chandra" },
    { name: "India's Ancient Past", author: "RS Sharma" },
    { name: "History of Medieval India", author: "Satish Chandra" },
    {
      name: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari"
    }
  ];

  const technologyDictionary = [
    {
      name: "Eloquent JavaScript: A Modern Introduction to Programming",
      author: "Marijn Haverbeke"
    },
    {
      name: "Java - The Complete Reference",
      author: "Herbert Schildt"
    },
    {
      name: "Python Programming: Using Problem Solving Approach",
      author: "Reema Thareja"
    }
  ];

  const fictionDictionary = [
    {
      name: "1000 KMs to Leadership",
      author: "Mohit Chobey"
    },
    { name: "The Krishna Key", author: "Ashwin Sanghi " },
    { name: "Black Holes: The Reith Lectures", author: "Stephen Hawking" }
  ];

  const nonFictionDictionary = [
    {
      name: "Poetics",
      author: "Aristotle"
    },
    {
      name: "The Politics",
      author: "Aristotle"
    },
    {
      name: "The Theory of Everything: The Origin and Fate of the Universe",
      author: "Stephen Hawking"
    }
  ];

  const romanceDictionary = [
    {
      name: "Love Seeks You and Sets You Free",
      author: "Deepika Gupta"
    },
    {
      name: "All the Light we Cannot See",
      author: "Anthony Doerr"
    },
    {
      name: "It Ends With Us: A Novel",
      author: " Colleen Hoover"
    }
  ];

  const kidsDictionary = [
    {
      name: "The Kid Who Came From Space",
      author: "Ross Welford"
    },
    {
      name:
        "Animals Tales From Panchtantra: Timeless Stories for Children From Ancient India",
      author: "Wonder House Books"
    },
    {
      name: "Grandma's Bag of Stories",
      author: "Sudha Murthy"
    },
    {
      name: "Early Learning Library",
      author: "Wonder House Books"
    }
  ];

  function showMytholoyList() {
    mytholoyDictionary.map((bookDetails) => {
      return (
        <div>
          {/* <h2>{console.log("hi")}</h2> */}
          <h3>{bookDetails.name}</h3>
          <h3>{bookDetails.author}</h3>
        </div>
      );
      // console.log(mytholoyList);
      // return setMythologyList(item);
    });
  }

  function clickHandler() {
    return (
      <ul className="list-non-bullet">
        <li className="list-item-inline">Javascript</li>
        <li className="list-item-inline">Python</li>
        <li className="list-item-inline">Java</li>
      </ul>
    );
  }

  return (
    <div className="App">
      <h1>Pustak Bhawan</h1>
      <h3>Are you a book lover??</h3>
      <div className="text-padding">
        <strong>Then you are at the right place!!</strong>
      </div>

      <button
        onClick={() => {
          setBookList(mytholoyDictionary);
        }}
        // key={book}
        className="list-item-inline"
      >
        Mythology
      </button>

      <button
        onClick={() => {
          setBookList(historyDictionary);
        }}
        className="list-item-inline"
      >
        History
      </button>

      {/* <button
        onClick={() => {
          return (
            <ul className="list-non-bullet">
              <li className="list-item-inline">Javascript</li>
              <li className="list-item-inline">Python</li>
              <li className="list-item-inline">Java</li>
            </ul>
          );
        }}
        className="list-item-inline"
      >
        Technology
      </button> */}
      <button
        onClick={() => {
          setBookList(technologyDictionary);
        }}
        className="list-item-inline"
      >
        Technology
      </button>

      <button
        onClick={() => {
          setBookList(fictionDictionary);
        }}
        className="list-item-inline"
      >
        Fiction
      </button>
      <button
        onClick={() => {
          setBookList(nonFictionDictionary);
        }}
        className="list-item-inline"
      >
        Non-Fiction
      </button>
      <button
        onClick={() => {
          setBookList(romanceDictionary);
        }}
        className="list-item-inline"
      >
        Romance
      </button>

      <button
        onClick={() => {
          setBookList(kidsDictionary);
        }}
        className="list-item-inline"
      >
        Kids
      </button>

      <div>
        <img
          className="img-styling"
          // src="https://pngimage.net/wp-content/uploads/2018/06/horizontal-vine-png.png"
          // src="https://i2.wp.com/img2.pngio.com/hanging-flowers-png-picture-1926139-hanging-flowers-png-hanging-flower-png-1638_1024.png"
          src="https://thumbs.dreamstime.com/b/horizontal-seamless-background-roses-28038782.jpg"
          alt="flower vine"
        />
      </div>
      <ul className="list-non-bullet list-side-align">
        {bookList.map((book) => {
          return (
            <li className="container">
              {book.name} <br />
              <small> By {book.author}</small>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
