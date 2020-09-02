module.exports = {
    getSinglePlayer: (req, res) => {
        let id = req.params.id;
        let player = "SELECT firstname, lastname, position, number FROM players WHERE id = '" +
        id +
        "'";
        db.query( player, (err, result) => {
            console.log(result);
            if (err) {
                return res.status(500).send(err);
            }
             res.render("cartePlayer", {
                 player: result[0]
            })
        })
    }
}