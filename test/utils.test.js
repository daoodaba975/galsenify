const utils = require("../libs/utils");

describe("Utils testing", () => {
  test("should make the text to lowerCase", () => {
    expect(utils.lowerCase("GALSEN")).toBe("galsen");
  });

  test("should find the rigion", () => {
    const region = utils.findItem("Dakar");
    expect(region).toBeTruthy();
    expect(region).toEqual({
      nom: "Dakar",
      code: "DK",
      population: 3938358,
      superficie: 547,
      departments: ["Dakar", "Pikine", "Guédiawaye", "Rufisque"],
    });
  });

  test("should not find the rigion", () => {
    expect(() => utils.findItem("Abidjan")).toThrow();
  });
});
