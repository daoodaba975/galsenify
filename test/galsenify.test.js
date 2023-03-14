const galsenify = require('../index');

describe("galsenify testing", () => {
  test("receive the regions", () => {
    const regionNames = galsenify.regions();
    expect(regionNames.length).toEqual(regionNames.length);
    expect(regionNames).toContain("Dakar");
  });

  test("receive the departments of passing region", () => {
    const departments = galsenify.departments("Dakar");
    expect(departments.length).toBeGreaterThan(0);
    expect(departments).toContain("Pikine");
  });

  test("receive the departments of passing region should fail", () => {
    expect(() => galsenify.departments("Adidjan")).toThrow();
    expect(() => galsenify.departments("")).toThrow();
  });

  test("receive the codes", () => {
    const codes = galsenify.codes();
    expect(codes.length).toBeGreaterThan(0);
  });

  test("receive the population of passing region", () => {
    const population = galsenify.population("Dakar");
    expect(population).toBe(4042225);
  });

  test("receive the population of passing region should be fail", () => {
    expect(() => galsenify.population("Abidjan")).toThrow();
    expect(() => galsenify.population("")).toThrow();
  });

  test("receive the superficie of passing region", () => {
    const superficie = galsenify.superficie("Dakar");
    expect(superficie).toBe(547);
  });

  test("receive the superficie of passing region should be fail", () => {
    expect(() => galsenify.superficie("Abidjan")).toThrow();
    expect(() => galsenify.superficie("")).toThrow();
  });

  test("receive the sn information", () => {
    const sn = galsenify.sn();
    expect(sn.pays).toBe("Sénégal");
    expect(sn.capital).toBe("Dakar");
    expect(galsenify.languesNationales()).toContain("Wolof");
  });
});
