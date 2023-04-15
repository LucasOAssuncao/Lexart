import { mapError } from '../utils/mapError';
class ErrorHandler {
    static handle(err, _req, res, _next) {
        const { type, message } = err;
        return res.status(mapError(type)).json({ message });
    }
}
export default ErrorHandler;
//# sourceMappingURL=ErrorHandler.js.map