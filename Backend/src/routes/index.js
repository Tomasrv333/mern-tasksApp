import express from 'express';
import taskRoutes from './tasks.js';

const router = express.Router();

router.use('/auth', authRoutes)
router.use('/tasks', taskRoutes);
router.use('/users',usersRoutes);

export default router;

