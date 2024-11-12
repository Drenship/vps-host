// backend/server.js
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(
  cors({
    origin: "http://localhost:3000", // L'origine de votre frontend Next.js en développement
  })
);
app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

app.get("/api/data", (req, res) => {
  res.json({ data: "Données du backend Express" });
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
