//03 Marsos
// Create a function called marsos that will take in one string str as input.
// A spaceship is sent to Mars but crashes.
// It sends a series of “SOS” messages to Earth for help.
// Due to cosmic radiation, some of the “SOS” messages were altered during transmission.
// The goal of the function is to determine how many letters were altered during transmission.
// Exemple: for the input SOFSOSSISSOW the function will return 3
const marsos = (str) => {
  str = str.toLowerCase();
  if (str && str !== "") {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let allLettersInStr = 0;
    for (let i = 0; i < alphabet.length; i++) {
      if (str.indexOf(alphabet[i]) != -1) {
        allLettersInStr++;
      }
    }
    if (allLettersInStr === alphabet.length) {
      return console.log("true");
    } else {
      return console.log("false");
    }
  }
};

marsos(str);
