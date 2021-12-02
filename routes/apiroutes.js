const router = require("express").Router()
const db = require("../db/db.json")


router.get("/api/notes", function(req,res){
    db = JSON.stringify(fs.readFileSync)("./db/db.json")
    res.json(db)
})













module.exports = router