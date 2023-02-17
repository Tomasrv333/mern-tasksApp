import express from 'express';

const router = express.Router();

router.get('/hello', (req, res) => {
    try {
        res.json('hello world');
    } catch(err) {
        console.log(err)
    }
});

export default router;