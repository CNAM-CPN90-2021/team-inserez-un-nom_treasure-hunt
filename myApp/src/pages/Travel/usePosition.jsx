import { useEffect, useState } from "react";
import { useWatchPosition } from "@capacitor-community/react-hooks/geolocation";

// simple wrapper pour fournir la position actuelle sans avoir à gérer les souscriptions
export function useRealPosition() {
  const { currentPosition, startWatch, clearWatch } = useWatchPosition();

  useEffect(
    function onMount() {
      startWatch();

      return function onUnmount() {
        clearWatch();
      };
    },
    [startWatch, clearWatch]
  );

  return currentPosition?.coords;
}

export function useSimulatedPosition() {
  const from = { latitude: 47.746867, longitude: 7.338465 };
  const to = { latitude: 47.746589, longitude: 7.339197 };
  const speed = 0.01; // from 0 to 1
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
