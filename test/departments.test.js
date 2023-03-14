const department = require("../index")

describe("Department testing", () => {
  test("receive the department", () => {
    const departmentName = department.allDepartments();
    expect(departmentName.length).toEqual(departmentName.length);
    expect(departmentName).toContain("Dakar");
  });

  test("receive the arrondissements of passing department", () => {
    const arrondissements = department.arrondissements("Pikine");
    expect(arrondissements.length).toBeGreaterThan(0);
    expect(arrondissements).toContain("Thiaroye");
  });

  test("receive the arrrondissements of passing department should fail", () => {
    expect(() => department.arrondissements("Yeumbeul")).toThrow();
    expect(() => department.arrondissements("")).toThrow();
  });

  // test("The department is part of the region", () => {
  //   const region = department.regions();
  //   expect(region.length).toBeGreaterThan(0);
  //   expect(region).toContain("Dakar").length;
  // });

  test("receive the population of passing department", () => {
    const population = department.populationDepartment("Keur massar");
    expect(population).toBe(793000);
  });

  test("receive the superficie of passing department", () => {
    const superficie = department.superficieDepartment("Rufisque");
    expect(superficie).toBe(372);
  });

  test("receive the superficie of passing department should be fail", () => {
    expect(() => department.superficieDepartment("West Ham")).toThrow();
    expect(() => department.superficieDepartment("")).toThrow();
  });

});
