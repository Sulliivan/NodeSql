module.exports = {
  addPlayer: (req, res) => {
      let firstname = req.body.firstname;
      let lastname = req.body.lastname;
      let email = req.body.email;
      let password = req.body.password;
      let position = req.body.position;
      let number = req.body.number;
      let image = req.image;

      let query = "INSERT INTO players (firstname, lastname, email, password, position, number) VALUES ('" + firstname + "', '" + lastname + "', '" +
      email +
      "', '" +
      password +
      "', '" +
      position +
      "', '" +
      number + "')";


                db.query(query, (err, result) => {
                  if (err) {
                    return res.status(500).send(err);
                  }
                  res.redirect("/");
                }); 
              }
            }