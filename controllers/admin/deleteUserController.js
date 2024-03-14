const mongojs = require("mongojs");
const db = mongojs("fullapp", ["users"]);

const deleteUserController = (req, res) => {
  let userId = req.params.userId; // userId smo ga nazvali u ruti /delete/user/:userId
  db.users.remove({ _id: mongojs.ObjectID(userId) }, (err, docs) => {
    res.send("OK"); // Pošto je korišten AJAX, ne treba nam redirekcija na neku stranicu
  });
};

module.exports = deleteUserController;
