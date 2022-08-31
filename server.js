const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const session = require("express-session");
const sequelize = require("./config/connection");
const routes = require("./controllers");
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: process.env.secret,
  cookie: { /* set to 5 mins for testing */  maxAge: 300000 },
  resave: false,
  saveUnInitialized: true,
  store: new SequelizeStore({ db: sequelize }),
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});