import React, { useState } from "react";
import "../../styles/header.scss";
import { FiShoppingBag, FiAlignJustify } from "react-icons/fi";
import logo from "../../images/logo.png";

const MainHead = () => {
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <header className="header">
      <nav>
        <div className="hamburger" onClick={handleClick}>
          <FiAlignJustify />
        </div>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className={open ? `nav-items active` : `nav-items`}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/Women">Women</a>
          </li>
          <li>
            <a href="/Men">Men</a>
          </li>
          <li>
            <a href="/SmartGear">Smart Gears</a>
          </li>
          <li>
            <a href="/Accessories">Accessories</a>
          </li>
        </ul>

        <FiShoppingBag className="bagicon" />
      </nav>
    </header>
  );
};

export default MainHead;
