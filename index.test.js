// hello!

// A .-            N -.
// B -...          O ---
// C -.-.          P .--.
// D -..           Q --.-
// E .             R .-.
// F ..-.          S ...
// G --.           T -
// H ....          U ..-
// I ..            V ...-
// J .---          W .--
// K -.-           X -..-
// L .-..          Y -.--
// M --            Z --..

const morseCodeToLatinLetter = (morseChar) => {
  switch (morseChar) {
    case ".-":
      return "A";
    case "-...":
      return "B";
  }
};

describe("Morse code to latin alphabet", () => {
  it.each([
    { morse: ".-", latin: "A" },
    { morse: "-...", latin: "B" },
  ])(
    "should convert Morse code char $morse to latin letter for $latin",
    ({ morse, latin }) => {
      expect(morseCodeToLatinLetter(morse)).toBe(latin);
    }
  );
});
