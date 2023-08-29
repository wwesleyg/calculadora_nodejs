function somar(req, res){
    const {num1 ,num2} = req.query
    let total = Number(num1) - Number(num2)
    return res.json(total)
}

function diminuir(req, res){
    const {num1 ,num2} = req.query
    let total = Number(num1) - Number(num2)
    return res.json(total)
}

function multiplicar(req, res){
    const {num1 ,num2} = req.query
    let total = Number(num1) * Number(num2)
    return res.json(total)
}

function dividir(req, res){
    const {num1 ,num2} = req.query
    let total = Number(num1) / Number(num2)
    return res.json(total)
}

module.exports ={
    somar,
    diminuir,
    multiplicar,
    dividir
}