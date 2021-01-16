import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

import logo from "../../assets/logo.svg";
import like from "../../assets/like.svg";
import send from "../../assets/send.svg";
import profile from "../../assets/profile.svg";
import explore from "../../assets/explore.svg";

function Header() {
  return (
    <header className="main-header">
      <div className="header-content">
        <Link to="/">
          <img src={logo} alt="instagram" title="instagram" />
        </Link>
        <div className="header-content-input">
          <input type="text" placeholder="Search" />
        </div>
        <div className="header-content-icons">
          <img src={send} title="Send" alt="Send" />
          <img src={explore} title="Explore" alt="Explore" />
          <img src={like} title="Like" alt="Like" />
          <Link to="/new">
            <img src={profile} title="profile" alt="profile" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
