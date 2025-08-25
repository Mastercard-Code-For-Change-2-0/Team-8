const jwt = require('jsonwebtoken');
const config = require('../config.js');

async function authMiddleware(req, res, next) {
    const token = req.header('Authorization');
    if (!token || !token.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Access denied. No token provided.' });
    }
    const jwtToken = token.split(' ')[1];
    
    try{
        const decoded = jwt.verify(jwtToken, config.jwtSecret);
        req.user = decoded;
        next();
    }catch(error){
        return res.status(400).json({ error: 'Invalid token.' });
    }
}

module.exports = authMiddleware;