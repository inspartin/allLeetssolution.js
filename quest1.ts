const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function checkIfPangram(sentence: string): boolean {
  for (let i = 0; i < alphabets.length; i++) {
    if (
      !sentence
        .toLocaleLowerCase()
        .split("")
        .includes(alphabets[i].toLocaleLowerCase())
    ) {
      console.log(alphabets[i]);
      return false;
    }
  }

  return true;
}

// console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"));
