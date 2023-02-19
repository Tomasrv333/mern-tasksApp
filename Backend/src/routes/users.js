import express from 'express';
import { getUserInfo, updateUser } from '../controllers/user';

const router = express.Router();

router.get('/me/info', getUserInfo)
router.put('/me', updateUser)

export default router;