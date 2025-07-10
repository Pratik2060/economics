import express from 'express';

const router = express.Router();

// Example route: GET /api/category/test
router.get('/test', (req, res) => {
    res.json({ message: 'Category route is working!' });
});

export default router;
