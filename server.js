const express = require("express");
const app = express();
const routes = require("./routes");
const session = require("express-session");

const HALF_DAY = 1000 * 60 * 60 * 12; // 12 hours

const {
  PORT = 3000,
  NODE_ENV = "development",
  SESS_NAME = "sid",
  SESS_SECRET = "fullapp",
  SESS_LIFETIME = HALF_DAY,
} = process.env;

const IN_PROD = NODE_ENV === "production"; // true ako je NODE_ENV = "production", ali znamo da je false

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

app.use(
  session({
    name: SESS_NAME,
    resave: false,
    saveUninitialized: false,
    secret: SESS_SECRET,
    cookie: {
      maxAge: SESS_LIFETIME,
      sameSite: true,
      secret: IN_PROD, // true za HTTPS protokol - lokalno ne koristimo HTTPS, pa je false
    },
  })
);

app.set("view engine", "ejs");

app.use("/", routes);

app.listen(PORT, () => {
  console.log("Listening on port 3000");
});
