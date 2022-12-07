import React from 'react';

function Difficulty(props) {
    const { setDifficulty } = props;

    return(
        <div className='button-container'>
            <button className="button normal" onClick={() => setDifficulty("Normal")}>Normal</button>
            <button className="button hard" onClick={() => setDifficulty("Hard")}>Hard</button>
            <button className="button unfair" onClick={() => setDifficulty("Unfair")}>Unfair</button>
        </div>
    )
}

export default Difficulty