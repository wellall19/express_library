FROM node:20.10-alpine

WORKDIR /app

ARG NODE_ENV=PRODUCTION  
COPY package*.json ./
RUN npm install
COPY . .

CMD ["node", "index.js"]