interface Region {
    nom: string;
    code: string;
    population: number;
    superficie: number;
    departments: string[];
}
interface Country {
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

declare class Galsenify {
    private sn_data;
    private rg_data;
    private dp_data;
    rg(): Region[];
    regions(): string[];
    codes(): string[];
    departments(regionName: string): string[];
    population(regionName: string): number;
    superficie(regionName: string): number;
    allDepartments(): string[];
    arrondissements(departmentName: string): string[];
    populationDepartment(departmentName: string): number;
    superficieDepartment(departmentName: string): number;
    sn(): Country;
    languesNationales(): string[];
}
declare const galsenify: Galsenify;

export { galsenify as default };
