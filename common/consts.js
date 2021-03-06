const prefix = "!nytbr";
const prefixShort = "!nb";

const profiles = {
  production: "prod",
  development: "dev"
};

const prefixes = {
  help: "help",
  favourites: "favourites",
  link: "link",
  books: "books",
  info: "info"
};

const discordTheme = {
  lightColor: "#888888",
  darkColor: "#222222"
};

const firebase = {
  errorMessage: {
    invalidPassword:
      "The password is invalid or the user does not have a password.",
    invalidIdentifier:
      "There is no user record corresponding to this identifier. The user may have been deleted.",
    duplicateEmail: "The email address is already in use by another account."
  }
};

const ours = msg => {
  var msgPrefix = msg.content.split(" ")[0].toLowerCase();
  return msgPrefix === prefix || msgPrefix === prefixShort;
};

const env = process.env;
var envs = {
  //common
  profile: env.NYTBR_PROFILE,
  logLevel: env.NYTBR_LOG_LEVEL,
  dbString: env.NYTBR_DB_CON,
  token: env.NYTBR_DISCORD_TOKEN,
  backendUrl: env.NYTBR_BACKEND_URL,
  backendPort: env.NYTBR_BACKEND_PORT,
  secret: env.NYTBR_SECRET,
  //discord
  helpMessage: env.NYTBR_HELP_MESSAGE,
  helpMap: env.NYTBR_HELP_MAP,
  frontendFullUrl: env.NYTBR_FRONTEND_URL,
  //Firebase
  apiKey: env.NYTBR_FIREBASE_API_KEY,
  authDomain: env.NYTBR_FIREBASE_AUTH_DOMAIN,
  databaseURL: env.NYTBR_FIREBASE_DATABASE_URL,
  projectId: env.NYTBR_FIREBASE_PROJECT_ID,
  storageBucket: env.NYTBR_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.NYTBR_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.NYTBR_FIREBASE_APP_ID,
  //nyt
  nytKey: env.NYTBR_NYT_API_KEY,
  //goodreads
  goodreadsKey: env.NYTBR_GOODREADS_API_KEY,
  //google books
  googleBooksKey: env.NYTBR_GOOGLE_API_KEY
};

const isDev = () => {
  return envs.profile !== profiles.production;
};

const utils = {
  ours,
  isDev
};

utils.ours.prefix = prefix;
utils.ours.prefixShort = prefixShort;

const emoji = {
  thumbsUp: "👍🏼",
  eye: "👁"
};

module.exports = {
  profiles,
  prefixes,
  utils,
  envs,
  emoji,
  firebase,
  discordTheme
};
