const router = require("express").Router()
let db = require("../db/db.json")
const fs = require("fs")

router.get("/api/notes", function(req,res){
    db = JSON.parse(fs.readFileSync("./db/db.json","utf-8")) || []
    console.log("GET",db)
    res.json(db)
})
router.post("/api/notes", function(req,res){
    var apiNotes = {
        title: req.body.title,
        text: req.body.text,
        id: Math.floor(Math.random()*1000)
    }
    db.push(apiNotes)
    fs.writeFileSync("./db/db.json", JSON.stringify(db))
    console.log("Post",db)
    res.json(db)
})

router.delete("/api/notes/id",function(req,res){
    let recentNoteList = db.filter(note => note.id != req.params.id)
    db= recentNoteList;
    fs.writeFileSync("./db/db.json", JSON.stringify(db))
    console.log("del",db)
    res.json(db)
})

module.exports = router;











