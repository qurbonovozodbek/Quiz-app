import React, { useState } from 'react';
import Home from './components/Home.jsx';
import Quiz from './components/Quiz.jsx';
import Results from './components/Results.jsx';
import './App.css'

function App() {
  const [quizCategory, setQuizCategory] = useState(null);
  const [questionCount, setQuestionCount] = useState(null);
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [score, setScore] = useState(0);

  const startQuiz = (category, questionCount) => {
    setQuizCategory(category);
    setQuestionCount(questionCount);
    setIsQuizStarted(true);
  };

  const finishQuiz = (finalScore) => {
    setScore(finalScore);
    setIsQuizStarted(false);
  };

  return (
    <div>
      {!isQuizStarted ? (
        <Home startQuiz={startQuiz} />
      ) : (
        <Quiz category={quizCategory} questionCount={questionCount} finishQuiz={finishQuiz} />
      )}
      {score !== null && !isQuizStarted && <Results score={score} />}
    </div>
  );
}

export default App;
