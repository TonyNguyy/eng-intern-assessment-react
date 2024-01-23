import React from 'react'


interface Props {
    elaspedTime: number,
    className: string,
}

export default function StopWatch({elaspedTime,className}:Props) {
    function formatTime(){
        let hours = Math.floor(elaspedTime / (1000 * 60 * 60));
        let minutes = Math.floor (elaspedTime/ (1000 * 60) % 60);
        let seconds = Math.floor (elaspedTime/ (1000) % 60);
        let milliseconds = Math.floor ((elaspedTime % 1000)/ 10);

        // PadStart for display to show "00" if below double digit
        let formatHours= String(hours).padStart(2,"0");
        let formatMinutes= String(minutes).padStart(2,"0");
        let formatSeconds= String(seconds).padStart(2,"0");
        let formatMilliseconds = String(milliseconds).padStart(2, "0");

        // Formating Return
        return `${formatMinutes}:${formatSeconds}:${formatMilliseconds}`
    }

    return(
        <div className={className}>{formatTime()}</div>
    )
}