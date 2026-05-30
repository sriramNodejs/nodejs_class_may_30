console.log("1");

setTimeout(function() {
  console.log("2");
}, 0);

console.log("3");

setImmediate(() => {
  console.log("7");
});



process.nextTick(function() {
  console.log("4");
});

Promise.resolve().then(function() {
  console.log("5");
});

console.log("6");



// 
1
3
6
4
5
2