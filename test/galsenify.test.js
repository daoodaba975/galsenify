const galsenify = require('../index');
const {regionNamesMock, departmentsMock, codeMock, languesNationalesMock} = require('../mock/galsenify.test.mock');

describe("galsenify testing", () => {
  test("receive the regions", () => {
    const regionNames = galsenify.regions();
    expect(regionNames.length).toEqual(14);
    expect(regionNames).toEqual(regionNamesMock);
  });

  test("receive the departments of passing region", () => {
    const departments = galsenify.departments("Dakar");
    expect(departments.length).toEqual(departmentsMock.length);
    expect(departments).toEqual(departmentsMock);
  });

  test("receive the departments of passing region should fail", () => {
    expect(() => galsenify.departments("Adidjan")).toThrow("Oups! Ce n'est pas une région valide !");
    expect(() => galsenify.departments("")).toThrow("Oups! Ce n'est pas une région valide !");
  });

  test("receive the codes", () => {
    const codes = galsenify.codes();
    expect(codes).toEqual(codeMock);
    expect(codes.length).toEqual(codeMock.length);
  });

  test("receive the population of passing region", () => {
    const population = galsenify.population("Dakar");
    expect(population).toBe(4042225);
  });

  test("receive the population of passing region should be fail", () => {
    expect(() => galsenify.population("Abidjan")).toThrow("Oups! Ce n'est pas une région valide !");
    expect(() => galsenify.population("")).toThrow("Oups! Ce n'est pas une région valide !");
  });

  test("receive the superficie of passing region", () => {
    const superficie = galsenify.superficie("Dakar");
    expect(superficie).toBe(547);
  });

  test("receive the superficie of passing region should be fail", () => {
    expect(() => galsenify.superficie("Abidjan")).toThrow("Oups! Ce n'est pas une région valide !");
    expect(() => galsenify.superficie("")).toThrow("Oups! Ce n'est pas une région valide !");
  });

  test("receive the sn information", () => {
    const sn = galsenify.sn();
    expect(sn.pays).toBe("Sénégal");
    expect(sn.capital).toBe("Dakar");
    expect(galsenify.languesNationales()).toEqual(languesNationalesMock);
  });
});
