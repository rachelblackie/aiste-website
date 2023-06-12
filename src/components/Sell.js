import React from "react";
import sellPhoto from "../images/sellPhoto.jpg";

function Sell(props) {
  let content = {
    English: {
      title: "Sell",
      learnButton: "Learn more",
    },
    Español: {
      title: "Vender",
      learnButton: "Aprender más",
    },
  };
  props.language === "Español"
    ? (content = content.Español)
    : (content = content.English);
  return (
    <div className="row m-5" id="sell-section">
      <div className="col-lg m-3">
        <img src={sellPhoto} className="img-fluid" alt="real estate"></img>
      </div>
      <div className="col-lg m-3">
        <h1>{content.title}</h1>
        <div className="sell-info">
          <ul>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>
              Pellentesque tempus fermentum felis, vitae elementum turpis
              lacinia non.
            </li>
            <li>
              Etiam sapien ipsum, sagittis ac magna ac, dictum gravida nulla.
            </li>
            <li>
              Morbi dignissim, sapien at imperdiet mattis, orci nulla auctor
              mauris, a suscipit arcu purus at mauris
            </li>
            <li>
              Vivamus eget pellentesque urna. Quisque molestie nec leo aliquet
              sagittis. Donec ultricies dolor eget nisi consequat, nec rutrum
              ligula pretium.
            </li>
          </ul>
          <a href="#sell-section" className="btn btn-dark text-center">
            {content.learnButton}
          </a>
        </div>
      </div>
      <hr />
    </div>
  );
}
export default Sell;
