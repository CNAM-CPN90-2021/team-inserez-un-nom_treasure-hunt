import {
  IonItem,
  IonLabel,
  IonRadio,
  IonRadioGroup,
  IonListHeader,
  IonFooter,
  IonButton,
  IonAlert,
  IonContent,
} from "@ionic/react";
import { useState } from "react";
import { useBag } from "../bagContext";
import { PageLayout } from "../components/PageLayout";
import { useHealth } from "../useHealth";
import { useTimer } from "../useTimer";
import { useHistory } from "react-router";

export function Bag() {
  const [selected, setSelected] = useState();
  const { playerTimer, increment, isStarted, setIsStarted } = useTimer();
  const { playerHealth, setPlayerHealth } = useHealth();
  const [showAlert, setShowAlert] = useState(false);
  const [alertContent, setAlertContent] = useState({ header: '', message: '', });
  const history = useHistory();
  return (
    <PageLayout
      title="Première épreuve"
      footer={
        selected && (
          <IonFooter>
            <IonButton
              expand="full"
              onClick={() => {
                if (selected != "true") {
                  setPlayerHealth(playerHealth - 10)
                  setShowAlert(true)
                  setAlertContent({ header: "Dommage", message: "Mauvaise réponse, la réponse était 1859 vous perdez 10 points de vie", })
                } else {
                  setShowAlert(true)
                  setAlertContent({ header: "Bravo", message: "Vous avez bien répondu à la question", })
                }
              }}
            >
              Valider la réponse
            </IonButton>
          </IonFooter>
        )
      }
    >
      
        <IonAlert
          
          isOpen={showAlert}
          onDidDismiss={  ()=> history.push('/adventure/1/travel') }
          
          cssClass='my-custom-class'
          header={alertContent.header}
          message={alertContent.message}
          buttons={[{text : 'Continuer', }]}
        />
       
      


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
          <IonRadio value="false1" />
        </IonItem>

        <IonItem>
          <IonLabel>1859</IonLabel>
          <IonRadio value="true" />
        </IonItem>

        <IonItem>
          <IonLabel>1848</IonLabel>
          <IonRadio value="false2" />
        </IonItem>
      </IonRadioGroup>
    </PageLayout >
  );
}
