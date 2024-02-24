import React from "react";
import "./missions.css";
import { FaHandsHelping, FaCross } from "react-icons/fa";
import { HiBars3 } from "react-icons/hi2";

const Missions = () => {
  return (
    <div className="missionHeadings">
      <div className="allHeadings">
        <div className="background">
          <h1>Our Mission</h1>
          <p>
            Our mission is to provide a safe, clean, affordable, shared,
            independent living environment, to unhoused or displaced adults
            looking for a new start in life. We provide a clean, safe,
            affordable, secure, shared living environment to those in need who
            also meet the criteria.
          </p>
        </div>
        <div className="section">
          <div className="handsHelping">
            <FaHandsHelping className="icon" />
            <h1>Our Target</h1>
            <p>
              Our target population includes, but is not limited to, working
              individuals impacted by the challenges of steady increasing rental
              cost. We also accept individuals who are "compliant" that are
              receiving some form of "case management"; that are in the process
              of regaining their independence. We also accept Military Veterans
              who are able to live independently.
            </p>
          </div>
        </div>
        <div className="section">
          <div className="faith">
            <FaCross className="icon" />
            <h1>Our Faith</h1>
            <p>
              We believe in extending the love of God by providing a "home away
              from home" to individuals who have been caught in life's storms;
              by enabling them to regain a hope that will ultimately cause them
              to thrive and prosper again.
            </p>
          </div>
        </div>
        <div className="section">
          <div className="provides">
            <HiBars3 className="icon" />
            <h1>Our Amenities</h1>
            <ul>
              <li>Fully Furnished Home</li>
              <li>Private and Semi-Private Rooms</li>
              <li>Bed and Bedding</li>
              <li>Welcome Kit</li>
              <li>Utilities: Electric and Water</li>
              <li>Washer and Dryer on site</li>
              <li>Phone</li>
              <li>Smart TV</li>
              <li>Internet Cable</li>
              <li>Wi-Fi</li>
              <li>Security System</li>
              <li>List of local Community Services</li>
              <li>List of Public Transportation options</li>
              <li>Well-manicured Lawn</li>
            </ul>
          </div>
        </div>
        <a href="#">Contact Us</a>
      </div>
    </div>
  );
};

export default Missions;
