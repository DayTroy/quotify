import React, { useEffect, useState } from "react";
import twitterIcon from '../assets/icons/twitter.svg'
import tumblrIcon from '../assets/icons/tumblr.svg'
import axios from "axios";

const Quotes = () => {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const src = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

    useEffect(() => {
        getQuote()
    }, [])

    const getQuote = () => {
        axios.get(src)
        .then(data => {
            let dataQuotes = data.data.quotes;
            let randomNumber = Math.floor(Math.random() * dataQuotes.length);
            let randomQuote = dataQuotes[randomNumber]
            setQuote(randomQuote.quote)
            setAuthor(randomQuote.author)
        })
        .catch(error => console.log(error))
    }

    const handleClick = () => {
        getQuote()
    } 

    return (
        <div id="quotes-box">
            <div id="text">{quote}</div>
            <div className="author">
                <p>{author}</p>
            </div>
            <div id="buttons">
                <div className="social-media">
                    <a href="#" id="tweet-quote">
                        <span><img src={twitterIcon} alt="twitter" /></span>
                    </a>
                    <a href="#" id="tumblr-quote">
                        <span><img src={tumblrIcon} alt="tumblr" /></span>
                    </a>
                </div>
                <button onClick={handleClick} id="new-quote">New Quote</button>
            </div>
        </div>
    )
}

export default Quotes;