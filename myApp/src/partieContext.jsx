import { createContext, useContext, useState } from "react";

const PartieContext = createContext({});

export function PartieStateProvider(props) {
    const { children } = props;
    const [partieDuration, setPartieDuration] = useState();
    const [partieState, setPartieState] = useState();

    const partie = {
        partieDuration,
        partieState,

        loose: (duration, timeleft) => {
            function stop(cause) {
                if(cause === "time"){
                    alert('Temps écoulé partie perdu')
                } else if (cause === "lifePoint") {
                    alert('Point de vie à zéro partie perdu')
                }
                window.location.href = '/'
            }
            if (timeleft <= 0) {
                return stop('time')

            } else {
                return stop('lifePoint')
            }
        },

        win: (duration) => {
            setPartieDuration(duration);
            setPartieState('win');
        }
    };

    return <PartieContext.Provider value={partie}>{children}</PartieContext.Provider>
}

export function usePartie() {
    return useContext(PartieContext);
}