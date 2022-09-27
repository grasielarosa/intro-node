const { EventEmitter } = require("events");

const ev = new EventEmitter();

// ev.on("saySomething", (message) => console.log("I listened you,", message));
ev.once("saySomething", (message) => console.log("I listened you,", message));

ev.emit("saySomething", "Pablo");
ev.emit("saySomething", "Grasi");
