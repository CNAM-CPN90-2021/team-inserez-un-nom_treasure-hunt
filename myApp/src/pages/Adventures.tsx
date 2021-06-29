import { IonImg, IonItem, IonLabel, IonThumbnail } from "@ionic/react";
import { PageLayout } from "../components/PageLayout";

export function Adventures() {
  return (
    <PageLayout>
      <h1>Escape game grandeur nature</h1>
      <h2>Bienvenue aventurier, votre escape game va pouvoir débuter.</h2>
      <p>Choisissez un scénario pour démarrer.</p>

      <AdventureCard
        id="1"
        thumbnail="https://i0.wp.com/mon-grand-est.fr/wp-content/uploads/2016/07/Place-de-la-Reunion-Mulhouse-04-©-French-Moments.jpg?resize=702%2C527"
        title="Place de la réunion Mulhouse"
      />

      <AdventureCard
        id="2"
        thumbnail="https://i2.wp.com/mon-grand-est.fr/wp-content/uploads/2016/11/Place-Kléber-Strasbourg-07-©-French-Moments.jpg?fit=1200%2C902&ssl=1"
        title="Place Kléber Strasbourg"
        disabled
      />

      <AdventureCard
        id="3"
        thumbnail="https://www.archi-wiki.org/images/0/0a/Place_de_l%27_Ancienne_Douane_Colmar_62248.jpg"
        title="Place de l'ancienne Douane Colmar"
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
