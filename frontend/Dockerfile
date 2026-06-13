# Étape 1 : Build du frontend React
FROM node:20-alpine3.20 AS build

# Mise à jour des paquets
RUN apk update && apk upgrade

# Dossier de travail
WORKDIR /app

# Copier uniquement les fichiers nécessaires pour installer les dépendances
COPY package.json package-lock.json ./

# Installer les dépendances
RUN npm install --legacy-peer-deps

# Copier le reste du projet
COPY . .

# Build de l'application
RUN npm run build

# Étape 2 : Serveur Nginx pour servir le build
FROM nginx:alpine3.20

# Mise à jour des paquets
RUN apk update && apk upgrade

# Copier le build dans le dossier public de Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Supprimer la configuration par défaut et ajouter une config optimisée (optionnel)
RUN rm /etc/nginx/conf.d/default.conf

# Ajouter une configuration Nginx adaptée aux SPA React
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exposer le port 80
EXPOSE 80

# Lancer Nginx
CMD ["nginx", "-g", "daemon off;"]
