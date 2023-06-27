import { LOGO_URL } from "../Utils/constants";
<<<<<<< HEAD
import { useState } from "react";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
=======

const Header = () => {
>>>>>>> 32c07c031b0ce970bf449859863c1725d4bfbafe
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
<<<<<<< HEAD
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
=======
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
>>>>>>> 32c07c031b0ce970bf449859863c1725d4bfbafe
        </ul>
      </div>
    </div>
  );
};

export default Header;
