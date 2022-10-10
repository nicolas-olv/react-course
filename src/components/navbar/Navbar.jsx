import React from "react";
import { Link } from "react-router-dom";
import { FaBlackTie, FaHome, FaScroll } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <FaHome className="icon" />
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <FaBlackTie className="icon" />
          <Link to="/empresa" className="link">
            Empresa
          </Link>
        </li>
        <li>
          <FaScroll className="icon" />
          <Link to="/contato" className="link">
            Contato
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
