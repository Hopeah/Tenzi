import React from 'react';

function Die(props) {
    const { isHeld, holdDice, value, difficulty } = props;

    const styles = {
        backgroundColor: isHeld ? "#86EF84" : "white"
    };

    const dieFaces = {
        1: <button
            className={"die-face" + ` face-${1}`}
            style={styles} 
            onClick={holdDice}
            >
                
                {/* <span className='circle one'></span> */}
                <span className={difficulty === "Unfair" ? "circle unfair" : difficulty === "Hard" ? "circle hard" : "circle one"}></span>
            </button>,

        2: <button
            className={"die-face" + ` face-${2}`}
            style={styles} 
            onClick={holdDice}
            >
                <span className={difficulty === "Unfair" ? "circle unfair" : difficulty === "Hard" ? "circle hard" : "circle two"}></span>
                <span className={difficulty === "Unfair" ? "circle unfair" : difficulty === "Hard" ? "circle hard" : "circle two"}></span>
            </button>,

        3: <button
            className={"die-face" + ` face-${3}`}
            style={styles} 
            onClick={holdDice}
            >
                <span className={difficulty === "Unfair" ? "circle unfair" : difficulty === "Hard" ? "circle hard" : "circle three"}></span>
                <span className={difficulty === "Unfair" ? "circle unfair" : difficulty === "Hard" ? "circle hard" : "circle three"}></span>
                <span className={difficulty === "Unfair" ? "circle unfair" : difficulty === "Hard" ? "circle hard" : "circle three"}></span>
            </button>,

        4: <button
            className={"die-face" + ` face-${4}`}
            style={styles} 
            onClick={holdDice}
            >
                <div class="column">
                    <span className={difficulty === "Unfair" ? "circle unfair" : difficulty === "Hard" ? "circle hard" : "circle four"}></span>
                    <span className={difficulty === "Unfair" ? "circle unfair" : difficulty === "Hard" ? "circle hard" : "circle four"}></span>
                </div>
                <div class="column">
                    <span className={difficulty === "Unfair" ? "circle unfair" : difficulty === "Hard" ? "circle hard" : "circle four"}></span>
                    <span className={difficulty === "Unfair" ? "circle unfair" : difficulty === "Hard" ? "circle hard" : "circle four"}></span>
                </div>
            </button>,

        5: <button
            className={"die-face" + ` face-${5}`}
            style={styles} 
            onClick={holdDice}
            >
                <div class="column">
                    <span className={difficulty === "Unfair" ? "circle unfair" : difficulty === "Hard" ? "circle hard" : "circle five"}></span>
                    <span className={difficulty === "Unfair" ? "circle unfair" : difficulty === "Hard" ? "circle hard" : "circle five"}></span>
                </div>
                <div class="column">
                    <span className={difficulty === "Unfair" ? "circle unfair" : difficulty === "Hard" ? "circle hard" : "circle five"}></span>
                </div>
                <div class="column">
                    <span className={difficulty === "Unfair" ? "circle unfair" : difficulty === "Hard" ? "circle hard" : "circle five"}></span>
                    <span className={difficulty === "Unfair" ? "circle unfair" : difficulty === "Hard" ? "circle hard" : "circle five"}></span>
                </div>
            </button>,

        6: <button
            className={"die-face" + ` face-${6}`}
            style={styles} 
            onClick={holdDice}
            >
                <div class="column">
                    <span className={difficulty === "Unfair" ? "circle unfair" : difficulty === "Hard" ? "circle hard" : "circle six"}></span>
                    <span className={difficulty === "Unfair" ? "circle unfair" : difficulty === "Hard" ? "circle hard" : "circle six"}></span>
                    <span className={difficulty === "Unfair" ? "circle unfair" : difficulty === "Hard" ? "circle hard" : "circle six"}></span>
                </div>
                <div class="column">
                    <span className={difficulty === "Unfair" ? "circle unfair" : difficulty === "Hard" ? "circle hard" : "circle six"}></span>
                    <span className={difficulty === "Unfair" ? "circle unfair" : difficulty === "Hard" ? "circle hard" : "circle six"}></span>
                    <span className={difficulty === "Unfair" ? "circle unfair" : difficulty === "Hard" ? "circle hard" : "circle six"}></span>
                </div>
            </button>,
    }

    return(
        <div>
            {dieFaces[value]}
        </div>
    );
};

export default Die