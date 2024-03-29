import React from "react";
import { MDBFooter, MDBContainer, MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import { Link } from "react-router-dom"; // Import Link from React Router
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function App() {
  return (
    <MDBFooter className="bg-dark text-center text-white">
      <MDBContainer className="p-4 pb-0">
        <section className="mb-4">
          {/* Use Link instead of a regular anchor tag */}
          <Link to="https://www.facebook.com/profile.php?id=61556736535454&mibextid=kFxxJD">
            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              role="button"
            >
              <MDBIcon fab icon="facebook-f" />
            </MDBBtn>
          </Link>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2024 Copyright:
        <p>Faith To Faith Solutions LLC</p>
      </div>
    </MDBFooter>
  );
}
