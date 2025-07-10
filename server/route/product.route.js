import express from 'express';
const router = express.Router();

// Sample route
router.get('/', (req, res) => {
  res.send('Product route is working!');
});

export default router;
