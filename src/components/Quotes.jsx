import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import twitterIcon from "../assets/icons/twitter.svg";
import tumblrIcon from "../assets/icons/tumblr.svg";
import colors from "../utils/colors";
import src from "../utils/quotes_db";
import "./Quotes.css"

const Quotes = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [color, setColor] = useState();
  const [isColorChanged, setIsColorChanged] = useState(false);
  const quoteRef = useRef(null);
  const authorRef = useRef(null);

  useEffect(() => {
    getQuote();
  }, []);

  useEffect(() => {
    if (isColorChanged) {
      const timer = setTimeout(() => {
        setIsColorChanged(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isColorChanged]);

  const getQuote = () => {
    axios
      .get(src)
      .then(({ data: { quotes } }) => {
        let randomNumber = Math.floor(Math.random() * quotes.length);
        let randomQuote = quotes[randomNumber];
        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      })
      .catch((error) => console.log(error));
  };

  const handleClick = () => {
    setIsColorChanged(true);
    getQuote();
    const randomColorIndex = Math.floor(Math.random() * colors.length);
    setColor(colors[randomColorIndex]);
    document.body.style.backgroundColor = colors[randomColorIndex];
  };

  return (
    <div id="quotes-box">
      <div
        style={{
          color: color,
          transition: isColorChanged ? "color 0.5s ease" : "none",
        }}
        id="text"
        ref={quoteRef}
      >
        {quote}
      </div>
      <div
        style={{
          color: color,
          transition: isColorChanged ? "color 0.5s ease" : "none",
        }}
        id="author"
        ref={authorRef}
      >
        <p>{author}</p>
      </div>
      <div id="buttons">
        <div className="social-media">
          <a
            href="#"
            id="tweet-quote"
            style={{
              backgroundColor: color,
              transition: isColorChanged
                ? "background-color 0.5s ease"
                : "none",
            }}
          >
            <span>
              <img src={twitterIcon} alt="twitter" />
            </span>
          </a>
          <a
            href="#"
            id="tumblr-quote"
            style={{
              backgroundColor: color,
              transition: isColorChanged
                ? "background-color 0.5s ease"
                : "none",
            }}
          >
            <span>
              <img src={tumblrIcon} alt="tumblr" />
            </span>
          </a>
        </div>
        <button
          style={{
            backgroundColor: color,
            transition: isColorChanged ? "background-color 0.5s ease" : "none",
          }}
          onClick={handleClick}
          id="new-quote"
        >
          New Quote
        </button>
      </div>
    </div>
  );
};

export default Quotes;
