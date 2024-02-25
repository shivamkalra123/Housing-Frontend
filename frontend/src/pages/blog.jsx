import React, { useEffect } from "react";
import "./blog.css";
import ownerImage from "../assets/images/owner.jpg";
import { Link } from "react-router-dom";
import AOS from "aos";
const blog = () => {
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
      <div className="blogHeading">
        <div className="blogContent" data-aos="fade-in">
          <h1>About The Owner</h1>
          <img src={ownerImage} alt="notFound" />
          <p>
            Tiffany Debro is the founder and owner of Faith to Faith Solutions
            LLC. She have always had a passion for caring for others, that has
            resulted in her having over 14 years of medical experience. Faith to
            Faith Solutions is a God given idea that came to life during a time
            where Tiffany experienced homelessness and hardship herself. It was
            God truly taking her from "Faith to Faith", but out of hardship
            would come a compassion for those who would experience similar
            situations and circumstance. Tiffany have always had a big heart for
            those who tend to be overlooked and forgotten. So providing a safe,
            clean, affordable, shared living environment to those in desperate
            need would only come natural to her.
          </p>
          <div className="contactContainer">
            <Link className="contact" to="/contact">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default blog;
