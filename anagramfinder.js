function groupAnagrams(strs) {
  let storage = new Map();
  let ansArray = new Set();
  for (let i = 0; i < strs.length; i++) {
    if (strs[i] === "" && !storage.get(getUcode(strs[i]))) {
      console.log("OMGs", storage.get(getUcode(strs[i])));
      let appendArray = [];
      console.log("run");
      console.log(getUcode(strs[i]));
      storage.get(getUcode(strs[i]));
      for (let n = i; n < strs.length; n++) {
        if (getUcode(strs[i]) === getUcode(strs[n])) {
          appendArray.push(strs[n]);
        }
      }
      console.log("tghis ", appendArray);
      storage.set(getUcode(strs[i]), [...appendArray]);
    } else {
      let charSumVar = strs[i];
      let oneAna = new Set();
      oneAna.add(charSumVar);
      let charSum = getUcode(charSumVar);
      for (let j = 0; j < strs.length; j++) {
        if (charSum === getUcode(strs[j])) {
          oneAna.add(strs[j]);
        }
      }
      storage.set(getUcode(charSumVar), [...oneAna]);
    }
  }

  for (let i = 0; i < strs.length; i++) {
    ansArray.add(storage.get(getUcode(strs[i])));
  }

  let finalAns = [...ansArray];
  console.log(storage);
  return finalAns;
}

const strs = ["eat", "tea", "tan", "ate", "nat", "bat", "", ""];

function getUcode(str) {
  let charCodeSum = 0;
  for (let i = 0; i < str.length; i++) {
    charCodeSum += str.charCodeAt(i);
  }
  return charCodeSum || -1;
}

console.log(groupAnagrams(strs), "j");

console.log(Boolean(["", ""]));
console.log("strs undefined is new bat ansArray");
