function sum(...a: number[]): number {
  const sol = a.reduce((acc, input) => acc + input);
  return sol;
}

const ans = sum(1, 3, 5);
console.log(ans);

function check(fn: () => void): boolean {
  fn();
  return true;
}

const result = check(() => {
  console.log("helloo");
});

console.log(result)
