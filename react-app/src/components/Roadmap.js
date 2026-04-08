import React, { useState } from 'react';
import { syllabusData } from '../data';

function Roadmap({ showSection }) {
  const [roadmapData, setRoadmapData] = useState([]);

  const generateRoadmap = (domain) => {
    setRoadmapData(syllabusData[domain]);
  };

  return (
    <section className="roadmap-section animate-bounce-in">
      <div className="roadmap-card">
        <h2 className="section-title roadmap-title">Choose a Domain:</h2>
        <div className="domain-buttons">
          <button 
            className="domain-btn web-btn"
            onClick={() => generateRoadmap('web')}
          >
            Web Basics
          </button>
          <button 
            className="domain-btn frontend-btn"
            onClick={() => generateRoadmap('frontend')}
          >
            React JS
          </button>
          <button 
            className="domain-btn fullstack-btn"
            onClick={() => generateRoadmap('fullstack')}
          >
            FULL SYLLABUS
          </button>
        </div>
      </div>

      <div className="roadmap-display">
        {roadmapData.length === 0 ? (
          <div className="placeholder-text">
            <p className="placeholder-p">Click a button above to generate your plan!</p>
          </div>
        ) : (
          roadmapData.map((step, index) => (
            <div 
              key={index} 
              className="roadmap-card-item animate-bounce-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="roadmap-module-header">
                <span className="roadmap-module-tag">Module {step.module}</span>
                <span className="roadmap-taxonomy-tag">{step.taxonomy}</span>
              </div>
              <h3>{step.title}</h3>
              <ul>
                {step.topics.map((topic, idx) => (
                  <li key={idx}>{topic}</li>
                ))}
              </ul>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default Roadmap;
