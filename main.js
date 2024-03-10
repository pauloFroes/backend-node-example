import express from 'express'
import {vendas} from './vendas.js'

const app = express()
const port = 5000

app.get('/vendas', (req, res) => {
    const produto = req.query.prod
    const produtosVendidos = vendas.filter((venda)=>{
        return venda.nome === produto
    })

    const totalVendido = produtosVendidos.reduce((acumulado, venda)=>{
        return acumulado + venda.valor
    }, 0)

    const qtdVendas = produtosVendidos.length

    const resposta = {
        sucess: true,
        totalVendido: totalVendido,
        qtdVendas: qtdVendas,
        produtosVendidos: produtosVendidos
    }
    
    res.status(200).json(resposta)
})

app.post('/', (req, res) => {
    res.send('Cadastro feito com sucesso!')    
})

app.put('/', (req, res) => {
    res.send('Cadastro atualizado com sucesso!')    
})

app.delete('/', (req, res) => {
    res.send('Cadastro removido com sucesso!')    
})


app.listen(port, () => {
  console.log(`O servidor está rodando na porta ${port}`)
})

