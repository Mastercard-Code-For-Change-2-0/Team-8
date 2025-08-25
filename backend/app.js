const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const userRoutes = require('./Routes/userRoutes');
const adminRoutes = require('./Routes/adminRoutes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Server is running on port ' + port);
});

app.use('/api/users', userRoutes);
app.use('/api/admin', adminRoutes);

module.exports = app;