import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const USERNAME  = process.env.DB_USERNAME
const PASSWORD = process.env.DB_PASSWORD

const Connection = () =>{
    const MONGODB_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@todo.amebsgs.mongodb.net/?retryWrites=true&w=majority`
    // const MONGODB_URL = `mongodb://${USERNAME}:${PASSWORD}@ac-ggpqfdq-shard-00-00.amebsgs.mongodb.net:27017,ac-ggpqfdq-shard-00-01.amebsgs.mongodb.net:27017,ac-ggpqfdq-shard-00-02.amebsgs.mongodb.net:27017/?ssl=true&replicaSet=atlas-8f388c-shard-0&authSource=admin&retryWrites=true&w=majority`

    mongoose.connect(MONGODB_URL,{useNewUrlParser : true})

    mongoose.connection.on('connected',()=>console.log(`Database connected successfully`))
    mongoose.connection.on('disconnected',()=>console.log(`Database disconnected`))
    mongoose.connection.on('error',()=>{console.log('Error while connecting database', error.message)})
}

export default Connection