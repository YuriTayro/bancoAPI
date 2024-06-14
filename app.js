import express from "express"

const app = express()
const port = 3000
app.use(express.json())

app.get('/conta', (req, res) => {
  res.json({
    conta_id: 1234,
    saldo: 18970
  })
})

app.post('/conta', (req, res) => {

        const {conta_id, saldo} = req.body
        if(!conta_id || !saldo){
            res.status(400).json({message: "Campos conta e saldo são obrigatórios"})
        }
    res.json({
      conta_id: 1234,
      saldo: 18970
    }).status(201)
  })
  //

  app.get('/conta/:id', (req, res)=>{
    res.json({
      conta_id: 1234,
      saldo: 18970
    })
  })

  app.post('/transacao', (req, res)=>{
    const {forma_pagamento, conta_id, valor} = req.body
    if(!forma_pagamento || !conta_id || !valor){
      res.status(400).json({message: "Os campos obrigatórios não foram enviados"})
    }

    res.status(201).json({
      conta_id: 1234,
      saldo: 18970
    })
  })


  app.listen(port, '0.0.0.0',() => {
    console.log(`Example app listening on port ${port}`)
  })