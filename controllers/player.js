module.exports = {
    getSinglePlayer: (req, res) => {
        let id = req.params.id;
        let player = "SELECT firstname, lastname, position, number FROM players WHERE id = '" +
        id +
        "'";
        db.query( player, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
             res.render("cardPlayer", {
                 player: result[0]

            })
        })
    }, 


// recupérer afficher un joueur
    getUpdateSinglePlayer : (req, res) => {
        let id = req.params.id;
            let player = "SELECT id, firstname, lastname, position, number FROM players WHERE id = '" + id + "'";
            
            db.query( player, (err, result) => {
                if (err) {
                    return res.status(500).send(err);
                }
                res.render("edit", {
                    player: result[0]
                })
            })
        },
    

 // modifier une page
    updateSinglePlayer : (req, res) => {
        let id = req.params.id;

            let firstname = req.body.firstname;
            let lastname = req.body.lastname;
            let position = req.body.position;
            let number = req.body.number;   
        

        let player = "UPDATE players SET firstname = '" + firstname + "',lastname = '" + lastname + "', position = '" + position +  "', number = '" + number + "' WHERE id = '" + id + "'";
            
            db.query( player, (err, result) => {
                console.log(result);
                if (err) {
                    return res.status(500).send(err);
                }
                res.redirect("/")
                }) 
        },


// supprimer un joueur 
        deleteSinglePlayer : (req, res) => {
            let id = req.params.id;

            let player = "DELETE FROM players WHERE       id = '" + id + "'";
    
            db.query( player, (err, result) => {
                console.log(result);
                if (err) {
                    return res.status(500).send(err);
                }
                res.redirect("/")
            })
    }
}