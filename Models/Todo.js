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

const todo = mongoose.model('todo', TodoSchema);

export default todo;