
import mongoose from "mongoose"

const connection:{isConnected:boolean}={
    isConnected:false
};
const ConnecttoDB = async () => {
    try {
        if(connection.isConnected){
       console.log("already connected")
        }
        await mongoose.connect("mongodb+srv://sharoonmasih43:Donone@12@cluster1.kljfvvi.mongodb.net/CodingEra?retryWrites=true&w=majority&appName=Cluster1");
        connection.isConnected=true;
        console.log("connected to MOngodb");
    }
    catch (error) {
        console.log(error);
        console.error("Error connecting to MongoDB:", error); 

    }

}

export default ConnecttoDB;