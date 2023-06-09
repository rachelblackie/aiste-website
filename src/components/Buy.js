import React from "react";
import "../styles/Buy.css";
import Carousel from "react-bootstrap/Carousel";
import exampleApartment from "../images/exampleApartment.jpg";
import exampleHouse from "../images/exampleHouse.jpg";
import exampleBeachHouse from "../images/exampleBeachHouse.jpg";
function Buy(props) {
  let content = {
    English: {
      title: "Buy",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus fermentum felis, vitae elementum turpis lacinia non. Etiam sapien ipsum, sagittis ac magna ac, dictum gravida nulla. Morbi dignissim, sapien at imperdiet mattis, orci nulla auctor mauris, a suscipit arcu purus at mauris. Vivamus eget pellentesque urna. Quisque molestie nec leo aliquet sagittis. Donec ultricies dolor eget nisi consequat, nec rutrum ligula pretium. Duis nec lacus lacus. Maecenas aliquam orci non tortor ornare rhoncus. Maecenas aliquam lectus sit amet mi scelerisque, eu vestibulum justo imperdiet. Etiam non leo a felis lacinia auctor et sed lectus. Morbi hendrerit elit et tincidunt luctus. Vivamus sit amet convallis tellus.",
      available: "Available properties",
      learnButton: "Learn more",
    },
    Español: {
      title: "Comprar",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempus fermentum felis, vitae elementum turpis lacinia non. Etiam sapien ipsum, sagittis ac magna ac, dictum gravida nulla. Morbi dignissim, sapien at imperdiet mattis, orci nulla auctor mauris, a suscipit arcu purus at mauris. Vivamus eget pellentesque urna. Quisque molestie nec leo aliquet sagittis. Donec ultricies dolor eget nisi consequat, nec rutrum ligula pretium. Duis nec lacus lacus. Maecenas aliquam orci non tortor ornare rhoncus. Maecenas aliquam lectus sit amet mi scelerisque, eu vestibulum justo imperdiet. Etiam non leo a felis lacinia auctor et sed lectus. Morbi hendrerit elit et tincidunt luctus. Vivamus sit amet convallis tellus.",
      available: "Propiedades disponibles",
      learnButton: "Aprender más",
    },
  };
  props.language === "Español"
    ? (content = content.Español)
    : (content = content.English);
  return (
    <div id="buy-section">
      <div className="row m-5">
        <div className="col-lg m-3">
          <h1>{content.title}</h1>
          <p>{content.text}</p>
          <a href="#buy-section" className="btn btn-dark text-center">
            {content.learnButton}
          </a>
        </div>
        <div className="col-lg m-3">
          <h2 className="text-center">{content.available}</h2>
          <Carousel className="carousel">
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src={exampleApartment}
                alt="First slide"
              />
              <Carousel.Caption className="carousel-text">
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src={exampleHouse}
                alt="Second slide"
              />

              <Carousel.Caption className="carousel-text">
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-image"
                src={exampleBeachHouse}
                alt="Third slide"
              />

              <Carousel.Caption className="carousel-text">
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
export default Buy;
