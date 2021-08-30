import Quote from "./components/Quote.jsx";
import React, { useState, useEffect } from "react";

function App() {
  const [quote, setQuote] = useState({
    anime: null,
    character: null,
    quote: null,
  });
  console.log(quote);

  const generate = async () => {
    setQuote(await fetchQuote());
  };

  const fetchQuote = async () => {
    return await fetch("https://animechan.vercel.app/api/random").then(
      (response) => response.json()
    );
  };
  useEffect(async () => {
    setQuote(await fetchQuote());
  }, []);
  return (
    <div className="app">
      <Quote quote={quote} />
      <button onClick={generate}>Generate new quote</button>
    </div>
  );
}

export default App;
