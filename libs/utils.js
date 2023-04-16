const rg = require("../dataset/regions.json");
const dp = require("../dataset/departments.json");

const lowerCase = (value) => value.toLowerCase().trim();

const findItem = (value) => {
	const region = rg.find(
		(region) => lowerCase(region.nom) === lowerCase(value)
	);

	if (region === undefined) throw new RegionReferenceError();

	return region;
}

const departmentItem = (value) => {
	const department = dp.find(
		(department) => lowerCase(department.nom) === lowerCase(value)
	);

	if (department === undefined) throw new DepartmentReferenceError();;

	return department;
}

module.exports = { lowerCase, findItem, departmentItem };