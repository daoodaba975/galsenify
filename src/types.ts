export interface Region {
  nom: string;
  code: string;
  population: number;
  superficie: number;
  departments: string[];
}

export interface Department {
  nom: string;
  region: string;
  arrondissements: string[];
  population: number;
  superficie: number;
  codePostal?: string;
}

export interface Country {
  pays: string;
  capital: string;
  langueOfficielle: string;
  languesNationales: string[];
  monnaie: string;
  devise: string;
  drapeau: string;
  codeIso: string;
  indicatif: number;
  habitants: number;
  surface: number;
  regions: number;
  departments: number;
}

export interface Operateur {
  nom: string;
  prefixes: string[];
  type: "mobile" | "fixe";
  description: string;
}

export interface SearchResult {
  type: "region" | "department";
  nom: string;
  data: Region | Department;
}
