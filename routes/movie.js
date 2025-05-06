const express=require('express')
const app=express()
const router=express.Router()



router.get('/',(req,res)=>{
    res.send('get all movies')
})

router.post('/',(req,res)=>{
    res.send('post a movie')
})

router.put('/',(req,res)=>{
    res.send('update a movie')
})

router.delete('/',(req,res)=>{
    res.send('delete a movie')
}) 

module.exports=router