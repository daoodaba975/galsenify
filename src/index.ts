/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Region, Department, Country, Operateur, SearchResult } from "./types.js";
import snData from "./dataset/senegal.json";
import rgData from "./dataset/regions.json";
import dpData from "./dataset/departments.json";
import opData from "./dataset/operateurs.json";
import { lowerCase, findItem, departmentItem } from "./libs/utils";
import { RegionReferenceError, DepartmentReferenceError } from "./libs/exceptions";

const sn_data = snData as unknown as Country;
const rg_data = rgData as unknown as Region[];
const dp_data = dpData as unknown as Department[];
const op_data = opData as unknown as Operateur[];

class Galsenify {
  // Données brutes
  private sn_data: Country = sn_data;
  private rg_data: Region[] = rg_data;
  private dp_data: Department[] = dp_data;
  private op_data: Operateur[] = op_data;

  // ==================== RÉGIONS ====================

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

  // ==================== DÉPARTEMENTS ====================

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

  codePostal(departmentName: string): string {
    if (!departmentName) {
      throw new DepartmentReferenceError("Argument departmentName should not be empty");
    }

    const department = departmentItem(this.dp_data, lowerCase(departmentName));
    return department ? department.codePostal || "" : "";
  }

  allCodesPostaux(): string[] {
    return this.dp_data.map((department) => department.codePostal || "").filter((cp) => cp !== "");
  }

  // ==================== PAYS ====================

  sn(): Country {
    return this.sn_data;
  }

  languesNationales(): string[] {
    return this.sn_data.languesNationales;
  }

  // ==================== OPÉRATEURS TÉLÉCOM ====================

  operateurs(): Operateur[] {
    return this.op_data;
  }

  operateursMobiles(): Operateur[] {
    return this.op_data.filter((op) => op.type === "mobile");
  }

  findOperateurByPrefix(prefix: string): Operateur | null {
    return this.op_data.find((op) => op.prefixes.includes(prefix)) || null;
  }

  findOperateurByNumber(phoneNumber: string): Operateur | null {
    const cleanNumber = phoneNumber.replace(/\D/g, "");
    const prefix = cleanNumber.startsWith("221") ? cleanNumber.substring(3, 5) : cleanNumber.substring(0, 2);
    return this.findOperateurByPrefix(prefix);
  }

  // ==================== RECHERCHE ====================

  search(query: string): SearchResult[] {
    if (!query) return [];

    const normalizedQuery = lowerCase(query);
    const results: SearchResult[] = [];

    // Recherche dans les régions
    this.rg_data.forEach((region) => {
      if (lowerCase(region.nom).includes(normalizedQuery) || lowerCase(region.code) === normalizedQuery) {
        results.push({ type: "region", nom: region.nom, data: region });
      }
    });

    // Recherche dans les départements
    this.dp_data.forEach((department) => {
      if (
        lowerCase(department.nom).includes(normalizedQuery) ||
        (department.codePostal && department.codePostal === normalizedQuery)
      ) {
        results.push({ type: "department", nom: department.nom, data: department });
      }
    });

    return results;
  }

  findByCode(code: string): Region | null {
    if (!code) return null;
    const normalizedCode = code.toUpperCase();
    return this.rg_data.find((region) => region.code === normalizedCode) || null;
  }

  // ==================== CALCULS ====================

  totalPopulation(): number {
    return this.rg_data.reduce((total, region) => total + region.population, 0);
  }

  totalSuperficie(): number {
    return this.rg_data.reduce((total, region) => total + region.superficie, 0);
  }

  density(regionName: string): number {
    if (!regionName) {
      throw new RegionReferenceError("Argument regionName should not be empty");
    }

    const region = findItem(this.rg_data, lowerCase(regionName));
    if (!region || region.superficie === 0) return 0;
    return Math.round(region.population / region.superficie);
  }

  densityDepartment(departmentName: string): number {
    if (!departmentName) {
      throw new DepartmentReferenceError("Argument departmentName should not be empty");
    }

    const department = departmentItem(this.dp_data, lowerCase(departmentName));
    if (!department || department.superficie === 0) return 0;
    return Math.round(department.population / department.superficie);
  }

  nationalDensity(): number {
    const totalPop = this.totalPopulation();
    const totalSup = this.totalSuperficie();
    if (totalSup === 0) return 0;
    return Math.round(totalPop / totalSup);
  }

  // ==================== FILTRES & TRI ====================

  regionsByPopulation(order: "asc" | "desc" = "desc"): Region[] {
    const sorted = [...this.rg_data].sort((a, b) => a.population - b.population);
    return order === "desc" ? sorted.reverse() : sorted;
  }

  regionsBySuperficie(order: "asc" | "desc" = "desc"): Region[] {
    const sorted = [...this.rg_data].sort((a, b) => a.superficie - b.superficie);
    return order === "desc" ? sorted.reverse() : sorted;
  }

  regionsByDensity(order: "asc" | "desc" = "desc"): Region[] {
    const sorted = [...this.rg_data].sort((a, b) => {
      const densityA = a.superficie > 0 ? a.population / a.superficie : 0;
      const densityB = b.superficie > 0 ? b.population / b.superficie : 0;
      return densityA - densityB;
    });
    return order === "desc" ? sorted.reverse() : sorted;
  }

  departmentsByPopulation(order: "asc" | "desc" = "desc"): Department[] {
    const sorted = [...this.dp_data].sort((a, b) => a.population - b.population);
    return order === "desc" ? sorted.reverse() : sorted;
  }

  departmentsByRegion(regionCode: string): Department[] {
    if (!regionCode) return [];
    const region = this.findByCode(regionCode);
    if (!region) return [];

    return this.dp_data.filter((dp) => lowerCase(dp.region) === lowerCase(region.nom));
  }

  // ==================== ALÉATOIRE ====================

  randomRegion(): Region {
    const index = Math.floor(Math.random() * this.rg_data.length);
    return this.rg_data[index];
  }

  randomDepartment(): Department {
    const index = Math.floor(Math.random() * this.dp_data.length);
    return this.dp_data[index];
  }
}

const galsenify = new Galsenify();

export default galsenify;
