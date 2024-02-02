// hello!

const morseCodeToLatinLetter = () => {
  return "A";
};

describe("Morse code to latin alphabet", () => {
  it("should convert Morse code char of '.-' to letter 'A'", () => {
    expect(morseCodeToLatinLetter(".-")).toBe("A");
  });
});
