// Simple placeholder admin middleware
export default function admin(req, res, next) {
    // Allow all requests (no admin check)
    next();
}
