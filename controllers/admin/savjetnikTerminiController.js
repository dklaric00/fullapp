const mongojs = require("mongojs");
const db = mongojs("fullapp", ["termini"]);

const savjetnikTerminiController = (req, res) => {
  let name = req.params.name; // koristi se params jer je postavljen name u ruti
  let user = req.session.user;

  db.termini.find({ savjetnik: name }, (err, termini) => {
    res.render("admin/savjetnikTermini", {
      name: name,
      termini: termini,
    });
  });
};

module.exports = savjetnikTerminiController;
