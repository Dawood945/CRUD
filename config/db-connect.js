import express, { json } from 'express';
import { connect } from 'mongoose';
import { config } from 'dotenv';
config();
const app = express()
app.use(json())

const url = process.env.MONGO_URL;

const db = async() => {(connect(url)
    .then(()=>{
    console.log("Database connected successfully");
}
).catch((error) => {
    console.log("Error connecting to MongoDB", error)
}))}

export default db;

