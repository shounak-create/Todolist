import Todo from '../Models/Todo.js'

export const addtodo = async (req,res)=>{
    try{
        const newTodo = await Todo.create({
            data:req.body.data,
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
        const { data } = req.body;
        const index = await Todo.findByIdAndDelete(data);
        return response.status(200).json(index);
    } catch(e){
        return res.status(500).json(e.message);
    }
}
