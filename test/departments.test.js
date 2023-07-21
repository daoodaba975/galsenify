const department = require("../index");
const { allDepartmentMock, arrondissementsMock } = require("../mock/galsenify.test.mock");


describe("Department testing", () => {
  test("receive the department", () => {
    const departmentName = department.allDepartments();
    expect(departmentName.length).toEqual(allDepartmentMock.length);
    expect(departmentName).toEqual(allDepartmentMock);
  });

  test("receive the arrondissements of passing department", () => {
    const arrondissements = department.arrondissements("Pikine");
    expect(arrondissements.length).toEqual(arrondissementsMock.length);
    expect(arrondissements).toEqual(arrondissementsMock);
  });

  test("receive the arrrondissements of passing department should fail", () => {
    expect(() => department.arrondissements("Yeumbeul")).toThrow("Oups! Ce n'est pas un Département valide !");
    expect(() => department.arrondissements("")).toThrow("Oups! Ce n'est pas un Département valide !");
  });

});
