import galsenify from "../index";
import {
  regionNamesMock,
  departmentsMock,
  codeMock,
  languesNationalesMock,
  snMock,
  codePostalMock,
} from "../mock/galsenify.test.mock";
import { RegionReferenceError, DepartmentReferenceError } from "../libs/exceptions";

describe("Galsenify", () => {
  describe("Regions", () => {
    test("should return all regions", () => {
      expect(galsenify.regions()).toEqual(regionNamesMock);
    });

    test("should return all regions code", () => {
      expect(galsenify.codes()).toEqual(codeMock);
    });

    test("should return departments by region", () => {
      expect(galsenify.departments("Dakar")).toEqual(departmentsMock);
    });

    test("should throw an error when region is not found", () => {
      expect(() => galsenify.departments("Invalid")).toThrow(RegionReferenceError);
    });

    test("should throw an error when region name is empty", () => {
      expect(() => galsenify.departments("")).toThrow(RegionReferenceError);
    });
  });

  describe("Departments", () => {
    test("should return arrondissements by department", () => {
      expect(galsenify.arrondissements("Dakar")).toEqual(expect.any(Array));
    });

    test("should throw an error when department is not found", () => {
      expect(() => galsenify.arrondissements("Invalid")).toThrow(DepartmentReferenceError);
    });

    test("should throw an error when department name is empty", () => {
      expect(() => galsenify.arrondissements("")).toThrow(DepartmentReferenceError);
    });

    test("should return postal code by department", () => {
      expect(galsenify.codePostal("Dakar")).toBe(codePostalMock);
    });

    test("should return all postal codes", () => {
      expect(galsenify.allCodesPostaux()).toContain("10000");
    });
  });

  describe("Country", () => {
    test("should return all data about Senegal", () => {
      expect(galsenify.sn()).toEqual(snMock);
    });

    test("should return all national languages", () => {
      expect(galsenify.languesNationales()).toEqual(languesNationalesMock);
    });
  });

  describe("Search", () => {
    test("should find department by postal code", () => {
      const results = galsenify.search("10000");
      expect(results[0].nom).toBe("Dakar");
      expect(results[0].type).toBe("department");
    });
  });
});
