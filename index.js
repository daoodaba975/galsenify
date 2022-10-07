"use strict";

const sn = require("./src/senegal.json");
const rg = require("./src/regions.json");

const { LowerCase, findItem } = require("./libs/utils");
const { RegionReferenceError } = require("./libs/exceptions.js");

module.exports = {
    
    //* Get all data about region.
    rg: () => rg,

    //* Get all regions names.
    regions: () => {
        let regionNames = [];

        regionNames = rg.map(regionDetail => regionDetail.region);
        
        return regionNames;
    },
    //* Get departments by region.
    departments: (region) => {
        let _region = LowerCase(region);

        if (!region || _region === "") {
            throw new RegionReferenceError;
        }

        const response = findItem(_region);
        return response.departments;
    },
    //* Get all regions code.
    codes: () => {
        let codeList = [];

        codeList = rg.map(codeDetail => codeDetail.code);
        
        return codeList;
    },
    //* Get populations by region.
    population: (region) => {
        let _region = LowerCase(region);
    
        if (!region || _region === "") {
            throw new RegionReferenceError;
        }
    
        const response = findItem(_region);
        return response.population;
    },
    //* Get area by region.
    superficie: (region) => {
        let _region = LowerCase(region);
    
        if (!region || _region === "") {
            throw new RegionReferenceError;
        }
    
        const response = findItem(_region);
        return response.superficie;
    },

    //* Get all data about Senegal.
    sn: () => sn,

    //* Get all national language.
    languesNationales: () => sn.languesNationales,

};
