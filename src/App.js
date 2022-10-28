import React, { useState } from "react";
import { useEffect } from "react";
import "./Style.css";

function App() {
  const [quotes, setQuotes] = useState("");

  const [data, setData] = useState([
    {
      quote: "salom dunyo!",
      author: "men",
    },
  ]);

  const getQuote = () => {
    const [quote, setQuotes] = () => {
      let randomQuote = Math.floor(Math.random() * data.length);
      setQuotes(data[randomQuote]);
    };

    useEffect(() => {
      getQuote();
    }, []);
  };

  return (
    <>

    {/* <div className="app">
        <div className="quote">
            <p>{quotes.quote}</p>
        </div>
    </div> */}

      {data.map((item) => (
        <>
          <p>{item.quote}</p>
          <button type="button">
            Generate quotes
          </button>
        </>
      ))}
    </>
  );
}

export default App;
