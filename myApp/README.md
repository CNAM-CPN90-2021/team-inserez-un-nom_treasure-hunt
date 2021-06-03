# Chasse au Trésor

Projet initialisé à l'aide de la commande suivantes :
```sh
ionic start treasure-hunt
# Framework: React,  Starter template: blank
```

Désactivation du mode strict de typescript (pour pouvoir écrire simplement du javascript) :
```diff
# tsconfig.json
-   "strict": true,
+   "strict": false,
```

## Commandes

Au premier lancement, faire `npm install`, puis dupliquer `.env.dist`en `.env` et ajouter les variables d'environnement nécessaires.

Lancer le serveur de dev :
```
npm start
```

## Erreurs courantes 

Erreur lors d'un `npm install` :
```
npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
npm ERR! 
npm ERR! While resolving: treasure-hunt@0.0.1
npm ERR! Found: react@17.0.2
npm ERR! node_modules/react
npm ERR!   react@"^17.0.1" from the root project
```

Solution : Ajouter  `--force` à la fin de la commande

Explication : Votre dépendance requiert `react 16` or `react 17` est installé. Il se trouve qu'il n'y a presque pas de différence entre ces deux versions, vous pouvez donc forcer l'installation de votre dépendance sans risque.

## Sujets

- créer un compte mapbox + générer access token
- .env
- feuille de styles mapbox
- Context
- paramètres d'url
- https://visgl.github.io/react-map-gl
- https://turfjs.org/
