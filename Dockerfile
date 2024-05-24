# Utiliser une image de base officielle de Node.js
FROM node:16-alpine

# Définir le répertoire de travail
WORKDIR /usr/src/app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le reste du projet dans le conteneur
COPY . .

# Installer Husky (si nécessaire)
RUN npm run prepare

# Exposer le port sur lequel l'application s'exécute
EXPOSE 5173

# Commande pour démarrer l'application
CMD ["npm", "run", "dev"]
