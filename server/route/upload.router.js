import express from 'express';

const router = express.Router();

// Example route: GET /api/file/test
router.get('/test', (req, res) => {
    res.json({ message: 'Upload route is working!' });
});

export default router;
