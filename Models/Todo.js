import mongoose from "mongoose";


const TodoSchema = new mongoose.Schema({
    data: {
        type: String,
        required: true
    },
    completed:{
        type: Boolean,
        required:false,
        default:false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
    // done: {
    //     type: Boolean,
    //     default: false
    // },
})

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required:true,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
    // done: {
    //     type: Boolean,
    //     default: false
    // },
})

const todo = mongoose.model('todo', TodoSchema);
const user = mongoose.model('user', UserSchema);

export default {todo,user};