var reverse = function (x) {
  let ans = [];
  let normalise = "";

  for (let i = 0; i < String(x).length; i++) {
    if (String(x).includes("-")) {
      if (String(x)[0] === "-") {
        normalise = "-";
      }

      x = String(x).slice(1);
    }

    ans.unshift(Number(String(x)[i]));
  }

  if (normalise) {
    ans.unshift(normalise);
  }

  let retunString = "";
  for (let i = 0; i < ans.length; i++) {
    if (!(ans[i] === ",")) {
      retunString += ans[i];
    }
  }

  if (2147483647 <= Number(retunString) || Number(retunString) <= -2147483647) {
    retunString = 0;
  }
  return Number(retunString);
};

const x = 120;

console.log(reverse(x));
