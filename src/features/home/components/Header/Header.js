import React from "react";
import NavBar from "../../../navbar/Navbar";

function Header() {
  return (
    <div className="header">
      <NavBar />

      <section className="container">
        <div className="p-2 ">
          <div className="row flex-column mb-5">
            <div className="col pb-4 pt-5 mt-5">
              <h2 className="ff-g text-dark fs-3 ">
                <i className="text-light">FAST AND RELIABLE MOVING SOLUTIONS</i>
              </h2>
            </div>

            <div className="col pb-4 pt-2 ">
              <h2 className="ff-p text-daerk fs-5 text-light">
                We cater to all of your moving &amp; packaging needs, ensuring a
                commitment <br />
                towards fast, reliable and 100% delivery assurance
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Header;
