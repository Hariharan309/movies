const express=require('express')
const app=express()
 const router=express.Router()
const {MovieIndex, movieCreate, movieUpdate, movieDelete}=require('../controller/movieContoller')
//import {MovieIndex} from('../controller/movieContoller')



router.get('/',MovieIndex)
    
router.post('/',movieCreate)

router.put('/:id',movieUpdate)

router.delete('/:id',movieDelete) 

module.exports=router