const mongojs = require("mongojs");
const db = mongojs("fullapp", ["termini"]);

const showTerminController = (req, res) => {
  let user = req.session.user; // dohvaćamo korisnika iz sesije
  let id = req.params.id; // dohvaćamo id termina iz URL-a

  db.termini.find(
    {
      _id: mongojs.ObjectId(id),
    },
    (err, termin) => {
      res.render("savjetnik/showTermin", {
        name: user.first_name,
        termin: termin[0], // termin je niz, a mi želimo prvi element kojeg dohvaćamo
      });
    }
  );
};

module.exports = showTerminController;
