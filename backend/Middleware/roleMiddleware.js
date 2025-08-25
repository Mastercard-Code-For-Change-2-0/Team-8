const e = require("express");

const roleMiddleware = (requiredRole) => {
    return (req, res, next) => {
        const userRole = req.user.role; // Assuming req.user is populated by previous middleware

        if (!requiredRole.includes(userRole)) {
            return res.status(403).json({ message: 'Access denied. Insufficient permissions.' });
        }
        next();
    };
}

module.exports = roleMiddleware;