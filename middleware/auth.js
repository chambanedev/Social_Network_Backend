// Importations
const jwt = require('jsonwebtoken');

exports.checkAuth = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.JWT_KEY);
        const userId = decodedToken.userId;

        if(req.body.userId && req.body.userId !== userId) {
            throw 'Invalid credentials'
        } else {
            next();
        }
    }
    catch {
        return res.status(401).json({
            'message': 'Invalid or expired token provided !',
            'error': e
        });
    }
}