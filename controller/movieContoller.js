  const MovieIndex=(req,res)=>{
    res.send('get all movies')
    
}

    
  const movieCreate=(req,res)=>{
    console.log(req.body)
    return res.json(req.body)
    //res.send('create a movie')
}

const movieUpdate=(req,res)=>{
    res.send('update a movie')
}
const movieDelete=(req,res)=>{
    res.send('delete a movie')
}

module.exports={MovieIndex,movieCreate,movieUpdate,movieDelete}

