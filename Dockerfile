FROM node:18.19.0 as deps
LABEL maintainer="Benz Nattapong.T"

ARG WORKDIR=/app
ARG PORT=3000

WORKDIR ${WORKDIR}

COPY --chown=node:node package*.json ${WORKDIR}
RUN npm install
COPY . .
RUN npm run build

EXPOSE ${PORT}
CMD ["npm", "start"]

