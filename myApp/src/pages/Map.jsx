import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonContent,
  IonPage,
} from "@ionic/react";

import ReactMapGL, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useState } from "react";
import { useWatchPosition } from "@capacitor-community/react-hooks/geolocation";
import distance from "@turf/distance";
import { point } from "@turf/helpers";

function useRealPosition() {
  const { currentPosition, startWatch, clearWatch } = useWatchPosition();

  useEffect(
    function startWatchOnMount() {
      startWatch();

      return function onUnmount() {
        clearWatch();
      };
    },
    [startWatch, clearWatch]
  );

  return currentPosition?.coords;
}

function useSimulatedPosition() {
  const from = { latitude: 47.7426476, longitude: 7.3407563 };
  const to = { latitude: 47.7386289, longitude: 7.3293385 };
  const speed = 0.02; // from 0 to 1
  const refresh = 50; // ms

  const [currentPosition, setPosition] = useState(from);

  useEffect(
    () => {
      const intervalID = setInterval(() => {
        setPosition((pos) => ({
          latitude: pos.latitude + (to.latitude - pos.latitude) * speed, // formule "lerp"
          longitude: pos.longitude + (to.longitude - pos.longitude) * speed,
        }));
      }, refresh);

      return function onUnmount() {
        clearInterval(intervalID);
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setPosition]
  );

  return currentPosition;
}

function measureDistance(from, to) {
  if (!from || !to) {
    return Infinity;
  }

  return distance(
    point([from.latitude, from.longitude]),
    point([to.latitude, to.longitude]),
    { units: "meters" }
  );
}


export function Map() {
  const [viewport, setViewport] = useState({
    latitude: 47.7395389333945,
    longitude: 7.329169414309033,
    zoom: 13,
  });

  // const position = useRealPosition();
  const position = useSimulatedPosition();
  const destination = {
    latitude: 47.7395389333945,
    longitude: 7.329169414309033,
  };

  const distanceToDestination = measureDistance(position, destination);
  const isCloseEnough = distanceToDestination < 100;

  useEffect(() => {
    if (isCloseEnough) {
      alert("Bravo !");
    }
  }, [isCloseEnough]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Une super carte</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <div style={{ width: "100%", height: "80vh" }}>
          <ReactMapGL
            {...viewport}
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
            width="100%"
            height="100%"
          >
            <Marker
              latitude={destination.latitude}
              longitude={destination.longitude}
              offsetLeft={(-1 * 40) / 2}
              offsetTop={(-1 * 40) / 2}
            >
              <div
                style={{
                  background: "red",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                }}
              ></div>
            </Marker>

            {position && (
              <Marker
                latitude={position.latitude}
                longitude={position.longitude}
                offsetLeft={(-1 * 30) / 2}
                offsetTop={(-1 * 30) / 2}
              >
                <div
                  style={{
                    background: "blue",
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    border: "white 2px solid",
                    boxShadow: "0 0 0 15px rgba(0, 0, 255, 0.4)",
                  }}
                ></div>
              </Marker>
            )}
          </ReactMapGL>
        </div>

        <div className="container">
          On metttra une carte ici
          <p>Hello</p>
        </div>
      </IonContent>
    </IonPage>
  );
}
