FROM node:11

# Create app directory
WORKDIR /nytbr/backend

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied

COPY ./backend/package*.json ./backend/
COPY ./common/package*.json ./common/

RUN npm install --prefix ./backend
RUN npm install --prefix ./common

# Bundle app source
COPY ./common ./common/
COPY ./backend ./backend/

EXPOSE ${NYTBR_BACKEND_PORT}

CMD [ "node", "backend/index.js" ]