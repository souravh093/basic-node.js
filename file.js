const fs = require("fs");

// reading a file text
const readText = fs.readFile(
  "./texts/read.txt",
  (err, data) => {
    if (err) throw err;
    console.log(data);
  },
  "UTF-8"
);

// writing text
const writtenText = fs.writeFile(
  "./texts/write.txt",
  readText + "This is my new writing text"
);

console.log(readText);
