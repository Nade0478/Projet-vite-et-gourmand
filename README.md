# Vite et Gourmand

Application web de réservation de menus pour événements. Elle permet aux visiteurs de découvrir les menus de manière simple et rapide, et de passer commande.

Stack : React (Create React App) + Laravel + MySQL + MongoDB Atlas + Docker.

## Présentation de l'entreprise

Créée il y a 25 ans à Bordeaux par Julie et José, **Vite et Gourmand** propose des prestations de menus pour tout type d'événement.
L'application web augmente la visibilité de l'entreprise et présente les menus plus facilement aux clients.

Quatre profils d'utilisateurs : visiteur, client authentifié, employé et administrateur.

## Production

| Service | URL |
|---------|-----|
| Frontend (Netlify) | <https://tangerine-llama-2f6998.netlify.app> |
| Backend API (Render) | <https://vite-gourmand-back-tfgw.onrender.com> |

## Table des matières

1. [Diagrammes de conception](#diagrammes-de-conception)
2. [Activité – Type 1 : front-end](#activité--type-1--développer-la-partie-front-end)
3. [Activité – Type 2 : back-end](#activité--type-2--développer-la-partie-back-end)
4. [Tests](#tests)
5. [Stack technique](#stack-technique)
6. [Installation et lancement](#installation-et-lancement)
7. [Lancement sans Docker (Windows et WampServer)](#lancement-sans-docker-windows-et-wampserver)
8. [Architecture Docker](#architecture-docker)
9. [Commandes utiles](#commandes-utiles)
10. [Résolution des problèmes fréquents](#résolution-des-problèmes-fréquents)
11. [CI/CD et déploiement](#cicd-et-déploiement)

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

| Outil | Usage |
|-------|-------|
| Windows, PowerShell | Système et terminal |
| Visual Studio Code | Éditeur |
| Node.js 20 et npm | Exécution et dépendances du frontend |
| Create React App (`react-scripts`) | Outil de build et serveur de développement |
| WampServer (WAMP64) | Apache, PHP et MySQL en local |
| Composer | Dépendances PHP du backend |
| phpMyAdmin, MySQL Workbench | Administration de la base MySQL |
| Postman | Test des routes de l'API |
| Git et GitHub | Versionnement et CI/CD |

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

### Réaliser des interfaces utilisateur statiques

Les interfaces sont construites avec React et Bootstrap, à partir des maquettes ci-dessus.

Organisation du dossier `frontend/src` :

```text
src/
├── assets/            # images
├── components/
│   ├── accueil/       # avis clients, savoir-faire
│   ├── auth/          # ProtectedRoute
│   ├── forms/         # filtres des menus
│   ├── layout/        # Navbar, Footer
│   ├── menus/         # CardMenu, MenuList, MenuEditor
│   ├── plats/ allergenes/ regimes/ themes/
│   └── ui/            # Loader et éléments communs
├── hooks/             # useFetch, useAuth
├── pages/
│   ├── admin/
│   └── Auth/          # Login, Register
│       └── client/    # Profile, Commandes, CommandeCreate, Avis
└── tests/             # tests Jest et Testing Library
```

### Développer la partie dynamique des interfaces utilisateur

- **Appels API** : le hook `useFetch` centralise les requêtes (`get`, état `loading` et `error`).
- **Page Menus** : liste chargée depuis `/api/menus`, avec filtres (prix maximum, thème, régime, nombre minimum de personnes) et page de détail `/menus/:id`.
- **Avis clients** : seuls les avis au statut `approuve` sont affichés.
- **Authentification** : connexion par JWT (`useAuth`) et routes réservées via `ProtectedRoute`.
- **Gestion des états** : chargement, erreur de l'API et liste vide sont gérés sur chaque page.

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

### Développer des composants d'accès aux données SQL / NoSQL

- **SQL** : MySQL 8, accédé via l'ORM Eloquent (modèles, migrations et seeders Laravel).
- **NoSQL** : MongoDB Atlas, configuré par `MONGODB_URI` et `MONGODB_DATABASE`.
- **API REST** : contrôleurs dans `app/Http/Controllers/API`, routes dans `routes/api.php`, préfixe `/api`.

#### Routes publiques (sans connexion)

| Méthode | Route | Description |
|---------|-------|-------------|
| POST | `/api/register` | Inscription |
| POST | `/api/login` | Connexion (retourne le JWT) |
| GET | `/api/menus`, `/api/menus/{id}` | Menus |
| GET | `/api/plats`, `/api/allergenes`, `/api/regimes`, `/api/themes`, `/api/horaires` | Catalogue (lecture) |
| GET | `/api/avis` | Avis clients |
| GET | `/api/health` | Vérification de l'API |

#### Routes protégées (JWT, middleware `auth:api`)

| Méthode | Route | Description |
|---------|-------|-------------|
| GET | `/api/me` | Utilisateur connecté |
| POST | `/api/logout` | Déconnexion |
| POST, PUT, DELETE | `/api/menus`, `/api/plats`, `/api/allergenes`, `/api/regimes`, `/api/themes`, `/api/horaires` | Écriture du catalogue |
| CRUD | `/api/commandes`, `/api/users`, `/api/roles` | Gestion des commandes, utilisateurs et rôles |
| POST, PUT, DELETE | `/api/avis` | Dépôt et modération des avis |

### Développer des composants métier côté serveur

- **Validation** des données dans chaque contrôleur (`$request->validate(...)`).
- **Authentification** par JWT (durée de vie du token configurable avec `JWT_TTL`).
- **Avis** : un avis est créé avec le statut `en_attente`, puis passe à `approuve` ou `rejete`.

#### Diagramme de séquence

![Diagramme de séquence](<docs/Diagramme de séquence.png>)

#### Diagramme d'activité

![Diagramme d'activité](<docs/diagramme activité 2.jpg>)

---

## Tests

### Frontend (Jest et Testing Library)

```bash
cd frontend
npm test -- --watchAll=false
```

Suites : `App`, `auth` (formulaire de connexion), `commandes` (création) et `menus` (liste et détail). Résultat attendu : 4 suites et 10 tests réussis.

Les avertissements `React Router Future Flag` affichés pendant les tests sont informatifs et n'indiquent pas d'échec.

### Backend (PHPUnit)

```bash
cd backend
php artisan test
```

---

## Stack technique

| Couche | Technologie |
|--------|-------------|
| Frontend | React (Create React App), React Router, Bootstrap |
| Backend | Laravel 11 (API REST), authentification JWT |
| Bases de données | MySQL 8.0 et MongoDB Atlas |
| Containerisation | Docker et Docker Compose |
| CI/CD | GitHub Actions |
| Production | Netlify (frontend) et Render (backend) |

---

## Installation et lancement

### Prérequis

| Outil | Version minimale | Vérification |
|-------|-----------------|--------------|
| Docker Desktop | 24.x | `docker --version` |
| Docker Compose | 2.x | `docker compose version` |
| Git | 2.x | `git --version` |

> ⚠️ **Windows** : Docker Desktop doit être lancé et WSL 2 doit être activé dans les paramètres Docker.

### 1. Cloner le projet

```bash
git clone https://github.com/<votre-organisation>/vite-et-gourmand.git
cd vite-et-gourmand
```

Structure du projet :

```text
vite-et-gourmand/
├── backend/           # API Laravel 11
│   ├── Dockerfile
│   ├── .env.example
│   └── ...
├── frontend/          # Application React (Create React App)
│   ├── Dockerfile
│   └── ...
└── docker-compose.yml
```

### 2. Configurer l'environnement

```bash
cp backend/.env.example backend/.env
```

Variables à renseigner dans `backend/.env` :

| Variable | Exemple | Description |
|----------|---------|-------------|
| `APP_ENV` | `local` | Environnement : `local` ou `production` |
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

Variable du frontend (Create React App) : l'URL de l'API se définit avec `REACT_APP_API_URL` (par exemple `http://localhost:8000/api`). Avec Create React App, les variables d'environnement doivent commencer par `REACT_APP_` et sont lues au moment du build.

> ⚠️ Ne jamais commiter `.env` (il contient des secrets). Seul `.env.example` est versionné, avec des valeurs factices.
>
> ℹ️ Avec Docker, `DB_HOST` doit valoir `db`. Sans Docker (WampServer), utiliser `127.0.0.1`.
>
> ℹ️ MongoDB est hébergé sur Atlas : il n'y a pas de service MongoDB dans `docker-compose.yml`. Ton adresse IP doit être autorisée dans Atlas (Network Access).

### 3. Construire et démarrer les conteneurs

```bash
docker compose up --build
```

La première exécution télécharge les images et installe les dépendances. Les lancements suivants sont plus rapides.

### 4. Initialiser Laravel (nouveau terminal)

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
| Frontend (React) | <http://localhost> |
| Backend API (Laravel) | <http://localhost:8000> |
| Vérification API | <http://localhost:8000/api/health> |

### Lancement rapide

```bash
git clone https://github.com/<votre-organisation>/vite-et-gourmand.git
cd vite-et-gourmand
cp backend/.env.example backend/.env
docker compose up --build

# Dans un nouveau terminal
docker compose exec backend php artisan key:generate
docker compose exec backend php artisan jwt:secret
docker compose exec backend php artisan migrate --seed
```

---

## Lancement sans Docker (Windows et WampServer)

Pour développer sans Docker, avec WampServer lancé (Apache et MySQL actifs).

### Backend

```powershell
cd backend
composer install
copy .env.example .env
# Dans .env : DB_HOST=127.0.0.1
php artisan key:generate
php artisan jwt:secret
php artisan migrate --seed
php artisan serve
```

L'API est disponible sur <http://localhost:8000/api>.

### Frontend

```powershell
cd frontend
npm install
npm start
```

L'application est disponible sur <http://localhost:3000>.

---

## Architecture Docker

Le projet orchestre trois services via Docker Compose :

| Service | Image | Port | Rôle |
|---------|-------|------|------|
| `backend` | `php:8.3-fpm-alpine` | `8000` | API REST Laravel (`php artisan serve`) |
| `frontend` | `node:20` et `nginx:alpine` | `80` | Build React servi par Nginx |
| `db` | `mysql:8.0` | `3306` (interne) | Base de données MySQL |

La base NoSQL (MongoDB Atlas) est externe aux conteneurs et accessible via `MONGODB_URI`.
Le service `backend` attend que `db` soit **healthy** avant de démarrer. Les données MySQL sont persistées dans un volume Docker nommé `db_data`.

---

## Commandes utiles

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

# Lister les routes de l'API
docker compose exec backend php artisan route:list
```

---

## Résolution des problèmes fréquents

### Le backend ne démarre pas (erreur de connexion à la base de données)

Le service `db` met quelques secondes à être prêt. Le healthcheck Docker gère l'attente automatiquement. Si le problème persiste :

```bash
docker compose down
docker compose up --build
```

### La clé APP_KEY est manquante

```bash
docker compose exec backend php artisan key:generate
```

### Les migrations échouent

Vérifier que le service `db` est bien `healthy` :

```bash
docker compose ps
```

Attendre quelques secondes et relancer la migration si nécessaire.

### Le port 80 ou 8000 est déjà utilisé

Modifier les ports dans `docker-compose.yml` (première valeur uniquement) :

```yaml
ports:
  - "8080:80"   # Frontend accessible sur http://localhost:8080
  - "8001:8000" # Backend accessible sur http://localhost:8001
```

### La page Menus affiche « Erreur de chargement »

Ouvrir l'onglet Network des outils de développement (F12) :

- Une erreur 404 indique une mauvaise URL : la route de l'API est `/api/menus` (au pluriel).
- Une erreur CORS ou un échec de connexion indique que l'URL de l'API (`REACT_APP_API_URL`) est incorrecte ou que le backend est arrêté.

### Le build échoue en CI mais pas en local

En CI, la variable `CI=true` transforme les avertissements ESLint (import ou variable inutilisé) en erreurs. Pour reproduire le comportement en local (PowerShell) :

```powershell
$env:CI="true"; npm run build
```

---

## CI/CD et déploiement

### Pipeline GitHub Actions

À chaque push sur `main` :

1. Installation des dépendances et build du frontend (`npm run build`).
2. Tests du frontend et du backend.
3. Déploiement sur Netlify et Render.

### Frontend — Netlify

- **Déclencheur** : push sur la branche `main`
- **Base directory** : `frontend`
- **Commande de build** : `npm run build`
- **Répertoire publié** : `frontend/build`
- **Variable à configurer** : `REACT_APP_API_URL` (URL de l'API backend)

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
>
> ℹ️ Les valeurs secrètes (`APP_KEY`, `JWT_SECRET`, `DB_PASSWORD`, `MONGODB_URI`) se saisissent dans l'interface Render (Environment), jamais dans le dépôt Git.
>
> ℹ️ Dans Atlas (Network Access), autorise les adresses IP sortantes de Render, sinon la connexion MongoDB sera refusée.
