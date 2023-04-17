"use strict";

const sn = require("./dataset/senegal.json");
const rg = require("./dataset/regions.json");
const dp = require("./dataset/departments.json");

const { lowerCase, findItem, departmentItem } = require("./libs/utils");
const { RegionReferenceError, DepartmentReferenceError } = require("./libs/exceptions.js");

module.exports = {
  /**
   * Get all data about the regions
   *
   * @typedef Region
   * @property {string} nom
   * @property {string} code
   * @property {number} population
   * @property {number} superficie
   * @property {string[]} departments
   *
   * @returns {Region[]} The regions
   */
  rg: () => rg,

  /**
   * Get all regions name.
   *
   * @returns {string[]} The region names
   */
  regions: () => {
    return rg.map((region) => region.nom);
  },

  /**
   * Get all regions code.
   *
   * @returns {string[]} The region codes
   */
  codes: () => {
    return rg.map((region) => region.code);
  },

  /**
   * Get departments by region.
   *
   * @param {string} regionName The name of the region
   *
   * @throws {RegionReferenceError} Argument regionName should not be empty
   *
   * @returns {string[]} The departments for a region
   */
  departments: (regionName) => {
    regionName = lowerCase(regionName);

    if (regionName.length == 0) {
      throw new RegionReferenceError();
    }

    const { departments } = findItem(regionName);
    return departments;
  },

  /**
   * Get the population count by region.
   *
   * @param{string} regionName - The name of the region
   *
   * @throws {RegionReferenceError} Argument regionName should not be empty
   *
   * @returns {number} The population of a region
   */
  population: (regionName) => {
    regionName = lowerCase(regionName);

    if (regionName.length == 0) {
      throw new RegionReferenceError();
    }

    const { population } = findItem(regionName);
    return population;
  },

  /**
   * Get area by region.
   *
   * @param{string} regionName - The name of the region
   *
   * @throws {RegionReferenceError} Argument regionName should not be empty
   *
   * @returns {number} The area of a region
   */
  superficie: (regionName) => {
    regionName = lowerCase(regionName);

    if (regionName.length == 0) {
      throw new RegionReferenceError();
    }

    const { superficie } = findItem(regionName);
    return superficie;
  },

  // Get Data from different departments

  /**
   * Get all departments names
   *
   * @returns {string[]} The department names
   */
  allDepartments: () => {
    return dp.map((department) => department.nom);
  },

  /**
   * Get the arrondissements by departments.
   *
   * @param {string} departmentName - The name of the department
   *
   * @throws {DepartmentReferenceError} Argument departmentName should not be empty
   *
   * @returns {string[]} The arrondissements for a department
   */
  arrondissements: (departmentName) => {
    departmentName = lowerCase(departmentName);

    if (departmentName.length == 0) {
      throw new DepartmentReferenceError();
    }

    const { arrondissements } = departmentItem(departmentName);
    return arrondissements;
  },

  /**
   * Get the population count by departments.
   *
   * @param {string} departmentName - The name of the department
   *
   * @throws {DepartmentReferenceError} Argument departmentName should not be empty
   *
   * @returns {int} The population count for a department
   */
  populationDepartment: (departmentName) => {
    departmentName = lowerCase(departmentName);

    if (departmentName.length == 0) {
      throw new DepartmentReferenceError();
    }

    const { population } = departmentItem(departmentName);
    return population;
  },

  /**
   * Get area by departments.
   *
   * @param {string} departmentName - The name of the department
   *
   * @throws {DepartmentReferenceError} Argument departmentName should not be empty
   *
   * @returns {int} The area for a department
   */
  superficieDepartment: (departmentName) => {
    departmentName = lowerCase(departmentName);

    if (departmentName.length == 0) {
      throw new DepartmentReferenceError();
    }

    const { superficie } = departmentItem(departmentName);
    return superficie;
  },


  /**
   * Get all data about Senegal.
   *
   * @typedef Country
   * @property {string} pays
   * @property {string} capital
   * @property {string} langueOfficielle
   * @property {string} languesNationales
   * @property {string} monnaie
   * @property {string} devise
   * @property {string} drapeau
   * @property {string} codeIso
   * @property {number} indicatif
   * @property {number} habitants
   * @property {number} surface
   * @property {number} regions
   * @property {number} departments
   *
   * @returns {Country} The infos about a country
   */
  sn: () => sn,

  /**
   * Get all national language
   *
   * @returns {string[]} The national languages
   */
  languesNationales: () => sn.languesNationales,
};
