# stage build
FROM node:14-alpine as builder

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY ./ /app/

RUN npm run build:staging

CMD [ "npm", "run", "serve:ssr" ]