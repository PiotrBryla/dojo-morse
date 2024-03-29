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

// ...|---|..-.|..|.-    Sofia
// .|..-|--.|.|-.|..|.-  Eugenia

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

const convert = (morse = "") => {

  return [morse.split("|").map(morseCodeToLatinLetter).join("")];

}

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

describe("Word in Morse code with pauses (|) to English", () => {
  it("should convert a Morse to English word", () => {
    expect(convert("...|---|..-.|..|.-|")).toEqual(["SOFIA"]);
    expect(convert(".|..-|--.|.|-.|..|.-")).toEqual(["EUGENIA"]);
  });

  it("should return an empty string when no arguments given", () => {
    expect(convert()).toEqual([""]);
  });

  it.todo("should do X when passed invalid input");
});

describe("Morse without pauses to English", () => {
  it("Should return E ", () => {
    expect(convert(".")).toEqual(["E"]);
  });

  it("Should return T ", () => {
    expect(convert("-")).toEqual(["T"]);
  });
});
