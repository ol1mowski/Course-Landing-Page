FROM node:18-alpine as build

WORKDIR /app/client
COPY client/package*.json ./
RUN npm install
COPY client ./
RUN npm run build

FROM node:18-alpine
WORKDIR /app
COPY server/package*.json ./
RUN npm install

COPY server ./
COPY --from=build /app/client/dist ./public

ENV NODE_ENV=production

EXPOSE 3000

CMD ["npm", "run", "dev"] 