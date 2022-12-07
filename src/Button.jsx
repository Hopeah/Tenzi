import React from 'react';

function Button(props) {
    const { tenzies, rollDice } = props;

    const styles = {
        backgroundColor: tenzies ? "#86EF84" : "#5035FF"
    }

    return(
        <button className="button" style={styles} onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
    )
}

export default Button