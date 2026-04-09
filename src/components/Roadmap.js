import React, { useState } from 'react';
import { syllabusData, youtubeReferences } from '../data';
import { jsPDF } from 'jspdf';

function Roadmap() {
  const [roadmapData, setRoadmapData] = useState([]);
  const [selectedDomain, setSelectedDomain] = useState('');

  const generateRoadmap = (domain) => {
    setRoadmapData(syllabusData[domain]);
    setSelectedDomain(domain);
  };

  const downloadRoadmapPdf = () => {
    if (roadmapData.length === 0) return;

    const domainLabelMap = {
      ai: 'AI Learning Roadmap',
      webdev: 'Web Development Learning Roadmap',
      cybersecurity: 'Cybersecurity Learning Roadmap',
      cloud: 'Cloud Computing Learning Roadmap',
      devops: 'DevOps Learning Roadmap',
      datascience: 'Data Science Learning Roadmap'
    };

    const title = domainLabelMap[selectedDomain] || 'Learning Roadmap';
    const doc = new jsPDF();
    let y = 20;

    doc.setFontSize(18);
    doc.text(title, 15, y);
    y += 12;

    roadmapData.forEach((step, index) => {
      if (y > 260) {
        doc.addPage();
        y = 20;
      }

      doc.setFontSize(12);
      doc.text(`${index + 1}. Module ${step.module}: ${step.title}`, 15, y);
      y += 7;

      doc.setFontSize(10);
      doc.text(`Level: ${step.taxonomy}`, 20, y);
      y += 6;

      step.topics.forEach((topic) => {
        if (y > 275) {
          doc.addPage();
          y = 20;
        }
        doc.text(`- ${topic}`, 25, y);
        y += 6;
      });

      y += 3;
    });

    doc.save(`${selectedDomain || 'roadmap'}.pdf`);
  };

  return (
    <section className="roadmap-section animate-bounce-in">
      {/** Domain-specific references appear when a roadmap is selected */}
      {/** Keeping references in the roadmap card keeps context near the selected domain */}
      <div className="roadmap-card">
        <h2 className="section-title roadmap-title">Choose a Domain:</h2>
        <div className="domain-buttons">
          <button 
            className="domain-btn web-btn"
            onClick={() => generateRoadmap('ai')}
          >
            AI
          </button>
          <button 
            className="domain-btn frontend-btn"
            onClick={() => generateRoadmap('webdev')}
          >
            Web Dev
          </button>
          <button 
            className="domain-btn fullstack-btn"
            onClick={() => generateRoadmap('cybersecurity')}
          >
            Cybersecurity
          </button>
          <button
            className="domain-btn"
            onClick={() => generateRoadmap('cloud')}
          >
            Cloud
          </button>
          <button
            className="domain-btn"
            onClick={() => generateRoadmap('devops')}
          >
            DevOps
          </button>
          <button
            className="domain-btn"
            onClick={() => generateRoadmap('datascience')}
          >
            Data Science
          </button>
        </div>

        {selectedDomain && (
          <div className="references-and-download">
            <div className="reference-links">
              <h3 className="reference-title">YouTube References</h3>
              <div className="reference-list">
                {(youtubeReferences[selectedDomain] || []).map((ref) => (
                  <a
                    key={ref.url}
                    href={ref.url}
                    target="_blank"
                    rel="noreferrer"
                    className="reference-link"
                  >
                    {ref.title}
                  </a>
                ))}
              </div>
            </div>

            <button className="roadmap-download-badge" onClick={downloadRoadmapPdf} disabled={roadmapData.length === 0}>
              <span className="download-icon">⬇</span>
              <span className="download-text">PDF</span>
            </button>
          </div>
        )}
      </div>

      <div className="roadmap-display">
        {roadmapData.length === 0 ? (
          <div className="placeholder-text">
            <p className="placeholder-p">Click a domain above to generate your plan!</p>
          </div>
        ) : (
          roadmapData.map((step, index) => (
            <div 
              key={index} 
              className="roadmap-card-item animate-bounce-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="roadmap-module-header">
                <span className="roadmap-module-tag">Step {step.module}</span>
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
