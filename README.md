# NYT's BESTREADS

New York Times Bestselling lists web app with React using The NYT's Books API & Google Books API. Top 15 bestselling fiction and non fiction books alongside a favourites section where you can add your favourite books. Clicking on a specific book takes you to it's amazon link so you can buy it.

## Requirements

For development, you will only need Node.js and a node global package, Npm or Yarn, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###
### Yarn installation
  In case you want to install yarn, just run the following command.

      $ npm install -g yarn

---

### Config File
config.json file exists in nytbr/frontend/src

````json
{
   "backendUrl": 
}
````
this value should reflect the value of the full path to the backend server. When running through the docker images or docker-compose this should reflect the path to the external url not the internal one.


### Variables you should add to your Enviroment

```json
{
   "NYTBR_BACKEND_PORT": , 
   "NYTBR_BACKEND_URL": ,
   "NYTBR_FIREBASE_APP_ID":,
   "NYTBR_FIREBASE_API_KEY":,
   "NYTBR_FIREBASE_AUTH_DOMAIN":,
   "NYTBR_FIREBASE_DATABASE_URL":,
   "NYTBR_FIREBASE_MESSAGING_SENDER_ID":,
   "NYTBR_FIREBASE_PROJECT_ID":,
   "NYTBR_FIREBASE_STORAGE_BUCKET":,
   "NYTBR_NYT_API_KEY":,
   "NYTBR_SECRET":,
   "NYTBR_DISCORD_TOKEN":,
   "NYTBR_FRONTEND_URL":,
}
```
### Adding Variables to your Environment
#### 1. On Windows

```
1-Right-click the Computer icon and choose Properties, or in Windows Control Panel, choose System.
2-Choose Advanced system settings.
3-On the Advanced tab, click Environment Variables.
4-Click New to create a new environment variable. Click Edit to modify an existing environment variable.
```

#### 2. On Unix

```
1-sudo -H gedit /etc/environment
2-VARNAME="my value"
```

## Installing

```bash
cd nytbr
cd backend
npm install

Open a new terminal
cd nytbr
cd frontend
npm install
```

## Running The App

### Start the Express Server

```bash
cd backend
node index.js

```

### Start the Discord Server

```bash
cd discord
node index.js

```

### Start Create React App

In a different terminal tab...

```bash
cd frontend
npm start

```
# Docker
## Build
to build the images run these commands
```bash
docker build -t backend -f ./backend/Dockerfile .
docker build -t discord -f ./discord/Dockerfile .
docker built -t frontend ./frontend
```
## Run
to run these images simply
```bash
docker run backend -env env_variable_name=env_variable_value
docker run discord -env env_variable_name=env_variable_value
docker run frontend
```
you will also need to add the -p option that specifies what ports to bridge from the vm to the image
## Docker Compose
the docker-compse.yml handles all the runtime config needed for the running of the images simply type
```bash
docker-compose build
docker-compose up
```

