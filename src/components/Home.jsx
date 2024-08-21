import React, { useState } from 'react';

const Home = ({ startQuiz }) => {
  const [category, setCategory] = useState('');
  const [questionCount, setQuestionCount] = useState('');

  const handleStartQuiz = () => {
    if (category && questionCount) {
      startQuiz(category, questionCount);
    }
  };

  return (
    <div className="home-container">
      <h1>Select Quiz Category & Number of Questions</h1>
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select Category</option>
        <option value="Football">Football</option>
        <option value="History">History</option>
        <option value="Capitals">Capitals</option>
      </select>
      <select onChange={(e) => setQuestionCount(e.target.value)}>
        <option value="">Select Number of Questions</option>
        <option value="10">10 questions</option>
        <option value="20">20 questions</option>
        <option value="30">30 questions</option>
      </select>
      <button onClick={handleStartQuiz}>Start Quiz</button>
    </div>
  );
};

export default Home;
