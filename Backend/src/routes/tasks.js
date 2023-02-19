import express from 'express';
import { createTask, getAllTasks, getCurrentUserTasks } from '../controllers/task.js';

const router = express.Router();

router.post('/', createTask)
router.get('/all', getAllTasks)
router.get('/myTasks', getCurrentUserTasks)
router.put('/:taskId', updateTask)

export default router;