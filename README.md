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

1-Right-click the Computer icon and choose Properties, or in Windows Control Panel, choose System.
2-Choose Advanced system settings.
3-On the Advanced tab, click Environment Variables.
4-Click New to create a new environment variable. Click Edit to modify an existing environment variable.

#### 2. On Unix
1-sudo -H gedit /etc/environment
2-VARNAME="my value"


### Adding Variables to your Environment

There are 3 ways to add variables to the environment where your app is running.

#### 1. Command-Line Arguments

When you run your node program/app you can include settings as environment variables
for example, try running the following:

```sh
PORT=5000 node printenv.js
```
Notice how the PORT variable is the *first element* displayed in the console?
You are now able to access the `PORT` value in your node.js script
by reference: `process.env.PORT`

including your config in the command you use to run your script/app gets
cumursome when you have lots of API Keys or Databases ...

#### 2. Export the Variable to your Environment

An improvement on this command-line arguments is to export the variable
in your terminal:

Type/paste this in your terminal window and tap enter:
```sh
export HELLO=WORLD
```
Now `printenv` or `node printenv.js` to see it printed!
the `HELLO` key is now available in the `process.env` object
try adding the following line to your `printenv.js` file:

```js
console.log(">> Hello", process.env.HELLO);
```
Now run it in your terminal:
```sh
node printenv.js
```
What do you see?

```sh
>> Hello WORLD
```

Exporting your keys to your environment using `export MY_VAR=HAI` works
but if you use a terminal that does not *save* your variables across sessions,
(e.g. if you close your terminal window!) you will have to keep exporting them!

Thankfully there's a ***3rd*** (*easier*) ***way***: https://github.com/dwyl/env2

#### 3. Use a `.env` file *locally* which you can `.gitignore`

The way we prefer to manage our Environment Variables on our development machines
is using a `.env` file which gets loaded into our app *once* and
adds any entries in the `.env` file to the `process.env` (*global object*).

We wrote the [**env2**](https://github.com/dwyl/env2)
***node.js module*** to load configuration from a `.env` or
`.json` file.

Loading your environment variables from a `.env` file is as easy as "ABC"!

##### A. Create your `.env` file

Create a `.env` file in the root of your project and insert
your key/value pairs in the following format of `KEY=VALUE`:

```sh
DB_HOST=127.0.0.1
DB_PORT=9200
DB_USER=TheSpecial
DB_PASS=EverythingIsAwesome
```

##### B. Install `env2` and save it to your `package.json`

Install the [**env2**](https://github.com/dwyl/env2)
module from NPM and save it as a Dependency in your
`package.json` file:

```sh
npm install env2 --save
```

##### C. Invoke `env2` and use the variable in your script

Loading your configuration is a 1-line call to node.js's `require` method
which loads [**env2**](https://github.com/dwyl/env2) and invokes it with
your `.env` file as the argument:

```js
require('env2')('.env');    // loads all entries into process.env

console.log(process.env.DB_HOST); // "127.0.0.1"
```

Now you can access any of the entries in your `.env` file as a key
in the `process.env` Object e.g: `process.env.PORT` is `9200` (in our example above).


##### D. Add `.env` to your `.gitignore` file!

```sh
echo .env >> .gitignore
```

This ensures that the `.env` is not "tracked" in .git and thus
will not be public on GitHub. i.e only visible on your local machine.  
If you are new/rusty on using `.gitignore` file to omit files/folders
from your Git/GitHub repo read: http://git-scm.com/docs/gitignore


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
npm run server

```
### Start Create React App

In a different terminal tab...

```bash
cd frontend
npm start

```

## Simple build for production

    $ yarn build
