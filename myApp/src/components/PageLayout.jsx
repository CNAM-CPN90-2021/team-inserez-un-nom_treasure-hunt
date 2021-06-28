import { IonContent, IonFooter, IonPage, IonButton, IonFab, IonFabButton } from "@ionic/react";
import { Header } from "../components/Header";
import { useHealth } from "../useHealth";
import { useTimer } from "../useTimer";
import { createContext, useContext, useState } from "react";

export function PageLayout(props) {
  const { title, footer, children } = props;

  const { playerHealth, setPlayerHealth } = useHealth();
  const { playerTimer, setPlayerTimer } = useTimer();

  return (
    <IonPage>
      <Header title={title} />
      <IonContent fullscreen>
        <div className="container">{children}</div>

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton>
          <p>{playerHealth} PV</p>
          </IonFabButton>
        </IonFab>

        <IonFab vertical="bottom" horizontal="start" slot="fixed">
          <IonFabButton>
          <p>{playerTimer} min</p>
          </IonFabButton>
        </IonFab>

      </IonContent>
      {footer && <IonFooter>{footer}
        <div className="timer"></div></IonFooter>}
    </IonPage>
  );
}
