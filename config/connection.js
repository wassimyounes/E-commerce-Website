import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const dbUri = process.env.CONNECTION_STRING;
let dbConnection;
try {
    dbConnection = mongoose.connect(dbUri)
    console.log("connected to databse")
} catch (error) {
    console.error("Connection error: ", error.message)
}


export default dbConnection;