function add(a, b) {
  return a + b;
}

const args = process.argv.slice(2);
const num1 = Number.parseInt(args[0], 10);
const num2 = Number.parseInt(args[1], 10);

console.log(add(5, 5));
