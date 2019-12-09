FROM node:11

# Create app directory
WORKDIR /nytbr/discord

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied

COPY ./discord/package*.json ./discord/
COPY ./common/package*.json ./common/

RUN npm install --prefix ./discord
RUN npm install --prefix ./common

# Bundle app source
COPY ./common ./common/
COPY ./discord ./discord/

CMD [ "node", "discord/index.js" ]