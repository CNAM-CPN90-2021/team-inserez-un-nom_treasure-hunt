import { createContext, useContext, useState } from "react";

let PartieContext = createContext({});

export function usePartie(){
    return useContext(PartieContext);
}

export function PartieContextProvider(props) {
    const [partieDuration, setPartieDuration] = useState(Number);
    const [partieState, setPartieState] = useState(String);

    const loose = (duration:number) => {
        setPartieDuration(duration);
        setPartieState('loosed');
    }

    const win = (duration) => {
        setPartieDuration(duration);
        setPartieState('win');
    }

    const partie = {partieDuration, setPartieDuration, partieState, setPartieState, loose, win}
}