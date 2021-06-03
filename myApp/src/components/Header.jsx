import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
} from "@ionic/react";
import { useEffect } from "react";

export function Header(props) {
  const { title, hidden } = props;

  useEffect(() => {
    document.title = title;
  }, [title]);

  if (hidden) return null;
  else {
    return (
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>{title}</IonTitle>
        </IonToolbar>
      </IonHeader>
    );
  }
}
