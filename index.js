import fs from "fs";
import http from "http";

const fileData = fs.readFileSync("message.txt", "utf-8");
const productData = fs.readFileSync("productsData.json", "utf-8");
const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.writeHead(200, { "content-type": "text/html" });
      res.end(fileData);
      break;

    case "/products":
      res.writeHead(200, { "content-type": "application/json" });
      res.end(productData);
      break;
    default:
      res.writeHead(404, { "content-type": "text/html" });
      res.end("<h1>404 page not found</h1>");
      break;
  }
});

server.listen(8080);
