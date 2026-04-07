import React from 'react';

function Header({ showSection }) {
  return (
    <header className="header-main">
      <div className="header-title">
        <h1 className="title-main">🚀 My Learning Project</h1>
        <p className="subtitle-main">Roadmap Generator + Cool Quiz Arena!</p>
      </div>
      
      <nav className="nav-main">
        <button className="nav-btn" onClick={() => showSection('home')}>🏠 Home</button>
        <button className="nav-btn" onClick={() => showSection('roadmap')}>🗺️ Roadmap</button>
        <button className="nav-btn" onClick={() => showSection('quiz')}>🧠 Quiz Arena</button>
      </nav>
    </header>
  );
}

export default Header;
