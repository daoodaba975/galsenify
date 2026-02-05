# Galsenify 📦

![COVER](assets/img/cover.png)

**_Lire en [Français](./assets/translate/README-fr.md)_**

**Galsenify** is a comprehensive library for Senegalese data, it offers a lot of information about country of Teranga.

- Current version ➡️ 1.1.0
- Data source: **RGPH-5 2023** (5th General Census of Population and Housing)

## Install

`via NPM`

```bash
npm i galsenify
```

`via YARN`

```bash
yarn add galsenify
```

`via PNPM`

```bash
pnpm i galsenify
```

## Usage

```js
import galsenify from "galsenify";
// or
const galsenify = require("galsenify");

// get all Senegal's regions
console.log(galsenify.regions());

// results
[
  "Dakar",
  "Diourbel",
  "Fatick",
  "Kaffrine",
  "Kaolack",
  "Kédougou",
  "Kolda",
  "Louga",
  "Matam",
  "Saint-Louis",
  "Sédhiou",
  "Tambacounda",
  "Thiès",
  "Ziguinchor",
];
```

## List of available commands

### Country 🇸🇳

```js
// Get all data about Senegal
galsenify.sn();
// { pays: "Sénégal", capital: "Dakar", habitants: 18126390, ... }

// Get all national languages
galsenify.languesNationales();
// ["Wolof", "Pular", "Sérère", "Diola", "Mandingue", "Soninké", "Bambara"]
```

### Regions 🗺️

```js
// Get all data about regions
galsenify.rg();

// Get all region names
galsenify.regions();

// Get all region codes
galsenify.codes();
// ["DK", "DB", "FK", "KA", "KL", "KE", "KD", "LG", "MT", "SL", "SE", "TC", "TH", "ZG"]

// Get departments by region name
galsenify.departments("Dakar");
// ["Dakar", "Pikine", "Guédiawaye", "Rufisque", "Keur Massar"]

// Get population by region name
galsenify.population("Dakar");
// 4004427

// Get area (km²) by region name
galsenify.superficie("Thiès");
// 6670
```

### Departments 🏛️

```js
// Get all department names
galsenify.allDepartments();

// Get arrondissements by department name
galsenify.arrondissements("Dakar");

// Get population by department name
galsenify.populationDepartment("Mbacké");
// 1359756

// Get area (km²) by department name
galsenify.superficieDepartment("Mbour");
// 1725
```

### Telecom Operators 📱

```js
// Get all telecom operators
galsenify.operateurs();

// Get mobile operators only
galsenify.operateursMobiles();
// [{ nom: "Orange", prefixes: ["77", "78"], ... }, ...]

// Find operator by prefix
galsenify.findOperateurByPrefix("77");
// { nom: "Orange", prefixes: ["77", "78"], type: "mobile", ... }

// Find operator by phone number
galsenify.findOperateurByNumber("771234567");
// { nom: "Orange", ... }

galsenify.findOperateurByNumber("76 123 45 67");
// { nom: "Free", ... }
```

### Search 🔍

```js
// Global search (regions, departments)
galsenify.search("Dakar");
// [{ type: "region", nom: "Dakar", data: {...} }, { type: "department", nom: "Dakar", data: {...} }, ...]

// Find region by code
galsenify.findByCode("DK");
// { nom: "Dakar", code: "DK", population: 4004427, ... }
```

### Calculations 📊

```js
// Get total population (sum of all regions)
galsenify.totalPopulation();
// 18126390

// Get total area (sum of all regions)
galsenify.totalSuperficie();
// 196712

// Get population density by region (hab/km²)
galsenify.density("Dakar");
// 7322

// Get population density by department (hab/km²)
galsenify.densityDepartment("Mbacké");
// 567

// Get national density (hab/km²)
galsenify.nationalDensity();
// 92
```

### Filters & Sorting 📈

```js
// Get regions sorted by population (descending)
galsenify.regionsByPopulation();
// [{ nom: "Dakar", ... }, { nom: "Thiès", ... }, ...]

// Get regions sorted by population (ascending)
galsenify.regionsByPopulation("asc");

// Get regions sorted by area
galsenify.regionsBySuperficie();

// Get regions sorted by density
galsenify.regionsByDensity();

// Get departments sorted by population
galsenify.departmentsByPopulation();

// Get departments by region code
galsenify.departmentsByRegion("DK");
// [{ nom: "Dakar", ... }, { nom: "Pikine", ... }, ...]
```

### Random 🎲

```js
// Get a random region
galsenify.randomRegion();
// { nom: "Kaolack", code: "KL", population: 1336719, ... }

// Get a random department
galsenify.randomDepartment();
// { nom: "Mbour", region: "Thiès", population: 935304, ... }
```

## Data Summary

| Category    | Count | Source      |
| ----------- | ----- | ----------- |
| Regions     | 14    | RGPH-5 2023 |
| Departments | 46    | RGPH-5 2023 |
| Operators   | 4     | 2024        |

## Example

**[Galsenify Demo](https://github.com/daoodaba975/galsenify.demo)** is a demo project to show you how to use the Galsenify package in a Next.js project presented at #LiveKoorGalsenDEV event; you can see the live demo at **[Galsenify Live Demo](https://demo-galsenify.netlify.app)**.

## Contributing

⚠️ If you want contribute on this project, please check first the **[Contributing Guide](./assets/CONTRIBUTING.md)**.

If you find 🐞 or you have a 💡 about the evolution of this project, you can open an **[issue](https://github.com/daoodaba975/galsenify/issues/new)**.
I'm also available on **[X (Twitter)](https://x.com/daoodaba975)**.

Thanks to all contributors 👏🏽

![Contributors](https://contrib.rocks/image?repo=daoodaba975/galsenify)

## Changelog

You can also consult the **[Changelog](./assets/CHANGELOG.md)** to see the different changes and evolution between versions.

## Licence

This package is released under the **[MIT Licence](./assets/LICENCE.md)** ✔

[![Made-In-Senegal](https://github.com/GalsenDev221/made.in.senegal/blob/master/assets/badge.svg)](https://github.com/GalsenDev221/made.in.senegal)
