import React from "react";
import investPhoto from "../images/investPhoto.jpg";

function Invest(props) {
  let content = {
    English: {
      title: "Invest",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus fermentum felis, vitae elementum turpis lacinia non. Etiam sapien ipsum, sagittis ac magna ac, dictum gravida nulla. Morbi dignissim, sapien at imperdiet mattis, orci nulla auctor mauris, a suscipit arcu purus at mauris. Vivamus eget pellentesque urna. Quisque molestie nec leo aliquet sagittis. Donec ultricies dolor eget nisi consequat, nec rutrum ligula pretium. Duis nec lacus lacus. Maecenas aliquam orci non tortor ornare rhoncus. Maecenas aliquam lectus sit amet mi scelerisque, eu vestibulum justo imperdiet. Etiam non leo a felis lacinia auctor et sed lectus. Morbi hendrerit elit et tincidunt luctus. Vivamus sit amet convallis tellus.",
      learnButton: "Learn more",
    },
    Español: {
      title: "Invertir",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus fermentum felis, vitae elementum turpis lacinia non. Etiam sapien ipsum, sagittis ac magna ac, dictum gravida nulla. Morbi dignissim, sapien at imperdiet mattis, orci nulla auctor mauris, a suscipit arcu purus at mauris. Vivamus eget pellentesque urna. Quisque molestie nec leo aliquet sagittis. Donec ultricies dolor eget nisi consequat, nec rutrum ligula pretium. Duis nec lacus lacus. Maecenas aliquam orci non tortor ornare rhoncus. Maecenas aliquam lectus sit amet mi scelerisque, eu vestibulum justo imperdiet. Etiam non leo a felis lacinia auctor et sed lectus. Morbi hendrerit elit et tincidunt luctus. Vivamus sit amet convallis tellus.",
      learnButton: "Aprender más",
    },
  };
  props.language === "Español"
    ? (content = content.Español)
    : (content = content.English);
  return (
    <div className="row m-5" id="invest-section">
      <div className="col-lg m-3">
        <img src={investPhoto} className="img-fluid" alt="invest"></img>
      </div>
      <div className="col-lg m-3">
        <h1>{content.title}</h1>
        <p>{content.text}</p>
        <a href="#invest-section" className="btn btn-dark text-center">
          {content.learnButton}
        </a>
      </div>
    </div>
  );
}
export default Invest;
