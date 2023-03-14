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
      population: 4042225,
      superficie: 547,
      departments: ["Dakar", "Pikine", "Guédiawaye", "Rufisque", "Keur Massar"],
    });
  });

  test("should not find the rigion", () => {
    expect(() => utils.findItem("Abidjan")).toThrow();
  });
});


describe("Utils testing with Department", () => {
    test("should find the department", () => {
        const department = utils.departmentItem("Dakar");
        expect(department).toBeTruthy();
        expect(department).toEqual({
          nom: "Dakar",
          region: "Dakar",
          population: 1030594,
          superficie: 79,
          arrondissements: ["Almadies", "Dakar Plateau", "Grand Dakar", "Parcelles Assainies"],
        });
      });
    
    test("should not find the department", () => {
    expect(() => utils.departmentItem("Paris")).toThrow();
    });
})