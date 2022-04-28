import { useEffect, useState } from "react";
import "./App.css";
import icon_dice from "./images/icon-dice.svg";
import pattern_desk from "./images/pattern-divider-desktop.svg";
import pattern_mobile from "./images/pattern-divider-mobile.svg";
function App() {
  const [quote, setQuote] = useState({});
  const [active, setActive] = useState(1);
  useEffect(() => {
    const fetchAPI = async () => {
      const resp = await fetch(`https://api.adviceslip.com/advice/${active}`);
      const data = await resp.json();
      setQuote(data.slip);
    };
    fetchAPI();
    return function () {
      setQuote({});
    };
  }, [active]);
  const reset = () => {
    setActive(active + 1);
  };
  return (
    <div className="App">
      <div className="container">
        <div className="content">
          <p className="title">
            <span className="advice-text">ADVICE</span> #{quote.id}
          </p>
          <h3 className="quote-text">"{quote.advice}"</h3>

          <img src={pattern_desk} alt="pattern-desk" className="pattern_desk" />
          <img
            src={pattern_mobile}
            alt="pattern-mobile"
            className="pattern_mobile"
          />
          <div className="footer">
            <button className="btn-api" onClick={reset}>
              <img src={icon_dice} alt="icon_dice" />
            </button>
          </div>
        </div>
      </div>
      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/Andrian-W">Andrian-W</a>
      </div>
    </div>
  );
}

export default App;
