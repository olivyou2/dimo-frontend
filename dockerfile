FROM node:latest

ADD . /app

WORKDIR /app

RUN npm install -g pnpm
RUN pnpm install
RUN npm run build

ENV VITE_BACKEND_URL=https://api.untitle.xyz:8084

EXPOSE 4173

CMD ["npm", "run", "preview"]