const args = process.argv.slice(2);
const num = Number.parseInt(args[0], 10);

if (!Number.isNaN(num)) {
  console.log(`My number: ${num}`);
} else {
  console.log("Not a number");
}
