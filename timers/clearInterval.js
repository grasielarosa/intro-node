const timeOut = 1000;
const checking = () => console.log("Checking!");

let interval = setInterval(checking, timeOut);

setTimeout(function () {
  clearInterval(interval);
}, 6000);
