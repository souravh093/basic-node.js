const EvenEmitter = require("events");
const myEmitter = new EvenEmitter();
//  listener
myEmitter.on("birthday", () => {
  console.log(`Happy Birthday to You`);
});

myEmitter.on("birthday", (gift) => {
    console.log(`I will send a ${gift}`)
})

myEmitter.emit("birthday", 'watch');
