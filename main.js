const express=require('express')
const connectdb=require('./lib/db')
const app=express()
const port=3000
app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.use('/movies',require('./routes/movie'))


connectdb()


app.listen(port,()=>console.log(`Example app listening on port ${port}!`))

module.exports=app