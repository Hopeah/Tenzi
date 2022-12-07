import React from 'react';

function Statistics(props) {
    const { currentTime, currentRolls, currentDifficulty, bestTime, bestRolls, bestDifficulty } = props;

     const currentMinutes = Math.floor((currentTime / 60000) % 60)
    const currentSeconds = Math.floor((currentTime / 1000) % 60)

    const bestMinutes = Math.floor((bestTime / 60000) % 60)
    const bestSeconds = Math.floor((bestTime / 1000) % 60)

    return(
        <div>
            {currentTime && bestTime ? 
            <div className='stats'>
                <div className='result'>
                    <span>CURRENT RESULT.</span> 
                    <span>{currentMinutes} {currentMinutes == 1 ? "minute" : "minutes"},</span> 
                    <span>{currentSeconds} {currentSeconds == 1 ? "second" : "seconds"},</span> 
                    <span>{currentRolls} {currentRolls == 1 ? "roll" : "rolls"},</span> 
                    <span>Difficulty: {currentDifficulty}</span>
                </div>
                <div className='result'>
                    <span>BEST RESULT.</span> 
                    <span>{bestMinutes} {bestMinutes == 1 ? "minute" : "minutes"},</span> 
                    <span>{bestSeconds} {bestSeconds == 1 ? "second" : "seconds"},</span> 
                    <span>{bestRolls} {bestRolls == 1 ? "roll" : "rolls"},</span> 
                    <span>Difficulty: {bestDifficulty}</span>
                </div>
            </div> 
            :
            <div className='no-result'>Play to get your results!</div>
            }
        </div>
    )
}

export default Statistics