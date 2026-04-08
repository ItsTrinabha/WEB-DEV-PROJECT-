import React from 'react';
import heroSectionImage from '../hero-section.png';

function Home({ showSection }) {
  return (
    <section className="animate-bounce-in">
      <div className="home-card">
        <div className="hero-layout">
          <div className="hero-copy">
            <h2 className="hero-title">Master 6 in-demand tech domains with guided roadmaps, planner goals, and quiz practice</h2>
            <p className="section-text">
              Build your learning path across AI, Web Dev, Cybersecurity, Cloud, DevOps, and Data Science from one structured dashboard.
            </p>

            <div className="hero-features">
              <div className="feature-chip">Domain-based learning roadmaps</div>
              <div className="feature-chip">Priority-based daily planner</div>
              <div className="feature-chip">Timed quiz by domain</div>
              <div className="feature-chip stat-chip">6 Domains<span>AI • Web Dev • Cybersecurity • Cloud • DevOps • Data Science</span></div>
            </div>

            <div className="home-buttons">
              <button className="btn-roadmap" onClick={() => showSection('roadmap')}>Open Roadmaps</button>
              <button className="btn-quiz" onClick={() => showSection('planner')}>Start Planner</button>
            </div>
          </div>

          <div className="hero-image-wrap">
            <img src={heroSectionImage} alt="Student working on a laptop" className="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
