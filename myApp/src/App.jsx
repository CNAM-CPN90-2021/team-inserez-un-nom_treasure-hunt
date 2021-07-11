import { Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import { AdventureStart } from "./pages/AdventureStart";
import { Adventures } from "./pages/Adventures";
import { Error404 } from "./pages/Error404";
import { Question } from "./pages/Question";
import { BagStateProvider } from "./bagContext";
import { HealthContextProvider } from "./useHealth";
import { TimerContextProvider } from "./useTimer";
import { PartieStateProvider } from "./partieContext";

import "./theme/index.css";
import { Travel } from "./pages/Travel";
import { Entrance } from "./pages/Entrance";

export function App() {
  return (
    <BagStateProvider>
      <PartieStateProvider>
        <HealthContextProvider>
          <TimerContextProvider>
            <IonApp>
              <IonReactRouter>
                <IonRouterOutlet animated>
                  <Route exact path="/" component={Adventures} />
                  <Route path="/adventure/:id/bag" component={Question} />
                  <Route path="/adventure/:id/travel" component={Travel} />
                  <Route path="/adventure/:id/entrance" component={Entrance} />
                  <Route exact path="/adventure/:id">
                    <AdventureStart />
                  </Route>
                  {/* pensez à nettoyer le code inutilisé :) */}

                  <Route component={Error404} />
                </IonRouterOutlet>
              </IonReactRouter>
            </IonApp>
          </TimerContextProvider>
        </HealthContextProvider>
      </PartieStateProvider>
    </BagStateProvider>
  );
}
