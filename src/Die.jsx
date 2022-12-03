import React from 'react';

function Die(props) {
    const { isHeld, holdDice, value } = props;

    const styles = {
        backgroundColor: isHeld ? "#86EF84" : "white"
    };

    return(
        <button
        className="die-face" 
        style={styles} 
        onClick={holdDice}
        >
            {/* <h2 className="die-num">{value}</h2> */}
            <h2 className='circle'></h2>
        </button>
    );
};

export default Die