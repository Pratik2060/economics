// Simple placeholder auth middleware
export default function auth(req, res, next) {
    // Allow all requests (no authentication)
    next();
}
