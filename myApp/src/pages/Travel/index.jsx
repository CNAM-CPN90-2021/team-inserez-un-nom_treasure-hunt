import { PageLayout } from "../../components/PageLayout";
import { Map } from "./Map";

import "./Travel.css";

export function Travel() {
  return (
    <PageLayout title="En route">
      <div className="map-container">
        <Map />
      </div>

      <div className="container bottom-sheet">
        <h2>Rendez vous sur l'escalier de l'Hôtel de ville pour débloquer la prochaine étape</h2>
        <p>
          On y a une meilleure vue ;)
        </p>
      </div>
    </PageLayout>
  );
}
