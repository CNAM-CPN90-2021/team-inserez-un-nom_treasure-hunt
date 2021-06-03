// Regrouper ici toute la configuration de l'app, pour ne la gérer qu'à un seul endroit

export const MAPBOX_ACCESS_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

if (!MAPBOX_ACCESS_TOKEN) {
  throw new Error("missing REACT_APP_MAPBOX_ACCESS_TOKEN");
}
