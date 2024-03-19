import express, {Router} from 'express';

import * as todos from '../controller/todo.js';

const route = express.Router();

route.post('/addtodo',todos.addtodo);
route.get('/gettodos',todos.gettodo);
route.delete('/deletetodo/:id',todos.deletetodo);
route.put('/completetask',todos.completetask)

export default route
