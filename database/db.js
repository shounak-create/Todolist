import mongoose from 'mongoose'

export const Connection = ()=>{
    const MONGOURL = 'mongodb+srv://shounakpandit47:FyR5RtSToLikoyoB@cluster0.saldg42.mongodb.net/'
    mongoose.connect(MONGOURL, {useNewUrlParser:true});

    mongoose.connection.on('connected',()=>{
        console.log("Database connected successfully");
    })

    mongoose.connection.on('disconnected',()=>{
        console.log("Database disconnected successfully");
    })

    mongoose.connection.on('error',(error)=>{
        console.log("Error while connecting the database.",error.message);
    })

}

export default Connection;