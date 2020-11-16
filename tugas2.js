const express = require("express") 
const bodyParser = require("body-parser") 
const cors = require("cors")
const app = express()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true}))

app.use(cors())

// CELCIUS
app.get("/celcius/:suhu", (req, res) =>{
    let suhu = req.params.suhu

    let reamur = (4/5) * suhu
    let fahrenheit = (9/5 * suhu) + 32
    let kelvin = (suhu * 1) + 273

    let response = {
        celcius: suhu,
        result:  {
            reamur: reamur,
            fahrenheit: fahrenheit,
            kelvin: kelvin
        }
    }

    res.json(response)
})

// REAMUR
app.get("/reamur/:suhu", (req, res) =>{
    let suhu = req.params.suhu

    let celcius = (5/4) * suhu
    let fahrenheit = (9/4 * suhu) + 32
    let kelvin = (5/4 * suhu) + 273 

    let response = {
        reamur: suhu,
        result:  {
            celcius: celcius,
            fahrenheit: fahrenheit,
            kelvin: kelvin
        }
    }

    res.json(response)
})

// KELVIN
app.get("/kelvin/:suhu", (req, res) =>{
    let suhu = req.params.suhu

    let celcius =  (suhu * 1) - 273
    let fahrenheit = (9/5 * (suhu - 273) + 32)
    let reamur =  (4/5 * (suhu - 273))

    let response = {
        kelvin: suhu,
        result:  {
            celcius: celcius,
            fahrenheit: fahrenheit,
            reamur: reamur
        }
    }

    res.json(response)
})

// FAHRENHEIT
app.get("/fahrenheit/:suhu", (req, res) =>{
    let suhu = req.params.suhu

    let celcius =  (5/9 * (suhu - 32))
    let reamur = (4/9 * (suhu - 32))
    let kelvin =  (5/9 * (suhu - 32) + 273)

    let response = {
        fahrenheit: suhu,
        result:  {
            celcius: celcius,
            reamur: reamur,
            kelvin: kelvin
        }
    }

    res.json(response)
})


app.listen(7000,() =>{
    console.log("Server run on port 7000");   
})