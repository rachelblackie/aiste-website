import React, { useState } from "react";
import "./App.css";
import Menu from "./components/Menu.js";
import Hero from "./components/Hero.js";
import Buy from "./components/Buy.js";
import Sell from "./components/Sell.js";
import Rent from "./components/Rent.js";
import Invest from "./components/Invest.js";
import Contact from "./components/Contact.js";
function App() {
  let languageStoredInLocalStorage = localStorage.getItem("language");
  let [language, setLanguage] = useState(
    languageStoredInLocalStorage ? languageStoredInLocalStorage : "English"
  );
  return (
    <div>
      <Menu
        language={language}
        handleSetLanguage={(language) => {
          setLanguage(language);
          storeLanguageInLocalStorage(language);
        }}
      />
      <Hero
        language={language}
        handleSetLanguage={(language) => {
          setLanguage(language);
          storeLanguageInLocalStorage(language);
        }}
      />
      <Buy
        language={language}
        handleSetLanguage={(language) => {
          setLanguage(language);
          storeLanguageInLocalStorage(language);
        }}
      />
      <Sell
        language={language}
        handleSetLanguage={(language) => {
          setLanguage(language);
          storeLanguageInLocalStorage(language);
        }}
      />
      <Rent
        language={language}
        handleSetLanguage={(language) => {
          setLanguage(language);
          storeLanguageInLocalStorage(language);
        }}
      />
      <Invest
        language={language}
        handleSetLanguage={(language) => {
          setLanguage(language);
          storeLanguageInLocalStorage(language);
        }}
      />
      <Contact
        language={language}
        handleSetLanguage={(language) => {
          setLanguage(language);
          storeLanguageInLocalStorage(language);
        }}
      />
    </div>
  );
}
function storeLanguageInLocalStorage(language) {
  localStorage.setItem("language", language);
}
export default App;
