import { createContext, useState, useContext } from "react";

const HealthContext = createContext();

export function useHealth() {
  return useContext(HealthContext);
}

export function HealthContextProvider(props) {
  const [playerHealth, setPlayerHealth] = useState(100);
  const health = { playerHealth, setPlayerHealth };

  return (
    <HealthContext.Provider value={health}>
      {props.children}
    </HealthContext.Provider>
  );
}