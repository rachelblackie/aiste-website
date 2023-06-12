import React from "react";
import "../styles/Rent.css";
import Carousel from "react-bootstrap/Carousel";

import Form from "react-bootstrap/Form";
import exampleApartment from "../images/exampleApartment.jpg";
import exampleHouse from "../images/exampleHouse.jpg";
import exampleBeachHouse from "../images/exampleBeachHouse.jpg";

function Rent(props) {
  let content = {
    English: {
      title: "Rent",
      accommodation: "Type of Accommodation",
      typeOne: "House",
      typeTwo: "Apartment",
      typeThree: "Room",
      guests: "Number of Guests",
      dates: "Dates",
      checkButton: "Check Availability",
    },
    Español: {
      title: "Alquilar",
      accommodation: "Tipo de Alojamiento",
      typeOne: "Casa",
      typeTwo: "Piso",
      typeThree: "Habitación",
      guests: "Número de huéspedes",
      dates: "Fechas",
      checkButton: "Consultar Disponibilidad",
    },
  };
  props.language === "Español"
    ? (content = content.Español)
    : (content = content.English);

  return (
    <div className="row m-5" id="rent-section">
      <div className="col-lg m-3">
        <h1>{content.title}</h1>
        <div className="rent-form me-3">
          <Form>
            <Form.Select className="m-4 form">
              <option>{content.accommodation}</option>
              <option value="1">{content.typeOne}</option>
              <option value="2">{content.typeTwo}</option>
              <option value="3">{content.typeThree}</option>
            </Form.Select>

            <Form.Group className="m-4 form">
              <Form.Control type="number" placeholder={content.guests} />
            </Form.Group>
            <Form.Group className="m-4 form">
              <Form.Control
                type="date"
                label="hello world"
                placeholder={content.dates}
              />
            </Form.Group>
          </Form>

          <a href="#rent-section" className="btn btn-dark text-center m-4">
            {content.checkButton}
          </a>
        </div>
      </div>

      <div className="col-lg m-3">
        <Carousel className="carousel">
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src={exampleApartment}
              alt="First slide"
            />
            <Carousel.Caption className="carousel-text">
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <hr />
    </div>
  );
}
export default Rent;
