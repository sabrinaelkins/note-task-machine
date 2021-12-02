const router = require("express").Router()
const db = require("../db/db.json")


router.get("/api/notes", function(req,res){
    db = JSON.stringify(fs.readFileSync)("./db/db.json")
    res.json(db)
})
router.post("/api/notes", function(req,res){
    var apiNotes = {
        title: req.body.title,
        text: req.body.text,
        id: Math.floor(math.random()*1000)
    }
    db.push(apiNotes)
    fs.writeFileSync("./db/db.json", JSON.stringify(db))
    res.json(db)
})












module.exports = router