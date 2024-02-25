import React, { useEffect } from "react";
import "./cards.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
const cards = () => {
  useEffect(() => {
    AOS.init({
      // Customize your AOS settings here
      duration: 800,
      offset: 200,
      easing: "ease-in-out",
      delay: 100,
    });
  }, []);
  return (
    <>
      <div className="cardContainer">
        <Card
          data-aos="fade-in"
          data-aos-duration="1000"
          style={{
            width: "20rem",
            backgroundColor: "transparent",
            color: "white",
            border: "solid white 1px",
          }}
        >
          <Card.Img
            variant="top"
            src="https://sc0.blr1.cdn.digitaloceanspaces.com/article/195869-nomryjdgor-1699964440.jpg"
          />
          <Card.Body style={{ fontSize: "20px" }}>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          data-aos="fade-in"
          data-aos-duration="1000"
          style={{
            width: "20rem",
            backgroundColor: "transparent",
            color: "white",
            border: "solid white 1px",
          }}
        >
          <Card.Img
            variant="top"
            src="https://sc0.blr1.cdn.digitaloceanspaces.com/article/195869-nomryjdgor-1699964440.jpg"
          />
          <Card.Body style={{ fontSize: "20px" }}>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          data-aos="fade-in"
          data-aos-duration="1000"
          style={{
            width: "20rem",
            backgroundColor: "transparent",
            color: "white",
            border: "solid white 1px",
          }}
        >
          <Card.Img
            variant="top"
            src="https://sc0.blr1.cdn.digitaloceanspaces.com/article/195869-nomryjdgor-1699964440.jpg"
          />
          <Card.Body style={{ fontSize: "20px" }}>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default cards;
