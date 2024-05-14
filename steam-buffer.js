const http = require("http");
const fs = require("fs");

// creating a server using raw node.js
const server = http.createServer();

// server listener
server.on("request", (req, res) => {
  if ((req.url === "/read-file", req.method === "GET")) {
    //   stream file reading
    const readableStream = fs.createReadStream(
      process.cwd() + "/texts/readw.txt"
    );

    readableStream.on("data", (buffer) => {
      res.statusCode = 200;
      res.write(buffer);
    });

    readableStream.on("end", () => {
      res.statusCode = 200;
      res.end("Hello form world!");
    });

    readableStream.on("error", () => {
      res.statusCode = 500;
      res.write("Some thing went wrong");
    });
  }
});

server.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
