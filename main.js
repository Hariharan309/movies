const express=require('express')
const app=express()
const port=3000
app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.get('/movies',(req,res)=>{})

app.post('/movies',(req,res)=>{})

app.put('/movies',(req,res)=>{})

app.delete('/movies',(req,res)=>{})



app.listen(port,()=>console.log(`Example app listening on port ${port}!`))

module.exports=app