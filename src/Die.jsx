import React from 'react';

function Die(props) {
    const { isHeld, holdDice, value } = props;

    const styles = {
        backgroundColor: isHeld ? "green" : "white"
    };

    return(
        <div 
        className="die-face" 
        style={styles} 
        onClick={holdDice}
        >
            <h2 className="die-num">{value}</h2>
        </div>
    );
};

export default Die