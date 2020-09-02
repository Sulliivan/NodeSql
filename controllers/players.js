addPlayer: (req, res) => {
    let first_name = req.body.first_name;
    let last_name = req.body.last_name;

    
              let query =
                "INSERT INTO `players` (firstname, lastname, email, password ,position, number, image) VALUES ('" +
                first_name +
                "', '" +
                last_name +
                "')";


              db.query(query, (err, result) => {
                if (err) {
                  return res.status(500).send(err);
                }
                res.redirect("/");
              }); 
            }