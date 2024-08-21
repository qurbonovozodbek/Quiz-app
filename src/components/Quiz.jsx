import React, { useState } from "react";

const quizQuestions = {
  Football: [
    {
      question: "Who won the FIFA World Cup in 2018?",
      options: ["Brazil", "Germany", "France", "Argentina"],
      answer: "France",
    },
    {
      question: "Which country has won the most FIFA World Cups?",
      options: ["Brazil", "Germany", "Italy", "Argentina"],
      answer: "Brazil",
    },
    {
      question: "Who is the top goal scorer in FIFA World Cup history?",
      options: ["Marta", "Miroslav Klose", "Ronaldo", "Pelé"],
      answer: "Miroslav Klose",
    },
    {
      question: "Which country hosted the 2014 FIFA World Cup?",
      options: ["Brazil", "Russia", "South Africa", "Germany"],
      answer: "Brazil",
    },
    {
      question: "Which team won the UEFA Champions League in 2020?",
      options: [
        "Liverpool",
        "Bayern Munich",
        "Paris Saint-Germain",
        "Real Madrid",
      ],
      answer: "Bayern Munich",
    },
    {
      question: "Who won the Ballon d'Or in 2021?",
      options: [
        "Lionel Messi",
        "Cristiano Ronaldo",
        "Robert Lewandowski",
        "Karim Benzema",
      ],
      answer: "Lionel Messi",
    },
    {
      question: "Which country won the Euro 2016?",
      options: ["France", "Portugal", "Germany", "Spain"],
      answer: "Portugal",
    },
    {
      question: "Who is the all-time top scorer for FC Barcelona?",
      options: ["Ronaldinho", "Lionel Messi", "Luis Suárez", "Samuel Eto'o"],
      answer: "Lionel Messi",
    },
    {
      question: "Which club has won the most Premier League titles?",
      options: ["Manchester United", "Chelsea", "Arsenal", "Liverpool"],
      answer: "Manchester United",
    },
    {
      question: "Which player is known as 'The King of Football'?",
      options: ["Diego Maradona", "Pelé", "Johan Cruyff", "Zinedine Zidane"],
      answer: "Pelé",
    },
    {
      question: "Which country won the Copa América in 2021?",
      options: ["Argentina", "Brazil", "Chile", "Uruguay"],
      answer: "Argentina",
    },
    {
      question: "Which player has the most assists in Premier League history?",
      options: [
        "Frank Lampard",
        "David Beckham",
        "Ryan Giggs",
        "Cesc Fàbregas",
      ],
      answer: "Ryan Giggs",
    },
    {
      question: "Who won the Golden Boot in the 2018 FIFA World Cup?",
      options: [
        "Antoine Griezmann",
        "Harry Kane",
        "Romelu Lukaku",
        "Kylian Mbappé",
      ],
      answer: "Harry Kane",
    },
    {
      question: "Which club has won the most UEFA Champions League titles?",
      options: ["Barcelona", "AC Milan", "Liverpool", "Real Madrid"],
      answer: "Real Madrid",
    },
    {
      question: "Which country has won the most Copa América titles?",
      options: ["Brazil", "Argentina", "Uruguay", "Chile"],
      answer: "Uruguay",
    },
    {
      question: "Who won the PFA Players' Player of the Year in 2021?",
      options: [
        "Kevin De Bruyne",
        "Bruno Fernandes",
        "Harry Kane",
        "Phil Foden",
      ],
      answer: "Kevin De Bruyne",
    },
    {
      question: "Which team won the La Liga title in 2021?",
      options: ["Real Madrid", "Barcelona", "Atlético Madrid", "Sevilla"],
      answer: "Atlético Madrid",
    },
    {
      question: "Which country won the 2010 FIFA World Cup?",
      options: ["Spain", "Netherlands", "Brazil", "Germany"],
      answer: "Spain",
    },
    {
      question: "Which player has the most appearances in the FIFA World Cup?",
      options: [
        "Lothar Matthäus",
        "Miroslav Klose",
        "Diego Maradona",
        "Lionel Messi",
      ],
      answer: "Lothar Matthäus",
    },
    {
      question: "Which club did Thierry Henry play for after leaving Arsenal?",
      options: ["Barcelona", "Real Madrid", "Juventus", "Inter Milan"],
      answer: "Barcelona",
    },
    {
      question: "Who won the Golden Boot in the 2014 FIFA World Cup?",
      options: ["James Rodríguez", "Thomas Müller", "Neymar", "Lionel Messi"],
      answer: "James Rodríguez",
    },
    {
      question: "Which country won the 2006 FIFA World Cup?",
      options: ["Italy", "France", "Germany", "Brazil"],
      answer: "Italy",
    },
    {
      question:
        "Which player has the most goals in UEFA Champions League history?",
      options: [
        "Cristiano Ronaldo",
        "Lionel Messi",
        "Raúl",
        "Robert Lewandowski",
      ],
      answer: "Cristiano Ronaldo",
    },
    {
      question: "Which country won the Euro 2004?",
      options: ["Greece", "Portugal", "France", "Germany"],
      answer: "Greece",
    },
    {
      question: "Which club won the Serie A title in 2021?",
      options: ["Juventus", "Inter Milan", "AC Milan", "Napoli"],
      answer: "Inter Milan",
    },
    {
      question: "Who won the Golden Ball in the 2014 FIFA World Cup?",
      options: [
        "Lionel Messi",
        "Cristiano Ronaldo",
        "James Rodríguez",
        "Thomas Müller",
      ],
      answer: "Lionel Messi",
    },
    {
      question: "Which club won the FA Cup in 2020?",
      options: ["Manchester City", "Arsenal", "Chelsea", "Liverpool"],
      answer: "Arsenal",
    },
    {
      question: "Which player is known as 'The Special One'?",
      options: [
        "Pep Guardiola",
        "José Mourinho",
        "Carlo Ancelotti",
        "Jürgen Klopp",
      ],
      answer: "José Mourinho",
    },
    {
      question: "Who won the FIFA Women's World Cup in 2019?",
      options: ["USA", "Germany", "Netherlands", "Japan"],
      answer: "USA",
    },
    {
      question: "Which country won the Euro 1996?",
      options: ["Germany", "France", "Czech Republic", "England"],
      answer: "Germany",
    },
    {
      question:
        "Which player has the most assists in UEFA Champions League history?",
      options: ["Lionel Messi", "Cristiano Ronaldo", "Xavi", "Ángel Di María"],
      answer: "Cristiano Ronaldo",
    },
  ],
  History: [
    {
      question: "Who was the first President of the United States?",
      options: [
        "Abraham Lincoln",
        "George Washington",
        "Thomas Jefferson",
        "John Adams",
      ],
      answer: "George Washington",
    },
    {
      question: "Which year did the Titanic sink?",
      options: ["1905", "1912", "1918", "1923"],
      answer: "1912",
    },
    {
      question: "Who wrote the Declaration of Independence?",
      options: [
        "Thomas Jefferson",
        "George Washington",
        "John Adams",
        "Benjamin Franklin",
      ],
      answer: "Thomas Jefferson",
    },
    {
      question: "Which empire was known as the 'Land of the Rising Sun'?",
      options: [
        "Roman Empire",
        "Ottoman Empire",
        "Japanese Empire",
        "Mongol Empire",
      ],
      answer: "Japanese Empire",
    },
    {
      question: "Who was the first man to walk on the moon?",
      options: ["Yuri Gagarin", "Neil Armstrong", "Buzz Aldrin", "John Glenn"],
      answer: "Neil Armstrong",
    },
    {
      question: "Who was the last Tsar of Russia?",
      options: [
        "Nicholas II",
        "Alexander III",
        "Peter the Great",
        "Ivan the Terrible",
      ],
      answer: "Nicholas II",
    },
    {
      question: "In which year did World War II end?",
      options: ["1940", "1942", "1945", "1947"],
      answer: "1945",
    },
    {
      question:
        "Who was the famous civil rights leader who delivered the 'I Have a Dream' speech?",
      options: [
        "Malcolm X",
        "Martin Luther King Jr.",
        "Rosa Parks",
        "Harriet Tubman",
      ],
      answer: "Martin Luther King Jr.",
    },
    {
      question: "Which civilization built the pyramids?",
      options: ["Romans", "Aztecs", "Egyptians", "Greeks"],
      answer: "Egyptians",
    },
    {
      question:
        "What was the name of the ship on which the Pilgrims traveled to America?",
      options: ["Mayflower", "Santa Maria", "HMS Beagle", "Endeavour"],
      answer: "Mayflower",
    },
    {
      question:
        "Who was the first female Prime Minister of the United Kingdom?",
      options: [
        "Margaret Thatcher",
        "Theresa May",
        "Angela Merkel",
        "Indira Gandhi",
      ],
      answer: "Margaret Thatcher",
    },
    {
      question: "Which empire was ruled by Genghis Khan?",
      options: [
        "Roman Empire",
        "Byzantine Empire",
        "Mongol Empire",
        "Persian Empire",
      ],
      answer: "Mongol Empire",
    },
    {
      question: "Which ancient city was known as the 'Eternal City'?",
      options: ["Babylon", "Athens", "Rome", "Carthage"],
      answer: "Rome",
    },
    {
      question: "Who discovered penicillin?",
      options: [
        "Louis Pasteur",
        "Alexander Fleming",
        "Marie Curie",
        "Isaac Newton",
      ],
      answer: "Alexander Fleming",
    },
    {
      question:
        "Which war was fought between the North and South regions in the United States?",
      options: [
        "World War I",
        "World War II",
        "American Civil War",
        "Spanish-American War",
      ],
      answer: "American Civil War",
    },
    {
      question: "Who was the leader of the Soviet Union during World War II?",
      options: [
        "Vladimir Lenin",
        "Joseph Stalin",
        "Nikita Khrushchev",
        "Mikhail Gorbachev",
      ],
      answer: "Joseph Stalin",
    },
    {
      question: "Which historical document begins with 'We the People'?",
      options: [
        "Magna Carta",
        "Bill of Rights",
        "Declaration of Independence",
        "Constitution of the United States",
      ],
      answer: "Constitution of the United States",
    },
    {
      question: "Who painted the Mona Lisa?",
      options: [
        "Vincent van Gogh",
        "Pablo Picasso",
        "Leonardo da Vinci",
        "Claude Monet",
      ],
      answer: "Leonardo da Vinci",
    },
    {
      question: "Which ancient civilization is known for its hieroglyphics?",
      options: ["Inca", "Aztec", "Egyptian", "Greek"],
      answer: "Egyptian",
    },
    {
      question:
        "Who was the first President of South Africa to be elected in a fully representative democratic election?",
      options: ["Nelson Mandela", "Desmond Tutu", "Thabo Mbeki", "Jacob Zuma"],
      answer: "Nelson Mandela",
    },
    {
      question: "Which French military leader became Emperor of France?",
      options: [
        "Louis XIV",
        "Charles de Gaulle",
        "Napoleon Bonaparte",
        "Joan of Arc",
      ],
      answer: "Napoleon Bonaparte",
    },
    {
      question: "Who was the famous nurse during the Crimean War?",
      options: [
        "Florence Nightingale",
        "Clara Barton",
        "Marie Curie",
        "Mother Teresa",
      ],
      answer: "Florence Nightingale",
    },
    {
      question: "In which year did the Berlin Wall fall?",
      options: ["1979", "1985", "1989", "1991"],
      answer: "1989",
    },
    {
      question:
        "Which queen ruled over the British Empire during the Victorian era?",
      options: ["Elizabeth I", "Victoria", "Mary I", "Anne"],
      answer: "Victoria",
    },
    {
      question: "Which treaty ended World War I?",
      options: [
        "Treaty of Versailles",
        "Treaty of Paris",
        "Treaty of Tordesillas",
        "Treaty of Ghent",
      ],
      answer: "Treaty of Versailles",
    },
    {
      question: "Who invented the telephone?",
      options: [
        "Alexander Graham Bell",
        "Thomas Edison",
        "Nikola Tesla",
        "Guglielmo Marconi",
      ],
      answer: "Alexander Graham Bell",
    },
    {
      question: "Which empire built the Colosseum?",
      options: [
        "Greek Empire",
        "Roman Empire",
        "Persian Empire",
        "Ottoman Empire",
      ],
      answer: "Roman Empire",
    },
    {
      question: "Who was the first person to circumnavigate the globe?",
      options: [
        "Christopher Columbus",
        "Ferdinand Magellan",
        "Marco Polo",
        "Vasco da Gama",
      ],
      answer: "Ferdinand Magellan",
    },
    {
      question: "Which historical figure was known as 'The Maid of Orléans'?",
      options: [
        "Marie Antoinette",
        "Joan of Arc",
        "Catherine de' Medici",
        "Anne Boleyn",
      ],
      answer: "Joan of Arc",
    },
    {
      question: "Which U.S. President issued the Emancipation Proclamation?",
      options: [
        "George Washington",
        "Abraham Lincoln",
        "Theodore Roosevelt",
        "Woodrow Wilson",
      ],
      answer: "Abraham Lincoln",
    },
  ],
  Capitals: [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Berlin", "Madrid", "Rome"],
      answer: "Paris",
    },
    {
      question: "What is the capital of Japan?",
      options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
      answer: "Tokyo",
    },
    {
      question: "What is the capital of Canada?",
      options: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
      answer: "Ottawa",
    },
    {
      question: "What is the capital of Australia?",
      options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
      answer: "Canberra",
    },
    {
      question: "What is the capital of Brazil?",
      options: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
      answer: "Brasília",
    },
    {
      question: "What is the capital of Russia?",
      options: ["St. Petersburg", "Moscow", "Kazan", "Sochi"],
      answer: "Moscow",
    },
    {
      question: "What is the capital of India?",
      options: ["Mumbai", "New Delhi", "Bangalore", "Kolkata"],
      answer: "New Delhi",
    },
    {
      question: "What is the capital of South Africa?",
      options: ["Cape Town", "Pretoria", "Johannesburg", "Durban"],
      answer: "Pretoria",
    },
    {
      question: "What is the capital of Egypt?",
      options: ["Alexandria", "Cairo", "Giza", "Luxor"],
      answer: "Cairo",
    },
    {
      question: "What is the capital of Germany?",
      options: ["Munich", "Frankfurt", "Berlin", "Hamburg"],
      answer: "Berlin",
    },
    {
      question: "What is the capital of Italy?",
      options: ["Venice", "Rome", "Milan", "Naples"],
      answer: "Rome",
    },
    {
      question: "What is the capital of Spain?",
      options: ["Barcelona", "Madrid", "Valencia", "Seville"],
      answer: "Madrid",
    },
    {
      question: "What is the capital of the United Kingdom?",
      options: ["London", "Edinburgh", "Manchester", "Liverpool"],
      answer: "London",
    },
    {
      question: "What is the capital of Mexico?",
      options: ["Guadalajara", "Monterrey", "Mexico City", "Tijuana"],
      answer: "Mexico City",
    },
    {
      question: "What is the capital of China?",
      options: ["Shanghai", "Beijing", "Hong Kong", "Shenzhen"],
      answer: "Beijing",
    },
    {
      question: "What is the capital of Turkey?",
      options: ["Istanbul", "Ankara", "Izmir", "Bursa"],
      answer: "Ankara",
    },
    {
      question: "What is the capital of Argentina?",
      options: ["Buenos Aires", "Córdoba", "Rosario", "Mendoza"],
      answer: "Buenos Aires",
    },
    {
      question: "What is the capital of Kenya?",
      options: ["Mombasa", "Nairobi", "Kisumu", "Nakuru"],
      answer: "Nairobi",
    },
    {
      question: "What is the capital of Thailand?",
      options: ["Phuket", "Chiang Mai", "Bangkok", "Pattaya"],
      answer: "Bangkok",
    },
    {
      question: "What is the capital of Saudi Arabia?",
      options: ["Jeddah", "Mecca", "Riyadh", "Medina"],
      answer: "Riyadh",
    },
    {
      question: "What is the capital of Sweden?",
      options: ["Gothenburg", "Stockholm", "Malmö", "Uppsala"],
      answer: "Stockholm",
    },
    {
      question: "What is the capital of Greece?",
      options: ["Athens", "Thessaloniki", "Patras", "Heraklion"],
      answer: "Athens",
    },
    {
      question: "What is the capital of Norway?",
      options: ["Oslo", "Bergen", "Trondheim", "Stavanger"],
      answer: "Oslo",
    },
    {
      question: "What is the capital of Finland?",
      options: ["Helsinki", "Espoo", "Tampere", "Turku"],
      answer: "Helsinki",
    },
    {
      question: "What is the capital of Portugal?",
      options: ["Lisbon", "Porto", "Braga", "Coimbra"],
      answer: "Lisbon",
    },
    {
      question: "What is the capital of the Netherlands?",
      options: ["Amsterdam", "Rotterdam", "The Hague", "Utrecht"],
      answer: "Amsterdam",
    },
    {
      question: "What is the capital of Belgium?",
      options: ["Brussels", "Antwerp", "Bruges", "Ghent"],
      answer: "Brussels",
    },
    {
      question: "What is the capital of Switzerland?",
      options: ["Zurich", "Geneva", "Bern", "Basel"],
      answer: "Bern",
    },
    {
      question: "What is the capital of Austria?",
      options: ["Vienna", "Salzburg", "Graz", "Innsbruck"],
      answer: "Vienna",
    },
    {
      question: "What is the capital of Hungary?",
      options: ["Budapest", "Debrecen", "Szeged", "Pécs"],
      answer: "Budapest",
    },
    {
      question: "What is the capital of Poland?",
      options: ["Warsaw", "Kraków", "Wrocław", "Gdańsk"],
      answer: "Warsaw",
    },
  ],
};

const Quiz = ({ category, questionCount, finishQuiz }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleAnswerClick = (option) => {
    setSelectedOption(option);
    setShowAnswer(true);

    if (option === quizQuestions[category][currentQuestion].answer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      setShowAnswer(false);
      setSelectedOption(null);

      if (currentQuestion + 1 < questionCount) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        finishQuiz(score + 1);
      }
    }, 2000);
  };

  return (
    <div className="quiz-container">
      <h2>{category} Quiz</h2>
      <div className="question-section">
        <h3>{quizQuestions[category][currentQuestion].question}</h3>
        <div className="option">
          {quizQuestions[category][currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(option)}
              disabled={showAnswer}
              className={
                showAnswer
                  ? option === quizQuestions[category][currentQuestion].answer
                    ? 'correct-answer'
                    : option === selectedOption
                    ? 'wrong-answer'
                    : ''
                  : ''
              }
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;