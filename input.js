let connection;
const { MOVE_KEYS } = require("./constants");
const w = MOVE_KEYS.w;
const a = MOVE_KEYS.a;
const d = MOVE_KEYS.d;
const s = MOVE_KEYS.s;
const x = MOVE_KEYS.x;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(data) {
  if (data === '\u0003') {
    process.exit();
  }
  if (data === w) {
    connection.write("Move: up");
  }
  if (data === a) {
    connection.write("Move: left");
  }
  if (data === s) {
    connection.write("Move: down");
  }
  if (data === d) {
    connection.write("Move: right");
  }
  if (data === x) {
    connection.write("Say: ❤️❤️❤️❤️❤️");
  }
};

module.exports = {setupInput};