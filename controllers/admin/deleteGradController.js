const mongojs = require("mongojs");
const db = mongojs("fullapp", ["gradovi"]);

const deleteGradController = (req, res) => {
  let gradId = req.params.gradId;
  db.gradovi.remove({ _id: mongojs.ObjectID(gradId) }, (err, docs) => {
    res.send("OK"); // Pošto je korišten AJAX, ne treba nam redirekcija na neku stranicu
  });
};

module.exports = deleteGradController;
