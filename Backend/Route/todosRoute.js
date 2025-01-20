import express from 'express';
import { createTodo, deleteTodo, getTodo, updateTodo} from '../Controller/todosController.js';

const router = express.Router();

router.post('/create', createTodo);
router.get('/get', getTodo);
router.put('/update/:id', updateTodo);
router.delete('/delete/:id', deleteTodo);

export default router;