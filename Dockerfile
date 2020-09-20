# stage build
FROM node:14-alpine as builder

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY ./ /app/

RUN npm run build:staging


# stage deploy with nginx
# FROM nginx:1.19.2-alpine

# COPY ./nginx.conf /etc/nginx/nginx.conf
# COPY --from=builder /app/dist/browser /usr/share/nginx/html
# COPY --from=builder /app/dist/server /usr/share/nginx/html

# EXPOSE 80 443

# ENTRYPOINT ["nginx", "-g", "daemon off;"]

CMD [ "npm", "run", "serve:ssr" ]