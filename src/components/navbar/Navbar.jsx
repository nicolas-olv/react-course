import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/empresa" className="link">
            Empresa
          </Link>
        </li>
        <li>
          <Link to="/contato" className="link">
            Contato
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
