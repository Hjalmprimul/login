FROM node:12.22.1-alpine3.11

RUN npm install -g http-server

RUN mkdir /login

WORKDIR /login

COPY packge*.json ./

COPY . .

RUN npm i

RUN npm run build

EXPOSE 8080

CMD ["http-server", "dist"]
