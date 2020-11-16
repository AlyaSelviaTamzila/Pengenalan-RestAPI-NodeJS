const express = require("express") 
const bodyParser = require("body-parser") 
const cors = require("cors")
const app = express()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true}))

app.use(cors())

app.post("/vbalok", (req, res) => { 
    let panjang = Number(req.body.panjang)
    let tinggi = Number(req.body.tinggi)
    let lebar = Number(req.body.lebar)

    let volume = panjang * lebar * tinggi

    let response = {
        panjang: panjang,
        tinggi: tinggi,
        lebar: lebar,
        volume: volume
    }

    res.json(response)
})

app.post("/lpbalok", (req, res) => { 
    let panjang = Number(req.body.panjang)
    let tinggi = Number(req.body.tinggi)
    let lebar = Number(req.body.lebar)

    let luasPermukaan = 2 * ((panjang * lebar) + (lebar * tinggi) * (tinggi * panjang))

    let response = {
        panjang: panjang,
        tinggi: tinggi,
        lebar: lebar,
        luasPermukaan: luasPermukaan
    }

    res.json(response)
})

app.post("/vkubus", (req, res) =>{
    let  sisi = Number(req.body.sisi)

    let volume = sisi * sisi * sisi

    let response = {
        sisi: sisi,
        volume: volume
    }

    res.json(response)
})

app.post("/lpkubus", (req, res) =>{
    let sisi = Number(req.body.sisi)

    let luasPermukaan = 6 * sisi * sisi

    let response = {
        sisi: sisi,
        luasPermukaan: luasPermukaan
    }

    res.json(response)
})

// menjalankan server pada port 9000
app.listen(9000, () => {
        console.log("Server run on port 9000");
    })