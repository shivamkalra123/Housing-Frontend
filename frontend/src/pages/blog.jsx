import React from "react";
import "./blog.css";
import ownerImage from "../assets/images/owner-removedbg.png";
const blog = () => {
  return (
    <div>
      <div className="blogHeading">
        <div className="blogContent">
          <h1>About Me</h1>
          <img src={ownerImage} alt="notFound" />

          <p>
            Tiffany Debro is the founder and owner of Faith to Faith Family Care
            LLC. She have always had a passion for caring for others, that has
            resulted in her having over 14 years of medical experience. Faith to
            Faith Family Care is a God given idea that came to life during a
            time where Tiffany experienced homelessness and hardship herself. It
            was God truly taking her from "Faith to Faith"; but out of hardship
            would come a compassion for those who would experience similar
            situations and circumstance. Tiffany have always had a big heart for
            those who tend to be overlooked and forgotten. Sobe overlooked and
            forgotten. So providing a safe, clean, affordable, shared living
            environment to those in desperate need would only come natural to
            her.
          </p>
        </div>
      </div>
    </div>
  );
};

export default blog;
