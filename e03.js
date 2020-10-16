//03 Marsos
// Create a function called marsos that will take in one string str as input.
// A spaceship is sent to Mars but crashes.
// It sends a series of “SOS” messages to Earth for help.
// Due to cosmic radiation, some of the “SOS” messages were altered during transmission.
// The goal of the function is to determine how many letters were altered during transmission.
// Exemple: for the input SOFSOSSISSOW the function will return 3
const str = "SOFSOSSISSOWSOSSOGss";

const marsos = (string) => {
  let sosCount = string.length / 3;
  let message = "SOS".repeat(sosCount);

  let error = 0;
  console.log(message);
  for (let i = 0; i < message.length; i++) {
    console.log(message[i], string[i]);
    if (message[i] !== string[i]) {
      error++;
    }
  }
  console.log(error);
  return error;
};

marsos(str);
