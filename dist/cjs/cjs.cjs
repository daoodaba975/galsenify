'use strict';

var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// src/dataset/senegal.json
var senegal_default;
var init_senegal = __esm({
  "src/dataset/senegal.json"() {
    senegal_default = {
      pays: "S\xE9n\xE9gal",
      capital: "Dakar",
      langueOfficielle: "Fran\xE7ais",
      languesNationales: ["Wolof", "Pular", "S\xE9r\xE8re", "Diola", "Mandingue", "Sonink\xE9", "Bambara"],
      monnaie: "Franc CFA",
      devise: "Un Peuple, Un But, Une Foi",
      drapeau: "https://cdn.countryflags.com/thumbs/senegal/flag-400.png",
      codeIso: "SN",
      indicatif: 221,
      habitants: 17738795,
      surface: 196712,
      regions: 14,
      departments: 46
    };
  }
});

// src/dataset/regions.json
var regions_default;
var init_regions = __esm({
  "src/dataset/regions.json"() {
    regions_default = [
      {
        nom: "Dakar",
        code: "DK",
        population: 4042225,
        superficie: 547,
        departments: ["Dakar", "Pikine", "Gu\xE9diawaye", "Rufisque", "Keur Massar"]
      },
      {
        nom: "Diourbel",
        code: "DB",
        population: 1980821,
        superficie: 4824,
        departments: ["Diourbel", "Bambey", "Mback\xE9"]
      },
      {
        nom: "Fatick",
        code: "FK",
        population: 932629,
        superficie: 6849,
        departments: ["Fatick", "Foundiougne", "Gossas"]
      },
      {
        nom: "Kaffrine",
        code: "KA",
        population: 782273,
        superficie: 11262,
        departments: ["Kaffrine", "Birkilane", "Mal\xE8me-Hodar", "Koungheul"]
      },
      {
        nom: "Kaolack",
        code: "KL",
        population: 1267014,
        superficie: 5357,
        departments: ["Kaolack", "Guinguin\xE9o", "Nioro du Rip"]
      },
      {
        nom: "K\xE9dougou",
        code: "KE",
        population: 203723,
        superficie: 16800,
        departments: ["K\xE9dougou", "Sal\xE9mata", "Saraya"]
      },
      {
        nom: "Kolda",
        code: "KD",
        population: 875660,
        superficie: 13771,
        departments: ["Kolda", "M\xE9dina Yoro Foulah", "V\xE9lingara"]
      },
      {
        nom: "Louga",
        code: "LG",
        population: 1121619,
        superficie: 24889,
        departments: ["Louga", "K\xE9b\xE9mer", "Lingu\xE8re"]
      },
      {
        nom: "Matam",
        code: "MT",
        population: 789219,
        superficie: 29445,
        departments: ["Matam", "Kanel", "Ran\xE9rou"]
      },
      {
        nom: "Saint-Louis",
        code: "SL",
        population: 1150062,
        superficie: 19241,
        departments: ["Saint-Louis", "Dagana", "Podor"]
      },
      {
        nom: "S\xE9dhiou",
        code: "SE",
        population: 612649,
        superficie: 7341,
        departments: ["S\xE9dhiou", "Bounkiling", "Goudomp"]
      },
      {
        nom: "Tambacounda",
        code: "TC",
        population: 937182,
        superficie: 42364,
        departments: ["Tambacounda", "Goudiry", "Bakel", "Koumpentoum"]
      },
      {
        nom: "Thies",
        code: "TH",
        population: 2280458,
        superficie: 6670,
        departments: ["Thies", "Tivaouane", "Mbour"]
      },
      {
        nom: "Ziguinchor",
        code: "ZG",
        population: 729951,
        superficie: 7352,
        departments: ["Ziguinchor", "Bignona", "Oussouye"]
      }
    ];
  }
});

