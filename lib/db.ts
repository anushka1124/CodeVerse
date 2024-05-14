import mongoose, { Connection } from "mongoose";

let isConnected:Connection | boolean = false;

const connectDatabase = async () => {
    if(isConnected){
        console.log("MongoDb is already connected")
        return isConnected;
    }
    try {
        const res = await mongoose.connect("mongodb+srv://anushkasrivastava1124:Anushka24@cluster0.irpsuku.mongodb.net/");
        isConnected = res.connection;
        console.log("mongodb connected successfully.");
        return isConnected;
    }catch (error) {
        console.log("here is the error" ,error);
        throw error;
    }
}

export default connectDatabase;