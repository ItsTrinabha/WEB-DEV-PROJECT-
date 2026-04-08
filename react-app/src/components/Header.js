import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../favicon.png';

function Header() {
  return (
    <header className="header-main">
      <div className="header-brand-wrap">
        <NavLink to="/" className="brand-home-link">
          <div className="header-brand">
            <img src={logo} alt="Mindra logo" className="brand-logo" />
            <div className="header-title">
              <h1 className="title-main">Mindra</h1>
              <p className="subtitle-main">Student Learning Hub</p>
            </div>
          </div>
        </NavLink>

        <nav className="nav-main">
          <NavLink to="/" end className={({ isActive }) => `nav-btn ${isActive ? 'nav-btn-active' : ''}`}>Home</NavLink>
          <NavLink to="/roadmap" className={({ isActive }) => `nav-btn ${isActive ? 'nav-btn-active' : ''}`}>Roadmaps</NavLink>
          <NavLink to="/planner" className={({ isActive }) => `nav-btn ${isActive ? 'nav-btn-active' : ''}`}>Planner</NavLink>
          <NavLink to="/quiz" className={({ isActive }) => `nav-btn ${isActive ? 'nav-btn-active' : ''}`}>Quiz</NavLink>
          <NavLink to="/profile" className={({ isActive }) => `nav-btn ${isActive ? 'nav-btn-active' : ''}`}>Profile</NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav-btn ${isActive ? 'nav-btn-active' : ''}`}>About</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