// src/dataset/departments.json
var departments_default;
var init_departments = __esm({
  "src/dataset/departments.json"() {
    departments_default = [
      {
        nom: "Dakar",
        region: "Dakar",
        arrondissements: ["Almadies", "Dakar Plateau", "Grand Dakar", "Parcelles Assainies"]
      },
      {
        nom: "Gu\xE9diawaye",
        region: "Dakar",
        arrondissements: ["Golf Sud", "M\xE9dina Gounass", "Ndiar\xE8me Limamoulaye", "Sam Notaire", "Wakhinane Nimzatt"]
      },
      {
        nom: "Keur Massar",
        region: "Dakar",
        arrondissements: ["Yeumbeul Nord", "Yeumbeul Sud", "Malika", "Keur Massar Nord", "Keur Massar Sud", "Jaxaay-Parcelles"]
      },
      {
        nom: "Pikine",
        region: "Dakar",
        arrondissements: ["Dagoudane", "Thiaroye"]
      },
      {
        nom: "Rufisque",
        region: "Dakar",
        arrondissements: ["Rufisque", "Sangalkam", "Bambylor"]
      },
      {
        nom: "Bambey",
        region: "Diourbel",
        arrondissements: ["Baba Garage", "Lambaye", "Ngoye"]
      },
      {
        nom: "Diourbel",
        region: "Diourbel",
        arrondissements: ["Ndindy", "Ndoulo"]
      },
      {
        nom: "Mback\xE9",
        region: "Diourbel",
        arrondissements: ["Kael", "Ndame", "Ta\xEFf"]
      },
      {
        nom: "Fatick",
        region: "Fatick",
        arrondissements: ["Diakhao", "Fimela", "Niakhar", "Tattaguine"]
      },
      {
        nom: "Foundiougne",
        region: "Fatick",
        arrondissements: ["Djilor", "Niodior", "Toubacouta"]
      },
      {
        nom: "Gossas",
        region: "Fatick",
        arrondissements: ["Colobane", "Ouadiour"]
      },
      {
        nom: "Birkelane",
        region: "Kaffrine",
        arrondissements: ["Keur Mboucki", "Mabo"]
      },
      {
        nom: "Kaffrine",
        region: "Kaffrine",
        arrondissements: ["Gniby", "Katakel"]
      },
      {
        nom: "Koungheul",
        region: "Kaffrine",
        arrondissements: ["Missirah Wadene", "Ida Mouride", "Lour Escale"]
      },
      {
        nom: "Mal\xE8me-Hodar",
        region: "Kaffrine",
        arrondissements: ["Darou Minam 2", "Sagna"]
      },
      {
        nom: "Guinguin\xE9o",
        region: "Kaolack",
        arrondissements: ["Mbadakhoune", "Ngu\xE9lou"]
      },
      {
        nom: "Kaolack",
        region: "Kaolack",
        arrondissements: ["Koumbal", "Ndi\xE9dieng", "Sibassor"]
      },
      {
        nom: "Nioro du Rip",
        region: "Kaolack",
        arrondissements: ["Wack Ngouna", "M\xE9dina Sabakh", "Paoskoto"]
      },
      {
        nom: "K\xE9dougou",
        region: "K\xE9dougou",
        arrondissements: ["Bandafassi", "Fongolembi"]
      },
      {
        nom: "Salemata",
        region: "K\xE9dougou",
        arrondissements: ["Dakateli", "Dar Salam"]
      },
      {
        nom: "Saraya",
        region: "K\xE9dougou",
        arrondissements: ["Bembou", "Sabodala"]
      },
      {
        nom: "Kolda",
        region: "Kolda",
        arrondissements: ["Djoulacolon", "Mampatim", "Sar\xE9 Bidji"]
      },
      {
        nom: "V\xE9lingara",
        region: "Kolda",
        arrondissements: ["Bonconto", "Pakour", "Sar\xE9 Coly Sall\xE9"]
      },
      {
        nom: "M\xE9dina Yoro Foulah",
        region: "Kolda",
        arrondissements: ["Fafacourou", "Ndorna", "Niaming"]
      },
      {
        nom: "K\xE9b\xE9mer",
        region: "Louga",
        arrondissements: ["Darou Mousty", "Ndande", "Sagatta Gueth"]
      },
      {
        nom: "Lingu\xE8re",
        region: "Louga",
        arrondissements: ["Bark\xE9dji", "Dodji", "Sagatta", "Dioloff", "Yang-Yang"]
      },
      {
        nom: "Louga",
        region: "Louga",
        arrondissements: ["Coki", "Mb\xE9di\xE8ne", "Sakal", "Keur Momar Sarr"]
      },
      {
        nom: "Kanel",
        region: "Matam",
        arrondissements: ["Orkadiere", "Wouro Sidy"]
      },
      {
        nom: "Matam",
        region: "Matam",
        arrondissements: ["Agnam Civol", "Ogo"]
      },
      {
        nom: "Ran\xE9rou-Ferlo",
        region: "Matam",
        arrondissements: ["Orkadiere", "Wouro Sidy"]
      },
      {
        nom: "Dagana",
        region: "Saint-Louis",
        arrondissements: ["Mbane", "Ndiaye"]
      },
      {
        nom: "Podor",
        region: "Saint-Louis",
        arrondissements: ["Cas-Cas", "Gamadji Sar\xE9", "Sald\xE9", "Thill\xE9 Boubacar"]
      },
      {
        nom: "Saint-Louis",
        region: "Saint-Louis",
        arrondissements: ["Rao"]
      },
      {
        nom: "Bounkiling",
        region: "S\xE9dhiou",
        arrondissements: ["Boghal", "Bona", "Diaroum\xE9"]
      },
      {
        nom: "Goudomp",
        region: "S\xE9dhiou",
        arrondissements: ["Djibanar", "Simbandi Brassou", "Karantaba"]
      },
      {
        nom: "S\xE9dhiou",
        region: "S\xE9dhiou",
        arrondissements: ["Diend\xE9", "Djibabouya", "Djiredji"]
      },
      {
        nom: "Bakel",
        region: "Tambacounda",
        arrondissements: ["B\xE9l\xE9", "K\xE9niaba", "Moud\xE9ry"]
      },
      {
        nom: "Goudiry",
        region: "Tambacounda",
        arrondissements: ["Bala", "Boynguel Bamba", "Diank\xE9 Makha", "Koulor"]
      },
      {
        nom: "Koumpentoum",
        region: "Tambacounda",
        arrondissements: ["Bamba Thial\xE8ne", "Kouthiaba Wolof"]
      },
      {
        nom: "Tambacounda",
        region: "Tambacounda",
        arrondissements: ["Koussanar", "Makacolibantang", "Missirah"]
      },
      {
        nom: "Mbour",
        region: "Thies",
        arrondissements: ["Fissel", "Sindia", "S\xE9ss\xE8ne"]
      },
      {
        nom: "Thies",
        region: "Thies",
        arrondissements: ["Keur Moussa", "Notto", "Thi\xE9naba", "Thies Nord", "Thies Sud"]
      },
      {
        nom: "Tivaouane",
        region: "Thies",
        arrondissements: ["M\xE9rina Dakhar", "M\xE9ouane", "Niakh\xE8ne", "Pambal"]
      },
      {
        nom: "Bignona",
        region: "Ziguinchor",
        arrondissements: ["Katab 1", "Sindian", "Tendouck", "Tenghory"]
      },
      {
        nom: "Oussouye",
        region: "Ziguinchor",
        arrondissements: ["Kabrousse", "Loudia Ouoloff"]
      },
      {
        nom: "Ziguinchor",
        region: "Ziguinchor",
        arrondissements: ["Ad\xE9ane", "Boutoupa Camaracounda", "Enampore", "Niaguis", "Nyassia", "Ziguinchor"]
      }
    ];
  }
});

