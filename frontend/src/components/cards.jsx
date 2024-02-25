import React, { useEffect } from "react";
import "./cards.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import cardImage from "../assets/images/cardImage.jpeg";
import homeLess from "../assets/images/homeLess.avif";
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
          <Card.Img variant="top" src={homeLess} />
          <Card.Body style={{ fontSize: "20px" }}>
            <Card.Text>
              According to a resent study given by world population review there
              are more then a half of million homeless people in America right
              now.
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
          <Card.Img variant="top" src={cardImage} />
          <Card.Body style={{ fontSize: "20px" }}>
            <Card.Text>
              Did you know that the face of homelessness has changed in the last
              recent years? It is not only the individual standing on the side
              of the road with a please help me sign, but a lot of these
              homeless individuals, you work alongside in your 9 to 5 and you
              would never know it.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default cards;
