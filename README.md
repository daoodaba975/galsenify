# Galsenify 📦💫

**Galsenify** is a package that allows you to easily manipulate data about Senegal.  
It offers a lot of information about Senegal.

***Lire en [Français](./assets/translate/FR.md)***

## Install 📥

`via Npm`

```bash
npm i galsenify
```

`or Yarn`

```bash
yarn add galsenify
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
// replace "value" by an existing department (example : Dakar)
console.log(galsenify.departments("value"));

// Get populations by region.
// replace "value" by an existing department (example : thies)
console.log(galsenify.population("value"));

// Get area by region.
// replace "value" by an existing department (example : KAOLACK)
console.log(galsenify.superficie("value"));

// Get all regions code.
console.log(galsenify.codes());
```

## Example ✅

...

### Author 🌟

<table>
  <tr>
    <td align="center">
        <a href="https://github.com/daoodaba975">
            <img src="https://avatars.githubusercontent.com/daoodaba975" width="80px;" alt=""/>
            <br/>
            <sub><b>Daouda BA</b></sub>
        </a>
            <br/>
        <a href="https://daooda.dev" title="Website">🌐</a>
        <a href="https://twitter.com/daoodaba975" title="Twitter">🐤</a>
    </td>
  </tr>
</table>

Created by **[Daouda BA](https://github.com/daoodaba975)**

You can buy me a coffee ☕ and help the project to grow up 🙌🏾

<a href="https://www.buymeacoffee.com/daoodaba975" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/lato-orange.png" alt="Buy Me A Coffee" style="height: 51px !important;width: 217px !important; border-radius: 10px;" ></a>

### Contributing 🌍

⚠️ If you want contribute on this project, please check firt the **[Contributing Guide](./assets/CONTRIBUTING.md)**.

If you find 🐞 or you have a 💡 about the evolution of this project, you can open an **[issue](https://github.com/daoodaba975/galsenify/issues/new)**.  
I'm also available on **[Twitter](https://twitter.com/daoodaba975)**.

#### Changelog 🔁

You can also consult the **[Changelog](./assets/CHANGELOG.md)** to see the different changes and evolution between versions.

#### Licence 🎫

This package is released under the **[MIT Licence](./assets/LICENCE.md)** ✔
