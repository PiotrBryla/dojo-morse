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
  const map = {
    ".-": "A",
    "-.": "N",
    "-...": "B",
    "---": "O",
    "-.-.": "C",
    ".--.": "P",
    "-..": "D",
    "--.-": "Q",
    ".": "E",
    ".-.": "R",
    "..-.": "F",
    "...": "S",
    "--.": "G",
    "-": "T",
    "....": "H",
    "..-": "U",
    "..": "I",
    "...-": "V",
    ".---": "J",
    ".--": "W",
    "-.-": "K",
    "-..-": "X",
    ".-..": "L",
    "-.--": "Y",
    "--": "M",
    "--..": "Z",
  };

  return map[morseChar];
};

describe("Morse code to latin alphabet", () => {
  it.each([
    { morse: ".-", latin: "A" },
    { morse: "-.", latin: "N" },
    { morse: "-...", latin: "B" },
    { morse: "---", latin: "O" },
    { morse: "-.-.", latin: "C" },
    { morse: ".--.", latin: "P" },
    { morse: "-..", latin: "D" },
    { morse: "--.-", latin: "Q" },
    { morse: ".", latin: "E" },
    { morse: ".-.", latin: "R" },
    { morse: "..-.", latin: "F" },
    { morse: "...", latin: "S" },
    { morse: "--.", latin: "G" },
    { morse: "-", latin: "T" },
    { morse: "....", latin: "H" },
    { morse: "..-", latin: "U" },
    { morse: "..", latin: "I" },
    { morse: "...-", latin: "V" },
    { morse: ".---", latin: "J" },
    { morse: ".--", latin: "W" },
    { morse: "-.-", latin: "K" },
    { morse: "-..-", latin: "X" },
    { morse: ".-..", latin: "L" },
    { morse: "-.--", latin: "Y" },
    { morse: "--", latin: "M" },
    { morse: "--..", latin: "Z" },
  ])(
    "should convert Morse code char $morse to latin letter for $latin",
    ({ morse, latin }) => {
      expect(morseCodeToLatinLetter(morse)).toBe(latin);
    }
  );
});
