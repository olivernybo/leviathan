# docker build --no-cache -t olivernybo/leviathan/jwt-authentication-server .
FROM node:14

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm ci
COPY . .

EXPOSE 3000
CMD [ "node", "server.js" ]