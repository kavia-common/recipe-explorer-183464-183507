const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || process.env.REACT_APP_PORT || 3000;

app.use(express.static(path.join(__dirname, "build")));

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Frontend UI served at http://localhost:${port}`);
});
