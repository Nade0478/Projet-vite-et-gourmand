# Vite et Gourmand

Spécialiste de la réservation de restauration rapide, l'application a pour objectif de faciliter les commandes des visiteurs en leur présentant les menus de manière simple et rapide.
Application web de réservation de restauration rapide — React + Laravel + MySQL

## Présentation de l'entreprise

Créée il y a 25 ans à Bordeaux par Julie et José, **Vite et Gourmand** propose des prestations de menus pour tout type d'événement.
L'application web permet d'augmenter la visibilité de l'entreprise et de présenter les menus plus facilement aux clients.

---

## Table des matières

1. Activité – Type 1 : Développer la partie front-end d'une application web ou web mobile sécurisée
   - Installer et configurer son environnement
   - Maquettes et interfaces utilisateur
   - Interfaces statiques
   - Interfaces dynamiques
2. Activité – Type 2 : Développer la partie back-end d'une application web ou web mobile sécurisée
   - Base de données relationnelle
   - Accès aux données SQL / NoSQL
   - Composants métier
   - Déploiement de l'application

---

## Diagrammes de conception

### Diagramme de cas d'usage

![Diagramme de cas d'usage](docs/usecase.png)

### Diagramme d'architecture

![Diagramme d'architecture](docs/architecture.png)

### Diagramme de navigation

![Diagramme de navigation](docs/navigation.png)

---

## Activité – Type 1 : Développer la partie front-end

### Installer et configurer son environnement

*(Décris ici ton environnement : Node, Vite, React, etc.)*

---

### Maquettes et interfaces utilisateur

#### Outils de suivi de projet

Click'Up : <https://app.clickup.com/90152125758/v/li/901518966291>

![ClickUp](docs/image-11.png)

#### Charte graphique

![Charte graphique](docs/image-10.png)

#### Wireframes et maquettes

##### Wireframes Mobile

![Wireframes Mobile](docs/image-9.png)

##### Maquettes Laptop

![Maquettes Laptop](docs/image-7.png)

##### Wireframes Laptop

![Wireframes Laptop](docs/image-3.png)

##### Maquettes Mobile

![Maquettes Mobile](docs/image-6.png)

---

## Réaliser des interfaces utilisateur statiques

*(Ajoute ici ton code HTML/CSS ou captures d'écran)*

---

## Développer la partie dynamique des interfaces utilisateur

*(Ajoute ici les fonctionnalités dynamiques : formulaires, API, interactions)*

---

## Activité – Type 2 : Développer la partie back-end

### Mettre en place une base de données relationnelle

#### Diagramme de cas d'utilisation

![Diagramme de cas d'utilisation](docs/image-12.png)

#### MCD

![MCD](docs/image-15.png)

#### MLD

![MLD](docs/image-13.png)

#### Schéma physique

![Schéma physique](docs/image-14.png)

---

### Développer des composants d'accès aux données SQL / NoSQL

*(Décris ici tes requêtes, ton ORM, ton API, etc.)*

---

### Développer des composants métier côté serveur

#### Diagramme de séquence

![Diagramme de séquence](<docs/Diagramme de séquence.png>)

#### Diagramme d'activité

![Diagramme d'activité](<docs/diagramme activité 2.jpg>)

---

### Documenter le déploiement de l'application

*(Explique ici ton déploiement : serveur, hébergement, commandes, environnement)*


# Vite et Gourmand

> Application web de réservation fast-food — React + Laravel + MySQL + Docker

---

## Stack technique

| Couche | Technologie |
|--------|-------------|
| Frontend | React 18 + Vite |
| Backend | Laravel 11 (API REST) |
| Base de données | MySQL 8.0 |
| Containerisation | Docker + Docker Compose |
| CI/CD | GitHub Actions |
| Production | Netlify (frontend) + Render (backend) |

---

## Prérequis

Avant de lancer le projet, vérifier que les outils suivants sont installés :

| Outil | Version minimale | Vérification |
|-------|-----------------|--------------|
| Docker Desktop | 24.x | `docker --version` |
| Docker Compose | 2.x | `docker compose version` |
| Git | 2.x | `git --version` |

> ⚠️ **Windows** : Docker Desktop doit être lancé et WSL 2 doit être activé dans les paramètres Docker.

---

## Installation et lancement

### 1. Cloner le projet

```bash
git clone https://github.com/<votre-organisation>/vite-et-gourmand.git
cd vite-et-gourmand
```

Structure du projet :

```
vite-et-gourmand/
├── backend/           # API Laravel 11
│   ├── Dockerfile
│   ├── .env.example
│   └── ...
├── frontend/          # Application React + Vite
│   ├── Dockerfile
│   └── ...
└── docker-compose.yml
```

### 2. Configurer l'environnement

Copier le fichier d'exemple :

```bash
cp backend/.env.example backend/.env
```

Variables à renseigner dans `backend/.env` :

| Variable | Exemple | Description |
|----------|---------|-------------|
| `APP_ENV` | `local` | Environnement : `local` / `production` |
| `APP_DEBUG` | `true` | Mettre `false` en production |
| `APP_KEY` | *(généré par `key:generate`)* | Clé de chiffrement Laravel |
| `DB_CONNECTION` | `mysql` | Pilote de la base relationnelle |
| `DB_HOST` | `db` (Docker) ou `127.0.0.1` (WAMP) | Hôte MySQL |
| `DB_PORT` | `3306` | Port MySQL |
| `DB_DATABASE` | `vite_et_gourmand` | Nom de la base MySQL |
| `DB_USERNAME` | `root` | Utilisateur MySQL |
| `DB_PASSWORD` | `secret` | Mot de passe MySQL |
| `JWT_SECRET` | *(généré par `jwt:secret`)* | Secret JWT |
| `JWT_ALGO` | `HS256` | Algorithme de signature |
| `JWT_TTL` | `60` | Validité du token (minutes) |
| `JWT_REFRESH_TTL` | `20160` | Validité du refresh (minutes, soit 14 jours) |
| `MONGODB_URI` | `mongodb+srv://<user>:<password>@<cluster>/?retryWrites=true&w=majority` | URI de connexion MongoDB Atlas |
| `MONGODB_DATABASE` | `vite_et_gourmand` | Nom de la base MongoDB |

> ⚠️ Ne jamais commiter `.env` (il contient des secrets). Seul `.env.example` est versionné, avec des valeurs factices.
> ℹ️ Avec Docker, `DB_HOST` doit valoir `db`. Sans Docker (WampServer), utiliser `127.0.0.1`.
> ℹ️ MongoDB est hébergé sur Atlas : il n'y a pas de service MongoDB dans `docker-compose.yml`. Ton adresse IP doit être autorisée dans Atlas (Network Access).

### 3. Construire et démarrer les conteneurs

```bash
docker compose up --build
```

La première exécution télécharge les images et installe les dépendances. Les lancements suivants sont plus rapides.

### 4. Initialiser Laravel *(nouveau terminal)*

```bash
# Générer la clé d'application
docker compose exec backend php artisan key:generate

# Générer le secret JWT
docker compose exec backend php artisan jwt:secret

# Exécuter les migrations et les seeders
docker compose exec backend php artisan migrate --seed
```

> ⚠️ L'option `--seed` insère les données de démonstration. Ne pas utiliser en production.

### 5. Accéder à l'application

| Service | URL |
|---------|-----|
| Frontend (React) | http://localhost |
| Backend API (Laravel) | http://localhost:8000 |
| Vérification API | http://localhost:8000/api |

---

## Architecture Docker

Le projet orchestre trois services via Docker Compose :

| Service | Image | Port | Rôle |
|---------|-------|------|------|
| `backend` | `php:8.3-fpm-alpine` | `8000` | API REST Laravel (`php artisan serve`) |
| `frontend` | `node:20` + `nginx:alpine` | `80` | Build React servi par Nginx |
| `db` | `mysql:8.0` | `3306` *(interne)* | Base de données MySQL |

La base NoSQL (MongoDB Atlas) est externe aux conteneurs et accessible via `MONGODB_URI`.
Le service `backend` attend que `db` soit **healthy** avant de démarrer. Les données MySQL sont persistées dans un volume Docker nommé `db_data`.

---

## Commandes utiles (Lancement rapide)

```bash
# Démarrer en arrière-plan
docker compose up -d

# Arrêter les conteneurs
docker compose down

# Arrêter et supprimer les volumes (remet la BDD à zéro)
docker compose down -v

# Voir l'état des conteneurs
docker compose ps

# Voir les logs d'un service
docker compose logs backend
docker compose logs frontend
docker compose logs db

# Ouvrir un terminal dans le conteneur backend
docker compose exec backend bash

# Réinitialiser complètement la base de données
docker compose exec backend php artisan migrate:fresh --seed
```

---

## Résolution des problèmes fréquents

**Le backend ne démarre pas (erreur de connexion à la base de données)**

Le service `db` met quelques secondes à être prêt. Le healthcheck Docker gère l'attente automatiquement. Si le problème persiste :

```bash
docker compose down
docker compose up --build
```

**La clé APP_KEY est manquante**

```bash
docker compose exec backend php artisan key:generate
```

**Les migrations échouent**

Vérifier que le service `db` est bien `healthy` :

```bash
docker compose ps
```

Attendre quelques secondes et relancer la migration si nécessaire.

**Le port 80 ou 8000 est déjà utilisé**

Modifier les ports dans `docker-compose.yml` (première valeur uniquement) :

```yaml
ports:
  - "8080:80"   # Frontend accessible sur http://localhost:8080
  - "8001:8000" # Backend accessible sur http://localhost:8001
```

---

## Déploiement en production

### Frontend — Netlify

- **Déclencheur** : push sur la branche `main`
- **Commande de build** : `npm run build`
- **Répertoire publié** : `dist/`
- **Variable à configurer** : `VITE_API_URL` (URL de l'API backend)

### Backend — Render

- **Runtime** : Docker (utilise le `Dockerfile` du dossier `backend/`)
- **Déclencheur** : push sur la branche `main`
- **Variables à configurer** :

| Variable | Valeur |
|----------|--------|
| `APP_KEY` | Clé générée par `php artisan key:generate --show` |
| `APP_ENV` | `production` |
| `APP_DEBUG` | `false` |
| `DB_HOST` | Hôte de la base MySQL de production |
| `DB_DATABASE` | Nom de la base MySQL |
| `DB_USERNAME` | Utilisateur MySQL |
| `DB_PASSWORD` | Mot de passe MySQL |
| `JWT_SECRET` | Secret généré par `php artisan jwt:secret --show` |
| `JWT_ALGO` | `HS256` |
| `JWT_TTL` | `60` |
| `MONGODB_URI` | URI de connexion MongoDB Atlas |
| `MONGODB_DATABASE` | `vite_et_gourmand` |

> ⚠️ En production, `APP_DEBUG` doit être `false` pour ne pas exposer les erreurs détaillées.
> ℹ️ Les valeurs secrètes (`APP_KEY`, `JWT_SECRET`, `DB_PASSWORD`, `MONGODB_URI`) se saisissent dans l'interface Render (Environment), jamais dans le dépôt Git.
> ℹ️ Dans Atlas (Network Access), autorise les adresses IP sortantes de Render, sinon la connexion MongoDB sera refusée.

---

## Lancement rapide

```bash
# 1. Cloner le projet
git clone https://github.com/<votre-organisation>/vite-et-gourmand.git
cd vite-et-gourmand

# 2. Configurer l'environnement
cp backend/.env.example backend/.env

# 3. Construire et démarrer
docker compose up --build

# 4. (Nouveau terminal) Initialiser Laravel
docker compose exec backend php artisan key:generate
docker compose exec backend php artisan jwt:secret
docker compose exec backend php artisan migrate --seed

# 5. Accéder à l'application
# Frontend : http://localhost
# Backend  : http://localhost:8000
```