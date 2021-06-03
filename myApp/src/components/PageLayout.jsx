import { IonContent, IonFooter, IonPage } from "@ionic/react";
import { Header } from "../components/Header";

export function PageLayout(props) {
  const { title, footer, children } = props;

  return (
    <IonPage>
      <Header title={title} />
      <IonContent fullscreen>
        <div className="container">{children}</div>
      </IonContent>
      {footer && <IonFooter>{footer}</IonFooter>}
    </IonPage>
  );
}
