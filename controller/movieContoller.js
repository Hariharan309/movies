  const MovieIndex=(req,res)=>{
    res.send('get all movies')
    
}

    
  const movieCreate=(req,res)=>{
    res.send('create a movie')
}

const movieUpdate=(req,res)=>{
    res.send('update a movie')
}
const movieDelete=(req,res)=>{
    res.send('delete a movie')
}

module.exports={MovieIndex,movieCreate,movieUpdate,movieDelete}

