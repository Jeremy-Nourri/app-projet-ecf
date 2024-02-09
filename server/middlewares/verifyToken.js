const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
    const cookie = req.cookies;
    const token = cookie.accessToken;
    if (!token) {
        return res.status(401).json({ message: "Vous devez être connecté pour accéder à cette page" });
    }

    try {
        const decoded = jwt.verify(token, process.env.RANDOM_TOKEN_SECRET);
        console.log(decoded);
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