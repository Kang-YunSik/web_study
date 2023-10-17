"use restrict";

for (let i = 1; i <= 5; i++) {
  console.log("*".repeat(i));
}
console.log("\n");

for (let i = 5; i > 0; i--) {
  console.log(" ".repeat(5 - i) + "*".repeat(i));
}
console.log("\n");

for (let i = 1; i <= 5; i++) {
  console.log(" ".repeat(5 - i) + "*".repeat(i));
}
console.log("\n");

for (let i = 1, j = 0; i <= 4; i++, j++) {
  console.log(" ".repeat(4 - i) + "*".repeat(i + j));
}
console.log("\n");

for (let i = 1, j = 0; i <= 4; i++, j++) {
  console.log(" ".repeat(4 - i) + "*".repeat(i + j));
}
for (let i = 3, j = 2; i > 0; i--, j--) {
  console.log(" ".repeat(4 - i) + "*".repeat(i + j));
}
