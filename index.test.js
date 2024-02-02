// hello!

const morseCodeToLatinLetter = (morseChar) => {
  switch(morseChar) {
    case ".-":
      return "A";
    case "-...":
      return "B";
  }
};

describe("Morse code to latin alphabet", () => {
  it("should convert Morse code char to latin letter for A and B only", () => {
    expect(morseCodeToLatinLetter(".-")).toBe("A");
    expect(morseCodeToLatinLetter("-...")).toBe("B");
  });
});
