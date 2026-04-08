import React from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Roadmap from './components/Roadmap';
import Quiz from './components/Quiz';
import Footer from './components/Footer';
import StudyPlanner from './components/StudyPlanner';
import Profile from './components/Profile';
import About from './components/About';

function App() {
  const navigate = useNavigate();

  const goToPage = (pageId) => {
    const routeMap = {
      home: '/',
      roadmap: '/roadmap',
      planner: '/planner',
      quiz: '/quiz',
      profile: '/profile',
      about: '/about'
    };

    navigate(routeMap[pageId] || '/');
  };

  return (
    <div className="body-main">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home showSection={goToPage} />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/planner" element={<StudyPlanner />} />
          <Route path="/quiz" element={<Quiz showSection={goToPage} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
