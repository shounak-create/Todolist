import Todo from '../Models/Todo.js'
import User from '../Models/Todo.js'

export const addtodo = async (req,res)=>{
    try{
        const newTodo = await Todo.create({
            data:req.body.data,
            completed:req.body.completed
        })
        await newTodo.save();
        return res.status(200).json(newTodo)
    } catch(e){
        return res.status(500).json(e.message)
    }
}

export const gettodo = async (req,res)=>{
    try{
        const todos = await Todo.find({});
        return res.status(200).json(todos)
    }catch(e){
        return res.status(500).json(e.message)
    }
}

export const deletetodo = async (req,res)=>{
    // console.log(req.body.data)
    try{
        const id = req.params.id
        const index = await Todo.findByIdAndDelete(id);
        return response.status(200).json(index);
    } catch(e){
        return res.status(500).json(e.message);
    }
}

export const completetask = async (req,res)=>{
    try{
        const boolean_value = req.body.data
        const index = await Todo.findByIdAndUpdate(boolean_value, { completed: true }, { new: true })
        if (!index) {
            return res.status(404).json({ error: 'Task not found' });
        }
        return res.status(200).json(index);
    } catch(e){
        return res.status(500).json(e.message);
    }
}

export const signup = async (req,res)=>{
    try{
        const newuser = await User.create({
            username: req.body.username,
            password:req.body.password
        });
        newuser.save();
        return res.status(200).json(newuser)
    } catch(e){
        return res.status(500).json(e.message);
    }
}

export const login = async (req,res) =>{
    try{
        const finduser = await User.find(req.body.username);
        return res.status(200).json(finduser)
    } catch(e){
        return res.status(500).json(e.message);
    }
}