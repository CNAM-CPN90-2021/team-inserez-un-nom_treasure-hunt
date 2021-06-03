import { IonButton, useIonToast } from "@ionic/react";
import { useState } from "react";
import { PageLayout } from "../components/PageLayout";
import { useQRCodeScanner } from "../useQRCodeScanner";
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
      console.log(result.content);
    }
  };

  const stopScan = () => {
    const { BarcodeScanner } = Plugins;
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
  };

  return (
    <PageLayout
      title="L'entrée de la vallée"
      footer={
        <IonButton expand="full" routerLink="/" routerDirection="root">
          Retour à l'accueil
        </IonButton>
      }
    >
      <h1>Le qr-code</h1>
      <p>
        Après un long périple, vous vous retrouvez devant une porte majestueuse
      </p>

      <p>
        Vous pouvez y lire l'inscription suivante :
        <br />
        <br />
        <code>
          Au valeureux voyageur qui trouvera le cuillère-code, la porte
          s'ouvrira. // TODO
        </code>
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
        Scanner le cuillère-code
      </IonButton>
    </PageLayout>
  );
}
