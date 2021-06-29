import { IonButton } from "@ionic/react";
import { PageLayout } from "../components/PageLayout";

export function AdventureStart() {

  return (
    <PageLayout
      title="Épisode 1 — La cascade des feuilles de Sty'hl"
      footer={
        <IonButton routerLink="/adventure/1/bag" expand="full">
          Débuter l'aventure
        </IonButton>
      }
    >
      <h1>
        <small>
          <strong>Place de la réunion Mulhouse</strong>
        </small>
        <br />
        Histoire et recherches
      </h1>

      <h2>Bienvenue à vous courageux(ses) aventuriers(ères) !</h2>
      <p>
        Dans cet épisode nous allons explorer les alentours de la place de la réunion et découvrir son histoire au travers de ses monuments.
      </p>
      <p>
        Vous allez découvrir des histoires liées à la place à travers des questions, mais attention si vous jouez en difficulté normale ou difficile le temps vous sera compté !
        Nous comptons sur vous pour ne pas tricher en cherchant les réponses sur internet, toutes les réponses se trouvent dans la zone de jeu, attention si vous en sortez c'est perdu !
      </p>
    </PageLayout>
  );
}
