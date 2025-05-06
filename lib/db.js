const mongoose=require('mongoose')
const dotenv=require('dotenv').config()


        const connectdb=async()=>
        {
            try {
                await mongoose.connect(process.env.MONGODB_URI)
                console.log('connected to database')
            } catch (error) {
                console.error(error.message)
                process.exit(1)
            }
        }

        module.exports=connectdb
         
    
    

