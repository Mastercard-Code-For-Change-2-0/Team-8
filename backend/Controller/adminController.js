const bcypt = require('bcrypt');
const {connect} = require('../Services/sqlservice');
const jwt = require('jsonwebtoken');
const config = require('../config.js');

const connection = connect();

async function loginAdmin(req,res){
    const { email, password } = req.body;

    const query = 'SELECT * FROM admin WHERE email = ?';
    connection.query(query, [email], async (err, results) => {
        if (err) {
            console.error('Error during admin login:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        if (results.length === 0) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const admin = results[0];
        const isPasswordValid = await bcypt.compare(password, admin.password_hash);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Generate JWT token
        const token = jwt.sign({ id: admin.id, role: admin.role}, config.jwtSecret, { expiresIn: '1h' });
        res.status(200).json({ token });
    });  
}

async function addEventAdmin(req,res){
    const { name,email,password } = req.body;
   
    const hashedPassword = await bcypt.hash(password,10);
    
    const query = 'INSERT INTO admin (name, email, password_hash) VALUES (?, ?, ?)';
    connection.query(query, [name, email, hashedPassword], (err, results) => {
        if (err) {
            console.error('Error adding admin:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(201).json({ message: 'Admin added successfully' });
    });
}

async function addEvent(req,res){
    const {title, description, start_date, end_date, last_date_of_registeration, venue} = req.body;

    const query = 'INSERT INTO event (title, description, start_date, end_date, last_dateof_registration, venue, created_by) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const {id} = req.params;
    connection.query(query, [title, description, start_date, end_date, last_date_of_registeration, venue, id], (err, results) => {
        if (err) {
            console.error('Error adding event:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(201).json({ message: 'Event added successfully' });
    });
}

async function getAllEvents(req,res){
    const query = 'SELECT * FROM event';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching events:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(200).json(results);
    });
}

async function getAdminEvent(req,res){
    const {id} = req.params;
    const query = 'SELECT * FROM event WHERE created_by = ?';
    connection.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error fetching events:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(200).json(results);
    });
}

async function getEventById(req,res){
    const {id} = req.params;
    const query = 'SELECT * FROM event WHERE event_id = ?';
    connection.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error fetching event:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.status(200).json(results[0]);
    });
}

async function getLead(req,res){
    const {id} = req.params;
    const query = "Select S.student_email, e.title, status from hackathon_portal.lead S inner join event e on S.event_id = e.event_id where e.created_by = ?";
    
    connection.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error fetching leads:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(200).json(results);
    });

}
module.exports = {
    loginAdmin ,
    addEventAdmin, 
    addEvent, 
    getAllEvents, 
    getEventById,
    getAdminEvent,
    getLead
};