import multer from 'multer';

// Basic multer storage config (stores files in memory)
const storage = multer.memoryStorage();
const upload = multer({ storage });

export default upload;
