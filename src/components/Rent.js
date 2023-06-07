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
      guests: "Number of Guests",
      dates: "Dates",
      checkButton: "Check Availability",
    },
    Español: {
      title: "Alquilar",
      accommodation: "Tipo de Alojamiento",
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
            <Form.Select className="m-4">
              <option>{content.accommodation}</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <Form.Select className="m-4">
              <option>{content.guests}</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <Form.Select className="m-4">
              <option>{content.dates}</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <Form.Group className="m-4">
              <Form.Label>Dates</Form.Label>
              <Form.Control type="date" name="date" placeholder="Select Date" />
            </Form.Group>
          </Form>
          <a href="#" className="btn btn-dark text-center m-4">
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
    </div>
  );
}
export default Rent;
