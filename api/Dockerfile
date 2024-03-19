FROM node:14

RUN apt-get update && apt-get install -y netcat

WORKDIR /app
COPY ./package.json .
RUN npm install
COPY . .
RUN chmod +x wait-for-db.sh
RUN npx tsc
CMD npm start