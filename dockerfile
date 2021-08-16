FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install yarn

RUN yarn install

COPY . .

EXPOSE 7777

CMD ["yarn", "start-prod"]
