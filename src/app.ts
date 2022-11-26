// 1 - iniciando projeto
//console.log("Express + TS!!!");

//  init express
import express from 'express'

const app = express()

app.get("/", (req, res)=>{
    return res.send("Hello express!")
})

app.listen(3000,()=>{
    console.log("Aplicação de TS + Express funcionando!")
});