FROM node:lts-alpine

RUN npm install -g http-server

RUN mkdir /login

WORKDIR /login

COPY packge*.json ./

COPY . .

RUN npm run build

EXPOSE 8080

CMD ["http-server", "dist"]
