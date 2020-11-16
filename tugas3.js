const express = require("express") 
const bodyParser = require("body-parser") 
const cors = require("cors")
const app = express()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true}))

app.use(cors())

app.get("/angka/:biner/", (req,res) => {
        let biner = req.params.biner
       
        convertBase.bin2dec = convertBase(2, 10);
    
        let y =convertBase.bin2dec(r)

        let response = {
        biner = biner
           hasil = r
        }
    
       
        res.json(response)
    
    })
    
    app.listen(8080, () => {
        console.log("Server run on port 8080");
    })