# syntax=docker/dockerfile:1

FROM node:12.18.1
ENV NODE_ENV production

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production --silent && mv node_modules ../

COPY . .

EXPOSE 3000

ENTRYPOINT ["npm","start"]