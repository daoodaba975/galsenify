# Galsenify 📦💫

![COVER](assets/img/cover.png)

***Lire en [Français](./assets/translate/FR.md)***

**Galsenify** is a package that allows you to easily manipulate data about Senegal.  
It offers a lot of information about Senegal.

- Current version ➡️ 1.0.0

## Install 📥

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

## Usage 💡

```js
import galsenify from 'galsenify';
// or
const galsenify = require("galsenify");

// get all Senegal's regions
console.log(galsenify.regions());

// results
[
  'Dakar',   'Diourbel',
  'Fatick',  'Kaffrine',
  'Kaolack', 'Kédougou',
  'Kolda',   'Louga',
  'Matam',   'Saint-Louis',
  'Sédhiou', 'Tambacounda',
  'Thies',   'Ziguinchor'
]
```

## List of available commands 🧩

```js
// Get all data about Senegal.
console.log(galsenify.sn());

// Get all national language.
console.log(galsenify.languesNationales());

// Get all data about region.
console.log(galsenify.rg());

// Get all regions.
console.log(galsenify.regions());

// Get departments by region.
// replace "region" by an existing region (example : Dakar)
console.log(galsenify.departments("region"));

// Get populations by region.
// replace "region" by an existing region (example : thies)
console.log(galsenify.population("region"));

// Get area by region.
// replace "region" by an existing region (example : KAOLACK)
console.log(galsenify.superficie("region"));

// Get all regions code.
console.log(galsenify.codes());
```

## Example ✅

Coming soon ⏳...

## Author 🌟

[![Daouda BA](https://avatars.githubusercontent.com/daoodaba975?s=64)](https://github.com/daoodaba975)  
Created by **[Daouda BA](https://github.com/daoodaba975)**

You can buy me a coffee ☕ and help the project to grow up 🙌🏾

<a href="https://www.buymeacoffee.com/daoodaba975" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/lato-orange.png" alt="Buy Me A Coffee" style="height: 51px !important;width: 217px !important; border-radius: 10px;" ></a>

## Contributing 🌍

⚠️ If you want contribute on this project, please check firt the **[Contributing Guide](./assets/CONTRIBUTING.md)**.

If you find 🐞 or you have a 💡 about the evolution of this project, you can open an **[issue](https://github.com/daoodaba975/galsenify/issues/new)**.  
I'm also available on **[Twitter](https://twitter.com/daoodaba975)**.

A special thanks to [Dame LEYE (Honorable Con)](https://github.com/honorableCon) for his contribution on this project.

[![Honorable Con](https://avatars.githubusercontent.com/honorableCon?s=64)](https://github.com/honorableCon)

## Changelog 🔁

You can also consult the **[Changelog](./assets/CHANGELOG.md)** to see the different changes and evolution between versions.

## Licence 🎫

This package is released under the **[MIT Licence](./assets/LICENCE.md)** ✔
