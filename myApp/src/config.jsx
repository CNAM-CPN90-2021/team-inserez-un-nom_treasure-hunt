// Regrouper ici toute la configuration de l'app, pour ne la gérer qu'à un seul endroit

export const MAPBOX_ACCESS_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
MAPBOX_ACCESS_TOKEN = 'pk.eyJ1Ijoic3ByYWNrIiwiYSI6ImNrbzlxYmd5djBqaTkycHAybjAzNGoxdGsifQ.I-WqUL5Q80fN1H_-TU63kw';
if (!MAPBOX_ACCESS_TOKEN) {
  throw new Error("missing REACT_APP_MAPBOX_ACCESS_TOKEN");
}
