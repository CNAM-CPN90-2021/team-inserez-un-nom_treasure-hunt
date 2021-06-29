import {
  IonItem,
  IonLabel,
  IonRadio,
  IonRadioGroup,
  IonListHeader,
  IonFooter,
  IonButton,
} from "@ionic/react";
import { useState } from "react";
import { useBag } from "../bagContext";
import { PageLayout } from "../components/PageLayout";
import { useHealth } from "../useHealth";
import { useTimer } from "../useTimer";

export function Bag() {
  const [selected, setSelected] = useState();
  const bag = useBag();
  const { playerTimer, setPlayerTimer, start, isStarted, setIsStarted } = useTimer();
  const { playerHealth, setPlayerHealth } = useHealth();
  return (
    <PageLayout
      title="Première épreuve"
      footer={
        selected && (
          <IonFooter>
            <IonButton
              expand="full"
              routerLink="/adventure/1/travel"
              onClick={() => {
                if(selected === "false"){
                  setPlayerHealth(playerHealth - 10)
                  alert("Mauvaise réponse, la réponse était 1859 vous perdez 10 points de vie")
                }
                setPlayerTimer(60);
              }}
            >
              Valider la réponse
            </IonButton>
          </IonFooter>
        )
      }
    >

      <h1>Première épreuve</h1>
      <p>
        Trouver la date de construction du temple Saint-Etienne
      </p>

      <IonRadioGroup
        value={selected}
        onIonChange={(e) => setSelected(e.detail.value)}
      >
        <IonListHeader>
          <IonLabel>Quand à débuté la construction du templs Saint-Etienne</IonLabel>
        </IonListHeader>

        <IonItem>
          <IonLabel>1866</IonLabel>
          <IonRadio value="false" />
        </IonItem>

        <IonItem>
          <IonLabel>1859</IonLabel>
          <IonRadio value="true" />
        </IonItem>

        <IonItem>
          <IonLabel>1848</IonLabel>
          <IonRadio value="false" />
        </IonItem>
      </IonRadioGroup>
    </PageLayout>
  );
}
