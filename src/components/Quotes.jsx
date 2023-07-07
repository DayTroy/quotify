import React from "react";
import twitterIcon from '../assets/icons/twitter.svg'
import tumblrIcon from '../assets/icons/tumblr.svg'

const Quotes = () => {
    return (
        <div id="quotes-box">
            <div id="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eum quod commodi numquam</div>
            <div className="author">
                <p>John Doe</p>
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
                <button id="new-quote">New Quote</button>
            </div>
        </div>
    )
}

export default Quotes;