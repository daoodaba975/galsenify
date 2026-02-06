# Galsenify 📦

![COVER](../img/cover.png)

**Galsenify** est une bibliothèque complète de données sénégalaises, elle offre une multitude d'informations sur le pays de la Teranga.

- Version actuelle ➡️ 1.2.0
- Source des données : **RGPH-5 2023** (5ème Recensement Général de la Population et de l'Habitat)

## Installation

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

## Utilisation

```js
import galsenify from "galsenify";
// ou
const galsenify = require("galsenify");

// obtenir toutes les régions du Sénégal
console.log(galsenify.regions());

// résultats
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

## Liste des commandes disponibles

### Pays 🇸🇳

```js
// Obtenir toutes les données sur le Sénégal
galsenify.sn();
// { pays: "Sénégal", capital: "Dakar", habitants: 18126390, ... }

// Obtenir toutes les langues nationales
galsenify.languesNationales();
// ["Wolof", "Pular", "Sérère", "Diola", "Mandingue", "Soninké", "Bambara"]
```

### Régions 🗺️

```js
// Obtenir toutes les données sur les régions
galsenify.rg();

// Obtenir la liste de toutes les régions
galsenify.regions();

// Obtenir tous les codes des régions
galsenify.codes();
// ["DK", "DB", "FK", "KA", "KL", "KE", "KD", "LG", "MT", "SL", "SE", "TC", "TH", "ZG"]

// Obtenir les départements par nom de région
galsenify.departments("Dakar");
// ["Dakar", "Pikine", "Guédiawaye", "Rufisque", "Keur Massar"]

// Obtenir la population par nom de région
galsenify.population("Dakar");
// 4004427

// Obtenir la superficie (km²) par nom de région
galsenify.superficie("Thiès");
// 6670
```

### Départements 🏛️

```js
// Obtenir la liste de tous les départements
galsenify.allDepartments();

// Obtenir les arrondissements par nom de département
galsenify.arrondissements("Dakar");

// Obtenir la population par nom de département
galsenify.populationDepartment("Mbacké");
// 1359756

// Obtenir la superficie (km²) par nom de département
galsenify.superficieDepartment("Mbour");
// 1725
```

### Opérateurs Télécom 📱

```js
// Obtenir tous les opérateurs télécom
galsenify.operateurs();

// Obtenir uniquement les opérateurs mobiles
galsenify.operateursMobiles();
// [{ nom: "Orange", prefixes: ["77", "78"], ... }, ...]

// Trouver un opérateur par préfixe
galsenify.findOperateurByPrefix("77");
// { nom: "Orange", prefixes: ["77", "78"], type: "mobile", ... }

// Trouver un opérateur par numéro de téléphone
galsenify.findOperateurByNumber("771234567");
// { nom: "Orange", ... }

galsenify.findOperateurByNumber("76 123 45 67");
// { nom: "Free", ... }
```

### Recherche 🔍

```js
// Recherche globale (régions, départements)
galsenify.search("Dakar");
// [{ type: "region", nom: "Dakar", data: {...} }, { type: "department", nom: "Dakar", data: {...} }, ...]

// Trouver une région par code
galsenify.findByCode("DK");
// { nom: "Dakar", code: "DK", population: 4004427, ... }
```

### Calculs 📊

```js
// Obtenir la population totale (somme de toutes les régions)
galsenify.totalPopulation();
// 18126390

// Obtenir la superficie totale (somme de toutes les régions)
galsenify.totalSuperficie();
// 196712

// Obtenir la densité de population par région (hab/km²)
galsenify.density("Dakar");
// 7322

// Obtenir la densité de population par département (hab/km²)
galsenify.densityDepartment("Mbacké");
// 567

// Obtenir la densité nationale (hab/km²)
galsenify.nationalDensity();
// 92
```

### Filtres & Tri 📈

```js
// Obtenir les régions triées par population (décroissant)
galsenify.regionsByPopulation();
// [{ nom: "Dakar", ... }, { nom: "Thiès", ... }, ...]

// Obtenir les régions triées par population (croissant)
galsenify.regionsByPopulation("asc");

// Obtenir les régions triées par superficie
galsenify.regionsBySuperficie();

// Obtenir les régions triées par densité
galsenify.regionsByDensity();

// Obtenir les départements triés par population
galsenify.departmentsByPopulation();

// Obtenir les départements par code de région
galsenify.departmentsByRegion("DK");
// [{ nom: "Dakar", ... }, { nom: "Pikine", ... }, ...]
```

### Aléatoire 🎲

```js
// Obtenir une région aléatoire
galsenify.randomRegion();
// { nom: "Kaolack", code: "KL", population: 1336719, ... }

// Obtenir un département aléatoire
galsenify.randomDepartment();
// { nom: "Mbour", region: "Thiès", population: 935304, ... }
```

## Résumé des données

| Catégorie    | Nombre | Source      |
| ------------ | ------ | ----------- |
| Régions      | 14     | RGPH-5 2023 |
| Départements | 46     | RGPH-5 2023 |
| Opérateurs   | 4      | 2024        |

## Exemple

**[Galsenify Demo](https://github.com/daoodaba975/galsenify.demo)** est un projet démo pour vous montrer comment utiliser le package Galsenify dans un projet Next.js présenté lors de l'événement #LiveKoorGalsenDEV ; vous pouvez voir la démo en ligne sur **[Galsenify Live Demo](https://demo-galsenify.netlify.app)**.

## Contribution

⚠️ Si vous souhaitez contribuer sur ce projet, veuillez d'abord consulter le **[Guide de Contribution](CONTRIBUTING-fr.md)**.

Si vous trouvez un 🐞 ou que vous avez une 💡 sur l'évolution de ce projet, vous pouvez ouvrir une **[issue](https://github.com/daoodaba975/galsenify/issues/new)**.
Je suis également disponible sur **[X (Twitter)](https://x.com/daoodaba975)**.

Merci à tous les contributeurs 👏🏽

![Contributors](https://contrib.rocks/image?repo=daoodaba975/galsenify)

## Changelog

Vous pouvez aussi consulter le **[Changelog](../CHANGELOG.md)** pour voir les différents changements et évolutions entre les versions.

## Licence

Ce package est publié sous **[Licence MIT](../LICENCE.md)** ✔

[![Made-In-Senegal](https://github.com/GalsenDev221/made.in.senegal/blob/master/assets/badge.svg)](https://github.com/GalsenDev221/made.in.senegal)
