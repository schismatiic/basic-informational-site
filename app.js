const express = require("express");
const app = express();
const path = require("node:path");

process.loadEnvFile();

app.use((req, res) => {
  switch (req.path) {
    case "/":
      res.sendFile(path.join(__dirname, "index.html"));
      break;
    case "/about":
      res.sendFile(path.join(__dirname, "about.html"));
      break;
    case "/contact-me":
      res.sendFile(path.join(__dirname, "contact-me.html"));
      break;
    default:
      res.sendFile(path.join(__dirname, "404.html"));
      break;
  }
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Listening on port ${PORT}`);
});
