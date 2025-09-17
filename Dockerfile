FROM node:20-alpine

ENV NODE_ENV=production
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --omit=dev

COPY . .

RUN npx tsc

EXPOSE 3010

CMD ["node", "dist/server.js"]
