FROM node:14

WORKDIR /app
COPY ./package.json .

# Installation des dépendances
RUN npm install

# Copie des fichiers sources
COPY . .

# Compilation TypeScript
RUN npx tsc

RUN chmod +x app.sh

CMD ./app.sh