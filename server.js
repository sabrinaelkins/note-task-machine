const expess= require("express")
const  app = express()
const PORT = process.env.PORT || 3003;


app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static("public"))



app.listien(PORT, function(){
    console.log(`App running on ${PORT}`)
})

