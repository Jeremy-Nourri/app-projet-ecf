const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
    const authHeader = req.headers.authorization;

    const token = authHeader.split(' ')[1];
    if(!token) {
        return res.status(401).json({ message: "Aucun token" });
    }
    
    try {
        const decoded = jwt.verify(token, process.env.RANDOM_TOKEN_SECRET);
        req.auth = {
            userId: decoded.userId,
        };
        return next();
    }
    catch (error) {
        res.status(401).json({ message: "Token invalide", error: error.message });
    }
}

module.exports = verifyToken;