const express = require("express");
const cors = require("cors");
require("dotenv").config();
const pool = require("./db"); //import the PostgreSQL connection

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// test DB connection
app.get("/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ message: "Database connected!", time: result.rows[0].now });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database connection failed" });
  }
});

// Postcode check
app.post("/api/postcode", async (req,res)=>{
    try{
        const { code } = req.body;
        console.log("Received Postcode:", code);

        const result= await pool.query(
            "SELECT available FROM postcodes WHERE code=$1", [code]
        );
        if(result.rows.length >0){
            res.json({ available: result.rows[0].available});
        }
        else{
            res.json({ available: false});
        }
    }
    catch (err){
        console.err("Error checking postcode: ", err);
        res.status(500).json({ error: "Database error"});
    }
});

// Quote request route
app.post("/api/quote", async (req, res) => {
  try {
    const { name, email, details } = req.body;

    // Basic validation
    if (!name || !details) {
      return res.status(400).json({ error: "Name and details are required." });
    }

    // Save to database
    await pool.query(
      "INSERT INTO quotes (name, email, details) VALUES ($1, $2, $3)",
      [name, email, details]
    );

    // Respond to frontend
    res.json({ message: "Quote request received! We'll contact you soon." });
  } catch (err) {
    console.error("Error saving quote:", err);
    res.status(500).json({ error: "Database error" });
  }
});

// Contact Information
app.post("/api/contact", async (req,res)=>{
    try{
        const { name,email,message } = req.body;
        await pool.query(
            "INSERT INTO contacts (name, email, message) VALUES ($1, $2, $3)", [name, email, message]
        );
        res.json({ message: "Contact information received. We'll be in touch!" });
    }
    catch (err){
        console.error(err);
        res.status(500).json({ error: "Database error"});
    }
});
// Newsletter subscription
app.post("/api/subscribe", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: "Email is required" });

    await pool.query(
      "INSERT INTO newsletter_subscriptions (email) VALUES ($1)",
      [email]
    );

    res.json({ message: "Subscribed successfully!" });
  } catch (err) {
    console.error("Subscribe error:", err);
    res.status(500).json({ error: "Database error" });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
