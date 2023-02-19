import express from 'express';
import tasksRoutes from './tasks.js';
import usersRoutes from './users.js';
import authRoutes from './auth.js';
import { checkAuth } from '../utils/checkAuth.js';

const router = express.Router();

router.use('/auth', authRoutes)
router.use('/tasks', checkAuth, tasksRoutes);
router.use('/users', checkAuth, usersRoutes);

export default router;

