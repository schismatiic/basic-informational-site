// const http = require("http");
// const fs = require("node:fs/promises");

// const server = http.createServer(async (req, res) => {
//   res.setHeader("Content-Type", "text/html");
//   let path = "./";

//   switch (req.url) {
//     case "/":
//       path += "index.html";
//       break;
//     case "/about":
//       path += "about.html";
//       break;
//     case "/contact-me":
//       path += "contact-me.html";
//       break;
//     default:
//       path += "404.html";
//       break;
//   }
//   try {
//     const data = await fs.readFile(path);
//     res.end(data);
//   } catch (err) {
//     console.log(err);
//     res.end();
//   }
// });

// server.listen(8080, "localhost", () => {
//   console.log("Listening for requests on port 8080");
// });
