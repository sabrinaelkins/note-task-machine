const expess= require("express")
const  app = express()
const PORT = process.env.PORT || 3003;


app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static("public"))
app.use(require("./routes/apiroutes"))
app.use(require("./routes/htmlroutes"))


app.listen(PORT, function(){
    console.log(`App running on ${PORT}`)
})

