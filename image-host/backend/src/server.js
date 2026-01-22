import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    console.log("api is working fine now! 👌☕");
    res.send("API is working fine 👌");
});

// API: Search Images
app.get("/api/images", async (req, res) => {
  const { query } = req.query;
  
  if (!query) {
    return res.status(400).json({ message: "Query is required" });
  }

  try {
      // ✅ CORRECT BACKEND CALL
    const response = await fetch(
      `https://api.pexels.com/v1/search?query=${query}&per_page=5`,
      {
        headers: {
          Authorization: process.env.PEXELS_API_KEY,
        },
      }
    );

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch images" });
  }
});


// Server start
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});
