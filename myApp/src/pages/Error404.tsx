import { IonButton, IonContent, IonFooter, IonPage } from "@ionic/react";
import { useRouteMatch } from "react-router-dom";
import { Header } from "../components/Header";

export function Error404() {
  const match = useRouteMatch();

  return (
    <IonPage>
      <Header title={`404 — La page "${match.path}" est introuvable`} />

      <IonContent fullscreen>
        <div className="container">
          <h1>404</h1>
          <h2>La page "{match.path}" est introuvable</h2>
        </div>
      </IonContent>

      <IonFooter>
        <IonButton expand="full" routerLink="/" routerDirection="root">
          Retour à l'accueil
        </IonButton>
      </IonFooter>
    </IonPage>
  );
}
