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
        <h2>Vous avez déniché une vieille carte.</h2>
        <p>
          Sur cette dernière se trouvent de nombreuses accolades, des `* + *`,
          les lettres C, S et S et d'autres caractères bien étranges.
        </p>

        <p>
          Mais en y regardant de plus prêt il semble s'y cacher ce qui ressemble
          à des coordonnées GPS.
        </p>

        <p>Vous décidez de vous y rendre.</p>

        <p>
          <small>
            Rendez-vous à l'emplacement indiqué sur la carte pour activer la
            suite de l'aventure
          </small>
        </p>
      </div>
    </PageLayout>
  );
}
