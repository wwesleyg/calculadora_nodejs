const express = require("express")
const app = express()
const {somar, diminuir, multiplicar, dividir} = require("./controladores")

app.get("/somar", somar)
app.get("/diminuir", diminuir)
app.get("/multiplicar", multiplicar)
app.get("/dividir", dividir)

app.listen(3000)