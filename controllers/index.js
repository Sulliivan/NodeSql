
// module -- export ce qui si trouve dans une const 
module.exports = {
    getHomePage : (req, res) => {

        let query = "SELECT * FROM players ORDER BY id ASC;"
        // variable qui contient la ligne de commande a envoyer a la base de donnée mysql

        //fonction qui envoi la ligne de commande qui
        db.query(query, (err, result) => {
        // db.query syntaxe qui dit envoi ca -- query est la variable
            if(err){
                res.send (err)
            }res.render("index", {players : result})
        })
    }
}