FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build
# nu hamnar appens filer i dist-mappen
# alltså /app/dist inuti IMAGE

# http-server använder port 8080
EXPOSE 8080
CMD ["node", "/app/node_modules/http-server/bin/http-server", "dist" ]