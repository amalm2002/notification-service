
FROM node:20-alpine

ENV NODE_ENV=production
WORKDIR /usr/src/app

COPY package*.json ./

RUN --mount=type=cache,id=npm-cache,target=/root/.npm \
    npm ci --omit=dev

COPY . .

EXPOSE 3010
CMD ["node", "dist/server.js"]
