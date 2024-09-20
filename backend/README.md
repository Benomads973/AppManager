# APP manager: Automate deployemnt 

## HOW TO USE

### Install dependencies

```bash
yarn
npm i
```

### Install packages locally

```bash
npm install -g express mongoose body-parser cors
yarn global add express mongoose body-parser cors
```

### .ENV FILE

```bahs
MONGO_USER: Votre nom d'utilisateur MONGO
MONGO_PASSWORD: Votre mdp MONGO
MONGO_URL: L'URL de connexion MONGO a votre habitude
APP_PORT: Le PORT de votre application est dynamique
```

### Node 

```bash
start: `yarn start` or `npm run start`
prod : `yarn prod` or `npm run prod`
```

### DOCKER

Condition 1: Depuis le repertoire courrant. 

Construire le conteneur:
```bash
docker build . -t rns-backend
```

La Condition 1 n'est plus requise.

Condition 2: Tester la production (serveur final) avec une DB dans le CLOUD

Lancer l'image du conteneur construit
```bash
docker run \
    --env-file=".env-example" \
    -it --rm -p 5000:5000 \
rns-backend
```

Condition 3: Tester la production (serveur final) avec une DB en local

REMARQUE LE FLAG "--network=mongo-private-tunnel" necessite d'avoir lancé la db en local via docker-compose voir le '2.' chapitre sur 'DOCKER-COMPOSE'. Il est recommender de lire les commentaire dans le docker-compose file.

Une fois votre db lancer il vous faut connaitre le nom de l'interface reseau sur votre machine, vous le trouverez en faisant:

```bash
docker network ls # il s'agirait du reseau se terminant par 'mongo-private-tunnel'
```

Lancer l'image du conteneur construit et discuter avec une db en local
```bash
docker run \
    --env-file=".env-example" \
    --network=mongo-private-tunnel \
    -it --rm -p 5000:5000 \
rns-backend
```


Condition 4: Debuguer la production

Ici le mot clé "--entrypoint" va vous permettre de lancer l'image de votre conteneur et de vous connecter a son SHELL Linux 
```bash
docker run 
    -it --rm --entrypoint="/bin/sh" \
rns-backend
```

### DOCKER-COMPOSE

1. Lancer l'ensemble de vos microservices (DB + FRONT + BACK) pour simuler un deploiement en local

```bash
docker compose up --build
```

2. Lancer uniquement une machine (SEULE) avec toute sa configuration et le reseaux qui va avec:
```
DB: docker compose up mongodb
DB+MONGO-EXPRESS: docker compose up mongodb mongo-express
...
```