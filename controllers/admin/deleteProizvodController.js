const mongojs = require("mongojs");
const db = mongojs("fullapp", ["proizvodi"]);

const deleteProizvodController = (req, res) => {
  let proizvodId = req.params.proizvodId;
  db.proizvodi.remove({ _id: mongojs.ObjectID(proizvodId) }, (err, docs) => {
    res.send("OK"); // Pošto je korišten AJAX, ne treba nam redirekcija na neku stranicu
  });
};

module.exports = deleteProizvodController;
