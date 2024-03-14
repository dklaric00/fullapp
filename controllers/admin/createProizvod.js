const mongojs = require("mongojs");
const db = mongojs("fullapp", ["users", "gradovi", "proizvodi"]);

const createProizvod = (req, res) => {
  let name = req.body.name;
  let price = req.body.price;
  let description = req.body.description;

  db.proizvodi.insert(
    {
      name: name,
      price: price,
      description: description,
    },
    (err, docs) => {
      // Check for error
      res.redirect("/admin");
    }
  );
};

module.exports = createProizvod;
