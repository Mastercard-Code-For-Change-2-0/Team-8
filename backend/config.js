require("dotenv").config();

module.exports = {
    port: process.env.PORT || 3000,
    db: {
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || 'root',
        database: process.env.DB_NAME || 'hackathon_portal',
        port: process.env.DB_PORT || 3306
    },
    jwtSecret: process.env.JWT_SECRET
};
