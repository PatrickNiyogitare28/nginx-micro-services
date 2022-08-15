FROM node:18-alpine

WORKDIR /usr/app

COPY package.json .

RUN npm install -g npm@8.17.0

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "run", "start"]