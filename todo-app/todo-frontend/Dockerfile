
FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN npm ci

RUN npm run build

ENV REACT_APP_BACKEND_URL='/api/'

RUN npm install -g serve

CMD ["serve", "build"]

RUN CI=true npm test


