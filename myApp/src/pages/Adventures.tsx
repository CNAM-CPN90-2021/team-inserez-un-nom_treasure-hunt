import { IonImg, IonItem, IonLabel, IonThumbnail } from "@ionic/react";
import { PageLayout } from "../components/PageLayout";

export function Adventures() {
  return (
    <PageLayout>
      <h1>Le périple du Oueb mobile</h1>
      <h2>Bienvenue compagnon, votre aventure commence ici.</h2>
      <p>Choisissez un épisode pour démarrer.</p>

      <AdventureCard
        id="1"
        thumbnail="https://source.unsplash.com/random/640x320"
        title="La cascade de feuilles de Sty'hl"
      />

      <AdventureCard
        id="2"
        thumbnail="https://source.unsplash.com/random/640x320"
        title="Le fremw-orc Rheakt"
        disabled
      />

      <AdventureCard
        id="3"
        thumbnail="https://source.unsplash.com/random/640x320"
        title="Le trésor des Ioniks"
        disabled
      />
    </PageLayout>
  );
}

function AdventureCard(props) {
  const { id, thumbnail, title, disabled } = props;

  return (
    <IonItem routerLink={`/adventure/${id}`} disabled={disabled}>
      <IonThumbnail slot="start">
        <IonImg src={thumbnail} />
      </IonThumbnail>
      <IonLabel>
        <h6>Épisode {id}</h6>
        {title}
      </IonLabel>
    </IonItem>
  );
}
