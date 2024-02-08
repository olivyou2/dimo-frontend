FROM node:21-alpine3.18

ADD . /app

WORKDIR /app

RUN npm install
RUN npm run build

EXPOSE 4173

CMD ["npm", "run", "preview"]