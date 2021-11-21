import React from 'react'
import { useState, useEffect } from 'react';
import { Heading } from 'grommet';

const Timer = (props) => {
    
    const {initialMinute = 0,initialSeconds = 0} = props;
    const [minutes, setMinutes] = useState(initialMinute);
    const [seconds, setSeconds] = useState(initialSeconds);

    useEffect( () => {
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    props.timerDisabler(true);
                    clearInterval(myInterval);
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });

    return (

        <Heading level="1" size="large" textAlign="center" color="accent-4" margin={{ "bottom": "none", "top": "none" }}>
            {
                minutes === 0 && seconds === 0 ?
                    null
                    :
                    <p> {minutes}:{seconds < 10 ? `0${seconds}` : seconds} </p>
            }
        </Heading>
    )
}

export default Timer;