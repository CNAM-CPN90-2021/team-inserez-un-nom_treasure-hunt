import { createContext, useContext, useState } from "react";

let TimerContext = createContext({});

export function useTimer(){
    return useContext(TimerContext);
}

export function TimerContextProvider(props) {
    const [playerTimer, setPlayerTimer] = useState(12);
    const timer = {playerTimer, setPlayerTimer};

    return (
        <TimerContext.Provider value={timer}>
        {props.children}
        </TimerContext.Provider>
    )
}