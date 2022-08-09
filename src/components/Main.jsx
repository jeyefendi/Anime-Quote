import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Main.scss";
import { FaRedo, FaTwitter } from "react-icons/fa";

const Main = () => {
  const [quote, setQuote] = useState({
    anime: null,
    quote: null,
    character: null,
  });

  const fetchQuote = async () => {
    return await axios
      .get("https://animechan.vercel.app/api/random")
      .then((res) => {
        console.log(res);
        setQuote(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const generateQuote = async () => {
    await fetchQuote();
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <main className="main">
      <h2 className="title">ANIME QUOTE</h2>
      <div className="main_container">
        <div className="anime">{quote.anime}</div>
        <div className="quote">{quote.quote}</div>
        <div className="character">{quote.character}</div>
      </div>
      <div className="buttons">
        <button className="btn" onClick={generateQuote}>
          <FaRedo className="icon" />
          Generate New Quote
        </button>
        <a
          href={`https://twitter.com/intent/tweet?text=${quote.quote}`}
          target="blank"
          rel="noopener noreferrer"
          className="btn twiiter"
        >
          <FaTwitter className="icon" />
          Share to Twitter
        </a>
      </div>
    </main>
  );
};

export default Main;
