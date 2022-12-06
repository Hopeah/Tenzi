import React from 'react';

function Difficulty(props) {
    const { setDifficulty } = props;

    return(
        <div>
            <button className="difficulty-normal" onClick={setDifficulty}>Normal</button>
            <button className="difficulty-hard" onClick={setDifficulty}>Hard</button>
            <button className="difficulty-unfair" onClick={setDifficulty}>Unfair</button>
        </div>
    )
}

export default Difficulty