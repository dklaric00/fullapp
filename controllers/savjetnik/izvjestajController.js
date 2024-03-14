const mongojs = require("mongojs");
const db = mongojs("fullapp", ["termini"]);

const izvjestajController = (req, res) => {
  let id = req.params.id;

  db.termini.update(
    {
      _id: mongojs.ObjectId(id),
    },
    {
      $set: {
        active: false,
      },
    },
    (err, docs) => {
      // Provjeriti err, ali za sada samo redirektujemo
      res.redirect("/savjetnik");
    }
  );
};

module.exports = izvjestajController;
