import { createContext, useContext, useState } from "react";
import { IonButton, IonContent, IonPage, useIonAlert, IonAlert } from '@ionic/react';
import { Redirect } from "react-router";

const PartieContext = createContext({});

export function PartieStateProvider(props) {
    const { children } = props;
    const [partieDuration, setPartieDuration] = useState();
    const [partieState, setPartieState] = useState();

    const partie = {
        partieDuration,
        partieState,

        loose: (duration, timeleft) => {
            //setPartieDuration(duration);
            //setPartieState('loosed');
            //console.log('loose', partieDuration, duration, partieState)
            function stop() {
                alert('Temps écoulé partie perdu')
                window.location.href = '/'
            }
            if (timeleft <= 0) {
                //alert('Temps écoulé partie perdu')
                return stop()

            } else {
                //return alert('Partie perdu en ' + duration + ' minutes')
                return stop()
            }
            //return (<div><p>Vous avez perdu en {partieDuration}</p><IonButton routerLink="/">Retourner à l'acceuil</IonButton></div>)
        },

        win: (duration) => {
            setPartieDuration(duration);
            setPartieState('win');

            //return (<div><p>Vous avez gagné en {partieDuration}</p><IonButton routerLink="/">Retourner à l'acceuil</IonButton></div>)
        }
    };



    return <PartieContext.Provider value={partie}>{children}</PartieContext.Provider>
}

export function usePartie() {
    return useContext(PartieContext);
}