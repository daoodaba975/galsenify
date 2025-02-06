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
