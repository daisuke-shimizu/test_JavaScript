const fs = require("fs");

const input = fs.readFileSync("/dev/stdin", "utf-8");

const v = Number(input);
console.log(v + 1);