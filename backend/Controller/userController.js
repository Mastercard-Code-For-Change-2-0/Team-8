const {connect} = require('../Services/sqlservice');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const SALT_ROUNDS = 10;
const JWT_SECRET = process.env.JWT_SECRET

const connection = connect();

async function handleRegisterUser(req, res) {
    const {name, email,password} = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Name, email, and password are required' });
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    const hashedname = await bcrypt.hash(name, SALT_ROUNDS);

    const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    connection.query(query, [hashedname, email, hashedPassword], (err, results) => {
        if (err) {
            console.error('Error registering user:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
    });

    const user = connection.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
        if (err) {
            console.error('Error fetching user:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
    });
   
    const payload = {
        id : user.id,
        name: name,
        email: email
    };

    const token = jwt.sign(payload, JWT_SECRET);
    res.status(201).json({ message: 'User registered successfully', token });

}

async function handleLoginUser(req,res){
    const {email,password} = req.body;
    if(!email || !password){
        return res.status(400).json({message: 'Email and password are required'});
    }

    connection.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
        if (err) {
            console.error('Error fetching user:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        const user = results[0];
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const payload = {
            id : user.id,
            name: user.name,
            email: user.email
        };

        const token = jwt.sign(payload, JWT_SECRET);
        res.status(200).json({ message: 'Login successful', token });
    });

}

module.exports = { handleRegisterUser, handleLoginUser };