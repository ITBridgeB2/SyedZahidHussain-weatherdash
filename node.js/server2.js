const express = require("express");
const mysql = require("mysql2");
const axios = require("axios");
// require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "itbridge",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL!");
});

// Fetch Weather Data
app.get("/weather/:city", async (req, res) => {
  const city = req.params.city;
  const apiKey = "e7e265c36a2f4b222f9e31020547aeda";
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const weatherData = response.data;
    connection.query("INSERT INTO searches (city) VALUES (?)", [city]);
    res.json({
      city: weatherData.name,
      temperature: weatherData.main.temp,
      humidity: weatherData.main.humidity,
      weather: weatherData.weather[0].description,
    });
  } catch (error) {
    res.status(404).json({ error: "City not found" });
  }
});

// Get Search History
app.get("/searches", (req, res) => {
  connection.query("SELECT * FROM searches ", (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
//delete
app.delete("/searches/:id", async (req, res) => {
    const { id } = req.params;
  
    connection.query("DELETE FROM searches WHERE id = ?", [id], (err, result) => {
      if (err) return res.status(500).json({ error: "Database error" });
      if (result.affectedRows === 0) return res.status(404).json({ error: "Data not found" });
  
      res.status(204).end(); // No content response on success
    });
  });
  

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
