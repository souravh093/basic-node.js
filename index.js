
// local module
const {add, a} = require('./local-1')
const {add: add2, a: a2} = require("./local-2")

console.log(add2(3, 5, 3))

console.log(a2)

// path module
const path = require("path")

console.log(path.parse("D:/MyDev/Apollo Label 2/Mongoose/learning_node/index.js"))