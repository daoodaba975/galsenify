/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Region, Department, Country } from "./types.js";
import snData from "./dataset/senegal.json";
import rgData from "./dataset/regions.json";
import dpData from "./dataset/departments.json";
import { lowerCase, findItem, departmentItem } from "./libs/utils";
import { RegionReferenceError, DepartmentReferenceError } from "./libs/exceptions";

const sn_data = snData as unknown as Country;
const rg_data = rgData as unknown as Region[];
const dp_data = dpData as unknown as Department[];

class Galsenify {
  // Données brutes
  private sn_data: Country = sn_data;
  private rg_data: Region[] = rg_data;
  private dp_data: Department[] = dp_data;

  rg(): Region[] {
    return this.rg_data;
  }

  regions(): string[] {
    return this.rg_data.map((region) => region.nom);
  }

  codes(): string[] {
    return this.rg_data.map((region) => region.code);
  }

  departments(regionName: string): string[] {
    if (!regionName) {
      throw new RegionReferenceError("Argument regionName should not be empty");
    }

    const region = findItem(this.rg_data, lowerCase(regionName));
    return region ? region.departments : [];
  }

  population(regionName: string): number {
    if (!regionName) {
      throw new RegionReferenceError("Argument regionName should not be empty");
    }

    const region = findItem(this.rg_data, lowerCase(regionName));
    return region ? region.population : 0;
  }

  superficie(regionName: string): number {
    if (!regionName) {
      throw new RegionReferenceError("Argument regionName should not be empty");
    }

    const region = findItem(this.rg_data, lowerCase(regionName));
    return region ? region.superficie : 0;
  }

  allDepartments(): string[] {
    return this.dp_data.map((department) => department.nom);
  }

  arrondissements(departmentName: string): string[] {
    if (!departmentName) {
      throw new DepartmentReferenceError("Argument departmentName should not be empty");
    }

    const department = departmentItem(this.dp_data, lowerCase(departmentName));
    return department ? department.arrondissements : [];
  }

  populationDepartment(departmentName: string): number {
    if (!departmentName) {
      throw new DepartmentReferenceError("Argument departmentName should not be empty");
    }

    const department = departmentItem(this.dp_data, lowerCase(departmentName));
    return department ? department.population : 0;
  }

  superficieDepartment(departmentName: string): number {
    if (!departmentName) {
      throw new DepartmentReferenceError("Argument departmentName should not be empty");
    }

    const department = departmentItem(this.dp_data, lowerCase(departmentName));
    return department ? department.superficie : 0;
  }

  sn(): Country {
    return this.sn_data;
  }

  languesNationales(): string[] {
    return this.sn_data.languesNationales;
  }
}

const galsenify = new Galsenify();

export default galsenify;
