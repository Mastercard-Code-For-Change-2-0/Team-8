const { connect } = require("../Services/sqlservice");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const SALT_ROUNDS = 10;
const JWT_SECRET = process.env.JWT_SECRET;

const connection = connect();

async function handleRegisterUser(req, res) {
  const {
    name,
    email,
    password,
    phone,
    college,
    grad_year,
    curr_year,
    field_of_study,
  } = req.body;
  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ message: "Name, email, and password are required" });
  }

  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
  const hashedname = await bcrypt.hash(name, SALT_ROUNDS);

  try {
    const query =
      "INSERT INTO student (name, email, password, phone, college, grad_year, curr_year, field_of_study) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    connection.query(
      query,
      [
        hashedname,
        email,
        hashedPassword,
        phone,
        college,
        grad_year,
        curr_year,
        field_of_study,
      ],
      (err, results) => {
        if (err) {
          console.error("Error registering user:", err);
          return res.status(500).json({ message: "Internal server error" });
        }

        const user = connection.query(
          "SELECT * FROM student WHERE email = ?",
          [email],
          (err, results) => {
            if (err) {
              console.error("Error fetching user:", err);
              return res.status(500).json({ message: "Internal server error" });
            }
            if (results.length === 0) {
              return res.status(404).json({ message: "User not found" });
            }
          }
        );

        const payload = {
          id: user.id,
          name: name,
          email: email,
        };

        const token = jwt.sign(payload, JWT_SECRET);
        res
          .status(201)
          .json({ message: "User registered successfully", token });
      }
    );
  } catch (e) {
    console.error("Error during registration:", e);
    return res.status(500).json({ message: "Internal server error" });
  }
}

async function handleLoginUser(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }
  try {
    connection.query(
      "SELECT * FROM student WHERE email = ?",
      [email],
      async (err, results) => {
        if (err) {
          console.error("Error fetching user:", err);
          return res.status(500).json({ message: "Internal server error" });
        }
        if (results.length === 0) {
          return res.status(404).json({ message: "User not found" });
        }

        const user = results[0];
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
          return res.status(401).json({ message: "Invalid credentials" });
        }

        const payload = {
          id: user.id,
          name: user.name,
          email: user.email,
        };

        const token = jwt.sign(payload, JWT_SECRET);
        res.status(200).json({ message: "Login successful", token });
      }
    );
  } catch (e) {
    console.error("Error during login:", e);
    return res.status(500).json({ message: "Internal server error" });
  }
}

async function markInterest(req, res) {
  const { event_id, student_email } = req.body;

  const query =
    "INSERT INTO hackathon_portal.lead (event_id, student_email) VALUES (?, ?)";
  connection.query(query, [event_id, student_email], (err, results) => {
    if (err) {
      console.error("Error marking interest:", err);
      return res.status(500).json({ message: "Internal server error" });
    }
    res.status(201).json({ message: "Interest marked successfully" });
  });
}

async function participatedEvents(req, res) {
  const { id } = req.params;
  const query = "Select * from student where student_id = ?";

  connection.query(query, [id], (err, results) => {
    if (err) {
      console.error("Error fetching user:", err);
      return res.status(500).json({ message: "Internal server error" });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    const useremail = results[0].email;
    const query2 =
      "Select e.title, e.description, e.start_date, e.end_date, e.venue, l.status from event e inner join hackathon_portal.lead l on e.event_id = l.event_id where l.student_email = ?";
    connection.query(query2, [useremail], (err, results) => {
      if (err) {
        console.error("Error fetching events:", err);
        return res.status(500).json({ message: "Internal server error" });
      }
      res.status(200).json(results);
    });
  });
}

async function updateStatus(req,res){
    const {event_id, student_email, status} = req.body;
    const query = "UPDATE hackathon_portal.lead SET status = ? WHERE event_id = ? AND student_email = ?";
    connection.query(query, [status, event_id ,student_email], (err, results) => {
        if (err) {
            console.error('Error updating status:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Lead not found' });
        }
        res.status(200).json({ message: 'Status updated successfully' });
    });
}

module.exports = {
  handleRegisterUser,
  handleLoginUser,
  markInterest,
  participatedEvents,
  updateStatus
};
