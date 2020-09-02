module.exports = {
    getHomePage : (req, res) => {
        let query = "SELECT * FROM players ORDER BY id ASC;"
        db.query(query, (err, result) => {
            console.log(result);
            if(err){
                res.send (err)
            }res.render("index", {players : result})
        })
    }
}