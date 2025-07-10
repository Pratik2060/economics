import express from 'express';

const router = express.Router();

// Example route: GET /api/user/test
router.get('/test', (req, res) => {
    res.json({ message: 'User route is working!' });
});

export default router;
