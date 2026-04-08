import React, { useState, useEffect, useCallback } from 'react';
import { quizQuestions } from '../data';

function Quiz({ showSection }) {
  const [showIntro, setShowIntro] = useState(true);
  const [showActive, setShowActive] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  
  const [currentQuiz, setCurrentQuiz] = useState({
    category: '',
    questions: [],
    currentIndex: 0,
    score: 0,
    selectedAnswer: null
  });

  const [timer, setTimer] = useState(15);

  const showSummaryScreen = useCallback((score, total) => {
    setCurrentQuiz(prev => ({
      ...prev,
      score: score
    }));
    
    setShowActive(false);
    setShowSummary(true);
    setShowIntro(false);
  }, []);

  const handleNext = useCallback(() => {
    const currentQuestion = currentQuiz.questions[currentQuiz.currentIndex];
    let newScore = currentQuiz.score;

    if (currentQuiz.selectedAnswer === currentQuestion.correct) {
      newScore++;
    }

    const newIndex = currentQuiz.currentIndex + 1;

    if (newIndex < currentQuiz.questions.length) {
      setCurrentQuiz(prev => ({
        ...prev,
        currentIndex: newIndex,
        score: newScore,
        selectedAnswer: null
      }));
      setTimer(15);
    } else {
      showSummaryScreen(newScore, currentQuiz.questions.length);
    }
  }, [currentQuiz, showSummaryScreen]);

  // Timer effect
  useEffect(() => {
    if (!showActive || currentQuiz.questions.length === 0) return;

    const interval = setInterval(() => {
      setTimer(prev => {
        if (prev - 1 <= 0) {
          clearInterval(interval);
          handleNext();
          return 15;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [showActive, currentQuiz.currentIndex, currentQuiz.questions.length, handleNext]);

  const startQuiz = (category) => {
    const shuffledQuestions = [...quizQuestions[category]].sort(() => Math.random() - 0.5);
    
    setCurrentQuiz({
      category: category,
      questions: shuffledQuestions,
      currentIndex: 0,
      score: 0,
      selectedAnswer: null
    });

    setShowIntro(false);
    setShowActive(true);
    setShowSummary(false);
    setTimer(15);
  };

  const selectOption = (index) => {
    setCurrentQuiz(prev => ({
      ...prev,
      selectedAnswer: index
    }));
  };

  const quitQuiz = () => {
    setShowIntro(true);
    setShowActive(false);
    setShowSummary(false);
    setCurrentQuiz({
      category: '',
      questions: [],
      currentIndex: 0,
      score: 0,
      selectedAnswer: null
    });
  };

  const currentQuestion = currentQuiz.questions[currentQuiz.currentIndex];
  const percentage = currentQuiz.questions.length > 0 
    ? Math.round((currentQuiz.score / currentQuiz.questions.length) * 100)
    : 0;

  let summaryMsg = '';
  if (percentage >= 80) summaryMsg = "Excellent work! You are an expert! 🌟";
  else if (percentage >= 50) summaryMsg = "Good effort! Keep studying! 📚";
  else summaryMsg = "You should check the roadmap again... 😅";

  return (
    <section className="quiz-section animate-bounce-in">
      {/* Quiz Intro */}
      {showIntro && (
        <div className="quiz-intro">
          <div className="quiz-emoji">🤓</div>
          <h2 className="section-title quiz-title">Quiz Time!</h2>
          <p className="quiz-desc">Pick a domain and test your knowledge.</p>
          
          <div className="quiz-categories">
            <button className="category-btn" onClick={() => startQuiz('AI')}>
              1. AI
            </button>
            <button className="category-btn" onClick={() => startQuiz('WebDev')}>
              2. Web Dev
            </button>
            <button className="category-btn" onClick={() => startQuiz('Cybersecurity')}>
              3. Cybersecurity
            </button>
            <button className="category-btn" onClick={() => startQuiz('Cloud')}>
              4. Cloud
            </button>
            <button className="category-btn" onClick={() => startQuiz('DevOps')}>
              5. DevOps
            </button>
            <button className="category-btn" onClick={() => startQuiz('DataScience')}>
              6. Data Science
            </button>
          </div>
        </div>
      )}

      {/* Quiz Active */}
      {showActive && currentQuestion && (
        <div className="quiz-active">
          <div className="quiz-header">
            <div className="quiz-category">Category: {currentQuiz.category}</div>
            <div className="quiz-info">
              <span className="quiz-progress">
                Q{currentQuiz.currentIndex + 1} / {currentQuiz.questions.length}
              </span>
              <div className="quiz-timer">{timer}s</div>
            </div>
          </div>

          <div className="quiz-question">
            <h3 className="question-text">{currentQuestion.q}</h3>
            <div className="options-container">
              {currentQuestion.a.map((option, index) => (
                <button
                  key={index}
                  className={`quiz-option ${currentQuiz.selectedAnswer === index ? 'selected-option' : ''}`}
                  onClick={() => selectOption(index)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="quiz-footer">
            <button className="quit-btn" onClick={quitQuiz}>
              I give up
            </button>
            <button 
              className="next-btn"
              onClick={handleNext}
              disabled={currentQuiz.selectedAnswer === null}
            >
              Next Question ➡️
            </button>
          </div>
        </div>
      )}

      {/* Quiz Summary */}
      {showSummary && (
        <div className="quiz-summary">
          <h2 className="summary-title">Finished! 🎉</h2>
          <div className="score-circle">{percentage}%</div>
          <p className="summary-msg">{summaryMsg}</p>
          
          <div className="summary-buttons">
            <button 
              className="summary-btn try-again"
              onClick={() => setShowIntro(true) || setShowActive(false) || setShowSummary(false)}
            >
              Try Again
            </button>
            <button 
              className="summary-btn back-roadmap"
              onClick={() => showSection('roadmap')}
            >
              Back to Roadmap
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Quiz;
