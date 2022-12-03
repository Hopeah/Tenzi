import React from 'react';

function Die(props) {
    const { isHeld, holdDice, value } = props;

    const styles = {
        backgroundColor: isHeld ? "#86EF84" : "white"
    };

    const dieFaces = {
        1: <button
            className={"die-face" + ` face-${1}`}
            style={styles} 
            onClick={holdDice}
            >
                <span className='circle'></span>
            </button>,

        2: <button
            className={"die-face" + ` face-${2}`}
            style={styles} 
            onClick={holdDice}
            >
                <span className='circle'></span>
                <span className='circle'></span>
            </button>,

        3: <button
            className={"die-face" + ` face-${3}`}
            style={styles} 
            onClick={holdDice}
            >
                <span className='circle'></span>
                <span className='circle'></span>
                <span className='circle'></span>
            </button>,

        4: <button
            className={"die-face" + ` face-${4}`}
            style={styles} 
            onClick={holdDice}
            >
                <div class="column">
                    <span className='circle'></span>
                    <span className='circle'></span>
                </div>
                <div class="column">
                    <span className='circle'></span>
                    <span className='circle'></span>
                </div>
            </button>,

        5: <button
            className={"die-face" + ` face-${5}`}
            style={styles} 
            onClick={holdDice}
            >
                <div class="column">
                    <span className='circle'></span>
                    <span className='circle'></span>
                </div>
                <div class="column">
                    <span className='circle'></span>
                </div>
                <div class="column">
                    <span className='circle'></span>
                    <span className='circle'></span>
                </div>
            </button>,

        6: <button
            className={"die-face" + ` face-${6}`}
            style={styles} 
            onClick={holdDice}
            >
                <div class="column">
                    <span className='circle'></span>
                    <span className='circle'></span>
                    <span className='circle'></span>
                </div>
                <div class="column">
                    <span className='circle'></span>
                    <span className='circle'></span>
                    <span className='circle'></span>
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