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

});
