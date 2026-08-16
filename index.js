const http = require("http");
const fs = require("node:fs/promises");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  let path = "./pages/";
  switch (req.url) {
    case "/":
      path += "index.html";
      break;
    case "/about":
      path += "about.html";
      break;
    case "/contact-me":
      path += "contact-me.html";
      break;
    default:
      path += "404.html";
      break;
  }
  const readHTML = async () => {
    try {
      const data = await fs.readFile(path);
      res.end(data);
    } catch (err) {
      console.log(err);
      res.end();
    }
  };
  readHTML();
});

server.listen(8080, "localhost", () => {
  console.log("Listening for requests on port 8080");
});
