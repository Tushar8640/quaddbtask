import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="shadow bg-danger py-4 ">
      <div className=" container mx-auto">
        <div className="row justify-content-between ">
          <div className="col-3">
            <h2 className="text-white">Your Logo</h2>
          </div>
          <div className="col-9 d-flex">
            <NavLink
              className={(isActive) =>
                "nav-link text-white" + (!isActive ? " unselected" : "")
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={(isActive) =>
                "nav-link text-white" + (!isActive ? " unselected" : "")
              }
              to="/booking
              "
            >
              Your Booking
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
