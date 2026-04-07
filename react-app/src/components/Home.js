import React from 'react';

function Home({ showSection }) {
  return (
    <section className="animate-bounce-in">
      <div className="home-card">
        <h2 className="section-title">Welcome to our project!</h2>
        <p className="section-text">
          Hello! This is our combination project featuring an <b>Interactive Quiz Arena</b> and a <b>Roadmap Generator</b>. 
          We used JavaScript and React to create this dynamic interface.
        </p>
        
        <div className="creators-card">
          <h3 className="creators-title">Created By:</h3>
          <ul className="creators-list">
            <li>👤 TRINABHA DIXIT - 24BYB0026</li>
            <li>👤 SHIKHAR SAHAY - 24BYB0029</li>
            <li>👤 BHARGAV MAHANTA - 24BYB0046</li>
          </ul>
        </div>

        <div className="home-buttons">
          <button className="btn-roadmap" onClick={() => showSection('roadmap')}>Create Roadmap ✏️</button>
          <button className="btn-quiz" onClick={() => showSection('quiz')}>Take a Quiz 📝</button>
        </div>
      </div>
    </section>
  );
}

export default Home;
