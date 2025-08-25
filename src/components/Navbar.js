// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <Link to="/" style={{ margin: "0 10px" }}>Plants</Link>
      <Link to="/home" style={{ margin: "0 10px" }}>Home</Link>
      <Link to="/about" style={{ margin: "0 10px" }}>About</Link>
      <Link to="/users" style={{ margin: "0 10px" }}>Users</Link>
    </nav>
  );
}

export default Navbar;
