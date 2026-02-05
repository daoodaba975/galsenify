import { Department, Region } from "../types";
import { DepartmentReferenceError, RegionReferenceError } from "./exceptions";

export const lowerCase = (value?: string): string => value?.toLowerCase().trim() ?? "";

export const findItem = (items: Region[], value: string): Region => {
  const region = items.find((region) => lowerCase(region.nom) === lowerCase(value));

  if (!region) throw new RegionReferenceError();

  return region;
};

export const departmentItem = (items: Department[], value: string): Department => {
  const department = items.find((department) => lowerCase(department.nom) === lowerCase(value));

  if (!department) throw new DepartmentReferenceError();

  return department;
};
