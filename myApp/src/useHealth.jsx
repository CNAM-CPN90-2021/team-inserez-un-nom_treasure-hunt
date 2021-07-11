import { createContext, useState, useContext, useEffect } from "react";
import { usePartie } from "./partieContext";
import { useTimer } from "./useTimer";

const HealthContext = createContext();

export function useHealth() {
  return useContext(HealthContext);
}

export function HealthContextProvider(props) {
  const [playerHealth, setPlayerHealth] = useState(100);
  const partie = usePartie()
  const { playerTimer, increment, isStarted, setIsStarted, initialeTimer, setInitialeTimer } = useTimer 

  useEffect(() => {
    if (playerHealth <= 0) {
      partie.loose(initialeTimer - playerTimer, playerTimer - initialeTimer);
    }
  }, [playerHealth]);

  const health = { playerHealth, setPlayerHealth };

  return (
    <HealthContext.Provider value={health}>
      {props.children}
    </HealthContext.Provider>
  );
}