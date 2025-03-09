import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = ({ user }) => {
  const [showUserInfo, setShowUserInfo] = useState(false);
  const userinfoRef = useRef(null);

  const toggleUserInfo = () => {
    setShowUserInfo(!showUserInfo);
  };

  const handleClickOutside = (event) => {
    if (userinfoRef.current && !userinfoRef.current.contains(event.target)) {
      setShowUserInfo(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const name = user?.name || "Guest";
  const email = user?.email || "";

  return (
    <header className="header">
      <div className="app-title">Micro-Front End Shell</div>
      <nav>
        <ul className="nav-list">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cro-application"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              CRO
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/air-price-iq"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              AirPrice IQ
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cro-and-air-price-iq"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Both Together
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cro-and-air-price-iq-communicate"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Both Talk
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="user-info" ref={userinfoRef}>
        <span className="user-icon" onClick={toggleUserInfo}>
          👤 {name.charAt(0)}
        </span>
        {showUserInfo && (
          <div className="user-dropdown">
            <p>
              <strong>{name}</strong>
            </p>
            <p>{email}</p>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
