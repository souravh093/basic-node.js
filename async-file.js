const fs = require("fs");

// reading text asynchronously
const readFile = fs.readFile("./texts/read.txt", "utf-8", (err, data) => {
  if (err) throw err;

  const writtenFile = fs.writeFile(
    "./texts/newWrite.txt",
    data + "Hello Node.js",
    "utf-8",
    (err) => {
      if (err) throw err;
      console.log("Saved!");
    }
  );
});

