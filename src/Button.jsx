import React from 'react';

function Button(props) {
    const { tenzies, rollDice } = props;

    // const styles = {
    //     backgroundColor: tenzies ? "#86EF84" : "#5035FF"
    // }

    return(
        <button className={tenzies ? "button new" : "button roll"} onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
    )
}

export default Button