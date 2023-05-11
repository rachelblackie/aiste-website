import React, { useState } from "react";
import "../styles/Menu.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Menu(props) {
  let [expanded, setExpanded] = useState(false);
  let content = {
    English: {
      linkBuy: "Buy",
      linkSell: "Sell",
      linkRent: "Rent",
      linkInvest: "Invest",
      linkContact: "Contact",
    },
    Español: {
      linkBuy: "Comprar",
      linkSell: "Vender",
      linkRent: "Alquilar",
      linkInvest: "Invertir",
      linkContact: "Contacto",
    },
  };
  props.language === "Español"
    ? (content = content.Español)
    : (content = content.English);
  return (
    <div className="container">
      <Navbar
        bg="dark"
        variant="dark"
        className="fixed-top"
        expand="lg"
        collapseOnSelect
        expanded={expanded}
      >
        <Container>
          <Navbar.Brand href="#" className="navbar-title navbar-left">
            Aiste Fischetti
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => setExpanded(!expanded)}
          />
          <Navbar.Collapse id="responsive-navbar-nav" className="nav-collapse">
            <Nav className="mx-auto Nav">
              <Nav.Link href="#buy-section" onClick={() => setExpanded(false)}>
                {content.linkBuy}
              </Nav.Link>
              <Nav.Link href="#sell-section" onClick={() => setExpanded(false)}>
                {content.linkSell}
              </Nav.Link>
              <Nav.Link href="#rent-section" onClick={() => setExpanded(false)}>
                {content.linkRent}
              </Nav.Link>
              <Nav.Link
                href="#invest-section"
                onClick={() => setExpanded(false)}
              >
                {content.linkInvest}
              </Nav.Link>
            </Nav>
            <Nav className="navbar-right Nav">
              <Nav.Link
                href="#contact-section"
                onClick={() => setExpanded(false)}
              >
                {content.linkContact}
              </Nav.Link>
              <Nav.Link
                href="http://www.instagram.com"
                title="Instagram"
                target="_blank"
                rel="noopener
                noreferrer"
                onClick={() => setExpanded(false)}
              >
                <i className="fa-brands fa-instagram"></i>
              </Nav.Link>{" "}
              <Nav.Link
                href="http://www.facebook.com"
                title="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setExpanded(false)}
              >
                <i className="fa-brands fa-facebook"></i>
              </Nav.Link>{" "}
            </Nav>
            {""}
            <div className="language-select ms-3">
              <span className="me-2 language-icon">
                <i class="fa-solid fa-globe"></i>
              </span>
              <select
                className="custom-select"
                value={props.language}
                onChange={(e) => {
                  props.handleSetLanguage(e.target.value);
                  setExpanded(false);
                }}
              >
                <option value="English">English</option>
                <option value="Español">Español</option>
              </select>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default Menu;
