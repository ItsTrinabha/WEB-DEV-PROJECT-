import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Roadmap from './components/Roadmap';
import Quiz from './components/Quiz';
import Footer from './components/Footer';

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  const showSection = (sectionId) => {
    setCurrentSection(sectionId);
    window.scrollTo(0, 0);
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <Home showSection={showSection} />;
      case 'roadmap':
        return <Roadmap showSection={showSection} />;
      case 'quiz':
        return <Quiz showSection={showSection} />;
      default:
        return <Home showSection={showSection} />;
    }
  };

  return (
    <div className="body-main">
      <Header showSection={showSection} />
      <main className="main-content">
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
