import { createServer } from "node:http";

const server = createServer((request, response) => {
  console.log("Request received");

  response.statusCode = 200;

  response.setHeader("Content-Type", "text/html");

  const currentDate = new Date().toLocaleString();
  response.end(
    `<html><body><h1>Hello! Current Date and Time: ${currentDate}</h1></body></html>`
  );
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
