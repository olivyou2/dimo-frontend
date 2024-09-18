FROM node:latest

RUN mkdir /app
WORKDIR /app

ADD package.json /app
RUN npm install

ADD . /app
RUN npm run build

ENV VITE_BACKEND_URL=https://api.untitle.xyz/

EXPOSE 4173

CMD ["npm", "run", "preview"]
