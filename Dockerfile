FROM node:10.2.1-alpine

WORKDIR /app
COPY package.json package-lock.json ./
RUN apk --update add postgresql-client && \
    npm install -qq

COPY knexfile.js entrypoint.sh ./
COPY migrations ./migrations

ENTRYPOINT [ "/app/entrypoint.sh" ]
CMD [ "npm", "run", "migrate" ]
