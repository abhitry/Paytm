const { JWT_SECRET } = require("./config");
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    //console.log("Incoming Request Headers:", req.headers); 
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        //console.error("Authorization header missing or incorrect format");
        return res.status(403).json({});
    }

    const token = authHeader.split(' ')[1];
    //console.log("Extracted Token:", token);

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        //console.log("Decoded Token Data:", decoded);
        req.userId = decoded.userId;

        next();
    } catch (err) {
        //console.error("Token verification failed:", err.message); 
        return res.status(403).json({});
    }
};

module.exports = {
    authMiddleware
}