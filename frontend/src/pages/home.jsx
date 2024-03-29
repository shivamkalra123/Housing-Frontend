import React, { useEffect } from "react";

import "./home.css";
import { FaQuoteLeft } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import bannerImage from "../assets/images/banner-image.jpeg";
import {
  FaHandshake,
  FaHome,
  FaShieldAlt,
  FaExchangeAlt,
} from "react-icons/fa";
import Footer from "../components/footer";
import Cards from "../components/cards";
import { Link } from "react-router-dom";
const home = () => {
  const icons = {
    Empower: <FaHandshake />,
    Homes: <FaHome />,
    Sharing: <FaShieldAlt />,
    ReadMore: <FaExchangeAlt />,
  };
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
    <div>
      <div className="banner-image">
        <div className="overlay" data-aos="fade-right">
          <div className="headings">
            <h1 className="banner-head">
              <span>Empowering</span> Lives
            </h1>
            <h1 className="banner-head">
              Sharing <span>Homes</span>
            </h1>
          </div>
        </div>
        <img src={bannerImage} alt="NotFound" />
      </div>

      <div className="subBanner">
        <div className="circles" data-aos="fade-in">
          {icons.Empower}
          <p>Empower</p>
        </div>
        <div className="circles" data-aos="fade-in">
          {icons.Homes}
          <p>Shelter</p>
        </div>
        <div className="circles" data-aos="fade-in">
          {icons.Sharing}
          <p>Support</p>
        </div>
        <div className="circles" data-aos="fade-in">
          {icons.ReadMore}
          <p>Transform</p>
        </div>
      </div>
      <div className="queries">
        <h2>Our Stories</h2>
        <Cards />
        <div className="wholeQuote">
          <div className="quote">
            <i>
              " A house is a home when it shelters the body and comforts the
              soul "
            </i>
          </div>
        </div>
        <div className="queriesHeadings">
          <h1>Have Any Queries?</h1>
          <i>
            Faith to Faith Solutions is committed to providing a home away from
            home through our housing program, aiming to bring positive change to
            individuals' lives. Understanding the various challenges people face
            beyond their control, our Independent Residential Facility (I.R.F.)
            plays a pivotal role. We offer a secure, affordable, and clean
            shared living environment for those in need, meeting specific
            criteria.
          </i>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default home;
