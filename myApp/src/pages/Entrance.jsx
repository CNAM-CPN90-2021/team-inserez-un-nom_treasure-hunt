import { IonButton, useIonToast } from "@ionic/react";
import { useState } from "react";
import { PageLayout } from "../components/PageLayout";
import { Plugins } from '@capacitor/core';


export function Entrance() {
  const [isScanning, setIsScanning] = useState(false);
  const [showToast] = useIonToast();

  if (isScanning) {
    return (
      <IonButton
        expand="full"
        onClick={() => {
          setIsScanning(false);
          stopScan();
        }}
      >
        Annuler le scan
      </IonButton>
    );
  }

  const prepare = () => {
    const { BarcodeScanner } = Plugins;
    BarcodeScanner.prepare();
  };


  const startScan = async () => {
    const { BarcodeScanner } = Plugins;
    BarcodeScanner.hideBackground();
    const result = await BarcodeScanner.startScan();
    if (result.hasContent) {
      //console.log(result.content);
    }
  };

  const stopScan = () => {
    const { BarcodeScanner } = Plugins;
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
  };

  return (
    <PageLayout
      title="Trouver le Qr-Code"
      footer={
        <IonButton expand="full" routerLink="/" routerDirection="root">
          Retour à l'accueil
        </IonButton>
      }
    >
      <h1>Le Qr-code</h1>
      <p>
        Vous voilà donc sur l'escalier de l'Hôtel de ville
      </p>

      <p>
        Regardez maintenant vers la place, vous pouvez profiter de la vue mais faites vite le temps est compté !
        <br />
        <br />
        Il vous faudra maintenant baisser les yeux pour trouver un Qr Code dissimulé quelque par sur l'escalier
      </p>
      <IonButton
        onClick={async () => {
          prepare();
          setIsScanning(true);
          const result = await startScan();
          setIsScanning(false);

          console.log(result);
          if (result.content === "good_answer") {
            showToast("Bravo, bonne réponse", 2000)
          } else if (result.content === "wrong_answer") {
            showToast("Eh non, mauvaise réponse", 2000);
          } else {
            showToast("Code non reconnu", 2000);
          }

        }}
      >
        Scanner le Qr-code
      </IonButton>
    </PageLayout>
  );
}
