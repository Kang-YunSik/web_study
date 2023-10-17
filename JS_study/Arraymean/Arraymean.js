"use restrict";
let a = 50;
let b = 40;
let c = 80;

if ((a < b && a > c) || (a < c && a > b)) {
  console.log(`중앙값은: ${a}`);
}
if ((b < c && b > a) || (b < a && b > c)) {
  console.log(`중앙값은: ${b}`);
}
if ((c < b && c > a) || (c < a && c > b)) {
  console.log(`중앙값은: ${c}`);
}
