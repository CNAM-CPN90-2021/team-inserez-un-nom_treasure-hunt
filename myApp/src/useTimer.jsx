import { createContext, useContext, useState } from "react";

let TimerContext = createContext({});

export function useTimer() {
    return useContext(TimerContext);
}

export function TimerContextProvider(props) {
    const [playerTimer, setPlayerTimer] = useState(60);
    const [isStarted, setIsStarted] = useState(false);

    const finish = () => {
        alert('Temps écoulé !')
    }

    const startTimer = () => {
        if(isStarted === true){
            
        } 
        
    }

    const timer = { playerTimer, setPlayerTimer, startTimer, isStarted, setIsStarted };

    return (
        <TimerContext.Provider value={timer}>
            {props.children}
        </TimerContext.Provider>
    )
}