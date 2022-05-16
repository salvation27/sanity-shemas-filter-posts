import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar_wrap">
          <div className="navbar_logo">
            <span>Logo</span>
            <img
              src="https://st.depositphotos.com/1877361/1877/v/600/depositphotos_18771755-stock-illustration-3d-eye-logo.jpg"
              alt=""
            />
          </div>
          <div className="navbar_menu">
            <ul>
              <li>Home</li>
              <li>About</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
