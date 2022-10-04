"use strict";

const sn = require("./src/senegal.json");
const rg = require("./src/regions.json");

const LowerCase = (value) => value.toLowerCase().trim();
const findItem = (value) => rg.find(item => LowerCase(item.region) === LowerCase(value));

module.exports = {
    
    //* Get all data about region.
    rg: () => rg,

    //* Get all regions.
    regions: () => {
        let regionList = [];
        rg.map(({region}) => regionList.push(region));
        
        return regionList;
    },
    //* Get departments by region.
    departments: (region) => {
        let _region = LowerCase(region);

        if (!region || _region === "") {
            throw new Error('Oups! Ce n\'est pas une région valide !');
        }

        const response = findItem(_region);
        return response.departments;
    },
    //* Get all regions code.
    codes: () => {
        let codeList = [];
        rg.map(({code}) => codeList.push(code));
        
        return codeList;
    },
    //* Get populations by region.
    population: (region) => {
        let _region = LowerCase(region);
    
        if (!region || _region === "") {
          throw new Error('Oups! Ce n\'est pas une région valide !');
        }
    
        const response = findItem(_region);
        return response.population;
    },
    //* Get area by region.
    superficie: (region) => {
        let _region = LowerCase(region);
    
        if (!region || _region === "") {
          throw new Error('Oups! Ce n\'est pas une région valide !');
        }
    
        const response = findItem(_region);
        return response.area;
    },

    //* Get all data about Senegal.
    sn: () => sn,

    //* Get all national language.
    langNat: () => {
        let langNatList = [];
        sn.map(({langNat}) => langNatList.push(langNat));
        
        return langNatList;
    },

};