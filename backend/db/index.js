import{mongoose} from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

export const connectToDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Server is Connected")
    } catch (error) {
        console.log(error)
    }
}