// src/libs/exceptions.ts
var RegionReferenceError, DepartmentReferenceError;
var init_exceptions = __esm({
  "src/libs/exceptions.ts"() {
    RegionReferenceError = class extends ReferenceError {
      constructor(message = "Oups! Ce n'est pas une r\xE9gion valide !") {
        super(message);
        this.name = "RegionReferenceError";
      }
    };
    DepartmentReferenceError = class extends ReferenceError {
      constructor(message = "Oups! Ce n'est pas un D\xE9partement valide !") {
        super(message);
        this.name = "DepartmentReferenceError";
      }
    };
  }
});

// src/libs/utils.ts
var lowerCase, findItem, departmentItem;
var init_utils = __esm({
  "src/libs/utils.ts"() {
    init_exceptions();
    lowerCase = (value) => (value == null ? undefined : value.toLowerCase().trim()) ?? "";
    findItem = (items, value) => {
      const region = items.find((region2) => lowerCase(region2.nom) === lowerCase(value));
      if (!region) throw new RegionReferenceError();
      return region;
    };
    departmentItem = (items, value) => {
      const department = items.find((department2) => lowerCase(department2.nom) === lowerCase(value));
      if (!department) throw new DepartmentReferenceError();
      return department;
    };
  }
});

// src/index.ts
var sn_data, rg_data, dp_data, Galsenify, galsenify, index_default;
var init_index = __esm({
  "src/index.ts"() {
    init_senegal();
    init_regions();
    init_departments();
    init_utils();
    init_exceptions();
    sn_data = senegal_default;
    rg_data = regions_default;
    dp_data = departments_default;
    Galsenify = class {
      // Données brutes
      sn_data = sn_data;
      rg_data = rg_data;
      dp_data = dp_data;
      // Fonction pour obtenir toutes les données des régions
      rg() {
        return this.rg_data;
      }
      regions() {
        return this.rg_data.map((region) => region.nom);
      }
      codes() {
        return this.rg_data.map((region) => region.code);
      }
      departments(regionName) {
        if (!regionName) {
          throw new RegionReferenceError("Argument regionName should not be empty");
        }
        const region = findItem(this.rg_data, lowerCase(regionName));
        return region ? region.departments : [];
      }
      population(regionName) {
        if (!regionName) {
          throw new RegionReferenceError("Argument regionName should not be empty");
        }
        const region = findItem(this.rg_data, lowerCase(regionName));
        return region ? region.population : 0;
      }
      superficie(regionName) {
        if (!regionName) {
          throw new RegionReferenceError("Argument regionName should not be empty");
        }
        const region = findItem(this.rg_data, lowerCase(regionName));
        return region ? region.superficie : 0;
      }
      allDepartments() {
        return this.dp_data.map((department) => department.nom);
      }
      arrondissements(departmentName) {
        if (!departmentName) {
          throw new DepartmentReferenceError("Argument departmentName should not be empty");
        }
        const department = departmentItem(this.dp_data, lowerCase(departmentName));
        return department ? department.arrondissements : [];
      }
      populationDepartment(departmentName) {
        if (!departmentName) {
          throw new DepartmentReferenceError("Argument departmentName should not be empty");
        }
        const department = departmentItem(this.dp_data, lowerCase(departmentName));
        return department ? department.population : 0;
      }
      superficieDepartment(departmentName) {
        if (!departmentName) {
          throw new DepartmentReferenceError("Argument departmentName should not be empty");
        }
        const department = departmentItem(this.dp_data, lowerCase(departmentName));
        return department ? department.superficie : 0;
      }
      sn() {
        return this.sn_data;
      }
      languesNationales() {
        return this.sn_data.languesNationales;
      }
    };
    galsenify = new Galsenify();
    index_default = galsenify;
  }
});

// src/cjs.cts
var require_cjs = __commonJS({
  "src/cjs.cts"(exports, module) {
    init_index();
    module.exports = index_default;
    module.exports.default = index_default;
  }
});
var cjs = require_cjs();

module.exports = cjs;
//# sourceMappingURL=cjs.cjs.map
//# sourceMappingURL=cjs.cjs.map