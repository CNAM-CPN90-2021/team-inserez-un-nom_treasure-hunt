import { createContext, useContext, useState, useEffect } from "react";
import { withRouter } from "react-router";
import { usePartie } from "./partieContext";

let TimerContext = createContext({});

export function useTimer() {
    return useContext(TimerContext);
}

function useDecrement(initial, step) {
  const [playerTimer, setPlayerTimer] = useState(initial);

  const decrement = () => {
    setPlayerTimer((p) => p - step);
  };
  return [playerTimer, decrement];
}

export function TimerContextProvider(props) {

    

    const [initialeTimer, setInitialeTimer] = useState(60);
    const [playerTimer, increment] = useDecrement(initialeTimer, 1);
    const [isStarted, setIsStarted] = useState();
    const partie = usePartie()
    

    useEffect(() => {  

       if (isStarted === true) {
            let timerID = window.setInterval(() => {
                if(playerTimer <= 0) {
                    setIsStarted(false)
                } else {
                    increment();
                }
            }, 60000)

            return function () {
              clearInterval(timerID);
            };
        } 
    }, [isStarted])

    useEffect (()=>{
        if(playerTimer <= 0){
            setIsStarted(false)
            console.log(initialeTimer, playerTimer)
            return partie.loose(initialeTimer - playerTimer, playerTimer - initialeTimer)
        }
    }, [playerTimer])

    const timer = { playerTimer, increment, isStarted, setIsStarted, initialeTimer, setInitialeTimer };

    return (
        <TimerContext.Provider value={timer}>
            {props.children}
        </TimerContext.Provider>
    )
}