const rg = require("../dataset/regions.json");

const LowerCase = (value) => value.toLowerCase().trim();
const findItem = (value) => {
	const result = rg.find(item => LowerCase(item.region) === LowerCase(value));

	if (result == undefined)
		throw new RegionReferenceError;

	return result;
}

module.exports = { LowerCase, findItem };