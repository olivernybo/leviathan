# docker build --no-cache -t olivernybo/leviathan/website-api .
FROM node:14

WORKDIR /usr/src/app
COPY package*.json ./

RUN npm ci
COPY . .

EXPOSE 5000
CMD [ "node", "server.js" ]