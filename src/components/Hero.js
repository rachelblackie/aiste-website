import React, { useState } from "react";
import oranges from "../images/oranges.jpeg";
import "../styles/Hero.css";
import CurrentWeather from "./CurrentWeather.js";

function Hero(props) {
  let languageStoredInLocalStorage = localStorage.getItem("language");
  let [language, setLanguage] = useState(
    languageStoredInLocalStorage ? languageStoredInLocalStorage : "English"
  );
  let content = {
    English: {
      title: (
        <div>
          Aiste Fischetti
          <br />
          Real Estate
        </div>
      ),
      subtitle: "Vacation rentals in Valencia",
    },
    Español: {
      title: "Aiste Fischetti Inmobiliaria",
      subtitle: "Alquileres vacacionales en Valencia",
    },
  };
  props.language === "Español"
    ? (content = content.Español)
    : (content = content.English);
  return (
    <div className="row mt-5" id="hero">
      <div>
        <img
          src={oranges}
          className="img-fluid hero-background position-relative"
          alt="ocean background"
        ></img>
      </div>
      <div className="ms-3 hero-text text-center">
        <h1>{content.title}</h1>
        <h3>{content.subtitle}</h3>
        <hr />
        <div className="weather  mx-auto m-2 p-2">
          <CurrentWeather
            language={language}
            handleSetLanguage={(language) => {
              setLanguage(language);
              storeLanguageInLocalStorage(language);
            }}
          />
        </div>
      </div>
    </div>
  );
}
function storeLanguageInLocalStorage(language) {
  localStorage.setItem("language", language);
}
export default Hero;
