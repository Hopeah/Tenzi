import React from "react";
import Die from "./Die";
import Statistics from "./Statistics";
import Button from "./Button";
import Difficulty from "./Difficulty";
import { nanoid } from "nanoid";
import { useState } from 'react';
import reactLogo from './assets/react.svg'

function App() {
  const [dice, setDice] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false);
  const [rolls, setRolls] = React.useState(0);
  const [time, setTime] = React.useState(0);
  const [isActiveTimer, setIsActiveTimer] = React.useState(false);
  const [bestResult, setBestResult] = React.useState(() => JSON.parse(localStorage.getItem("bestResult")) || []);
  const [currentResult, setCurrentResult] = React.useState(() => JSON.parse(localStorage.getItem("currentResult")) || []);
  const [difficulty, setDifficulty] = React.useState("");

  React.useEffect(() => {
    const allHeld = dice.every(die => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every(die => die.value === firstValue);
    const result = {
      rolls: rolls,
      time: time,
      difficulty: difficulty
    }
    if (allHeld && allSameValue) {
      setTenzies(true);
      setTime(0);
      setIsActiveTimer(false);
      setRolls(0);
      setCurrentResult(result);
      checkBest(result);
    };
  }, [dice]);

  React.useEffect(() => {
    let interval = null;
  
    if (isActiveTimer) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActiveTimer]);

  React.useEffect(() => {
    localStorage.setItem("bestResult", JSON.stringify(bestResult))
  }, [bestResult])

  React.useEffect(() => {
    localStorage.setItem("currentResult", JSON.stringify(currentResult))
  }, [currentResult])

  function checkBest(result) {
    if (!bestResult.time || bestResult.time > result.time) {
      setBestResult(result)
    } 
  }

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    }
  };

  function allNewDice() {
    const newDice = [];
    while (newDice.length < 10) {
      newDice.push(generateNewDie())
    };
    return newDice;
  };

  function rollDice() {
    if (!tenzies) {
      setRolls(oldRoll => oldRoll+1);
      setDice(oldDice => oldDice.map(die => {
        return die.isHeld ? die : generateNewDie()
      }));
      if (difficulty === "Impossible") {
        resetHold()
      }
    } else {
      newGame();
    };
  };

  function holdDice(id) {
    if (isActiveTimer === false) {
      setIsActiveTimer(true)
    };
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ? {...die, isHeld: !die.isHeld} : die
    }));
  };

  const diceElements = dice.map(die => {
    return (<Die 
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
      difficulty={difficulty}
    />)
  });

  function newGame() {
    setTenzies(false);
    setDice(allNewDice());
  };

  function resetDifficulty() {
    setDifficulty('');
    newGame();
  };

  function resetHold() {
    const unlucky = Math.random()
    if (unlucky > 0.5) {
      for (let i = 0; i < dice.length; i++) {
        if (dice[i].isHeld) {
          dice[i] = generateNewDie()
          break;
        }
      }
    }
  }

  return(
    <main>
      {/* {tenzies} */}
    {
      difficulty ? 
      <div>
        <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="dice-container">{diceElements}</div>
        <Button
          tenzies={tenzies}
          rollDice={rollDice}
        />
        <Statistics 
          currentTime={currentResult.time}
          currentRolls={currentResult.rolls}
          currentDifficulty={currentResult.difficulty}
          bestTime={bestResult.time}
          bestRolls={bestResult.rolls}
          bestDifficulty={bestResult.difficulty}
        />
        <button className="button difficulty" onClick={resetDifficulty}>Change Difficulty</button>
      </div>
      :
      <div>
        <h1 className="title">Care for a round of Tenzi?</h1>
        <p className="instructions">Please select your preferred difficulty.</p>
        <Difficulty setDifficulty={setDifficulty}/>
      </div>
    }
    </main>
  )
}

export default App