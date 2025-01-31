require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const redis = require("redis");

const faqRoutes = require("./routes/faqRoutes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error(" Connection Error:", err));

// Redis Connection
const redisClient = redis.createClient({
  url: process.env.REDIS_URL || "redis://127.0.0.1:6379",
});

redisClient.on("error", (err) => console.error("Redis Error:", err));

redisClient.connect()
  .then(() => console.log("✅ Connected to Redis"))
  .catch((err) => console.error(" Redis Connection Failed:", err));

app.use("/api/faqs", faqRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
