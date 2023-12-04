import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [quote, setQoute] = useState("");

  async function getQuote() {
    const res = await fetch("https://dummyjson.com/quotes/random");
    const data = await res.json();
    setQoute(`${data.quote} - ${data.author}`);
  }

  useEffect(function () {
    getQuote();
  }, []);
  return (
    <div className="App">
      <h1>{quote}</h1>
      <button onClick={getQuote}>Generate</button>
    </div>
  );
}
