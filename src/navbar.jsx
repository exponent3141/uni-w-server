import React, { useState } from "react";

import "./navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav class="menu-container">
  <input type="checkbox" aria-label="Toggle menu" />
  <span></span>
  <span></span>
  <span></span>

  <a href="/" class="menu-logo">
    <img src="https://cdn.discordapp.com/attachments/981727751998406686/1182446246938554378/logosvg4225-bg1f.svg?ex=6584b9e2&is=657244e2&hm=02a5c563390f9a7fd5b09bcaa4efaf2705b4c2de815f73cb70fa5415b39e3962&" alt="My Awesome Website"/>
  </a>

  <div class="menu">
    <ul>
      <li>
        <a href="/">
          Home
        </a>
      </li>
      <li>
        <a href="/404">
          About
        </a>
      </li>
      <li>
        <a href="/404">
          Apply
        </a>
      </li>
      <li>
        <a href="#login" class="bitchd">
          Login
        </a>
        
      </li>
    </ul>
    
  </div>  
</nav>
  );
};