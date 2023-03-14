class RegionReferenceError extends ReferenceError {
	constructor() {
		super();
		this.name = "RegionReferenceError";
		this.message = "Oups! Ce n'est pas une région valide !";
	}
}

class DepartmentReferenceError extends ReferenceError {
	constructor() {
		super();
		this.name = "DepartmentReferenceError";
		this.message = "Oups! Ce n'est pas un Département valide !";
	}
}

module.exports = { RegionReferenceError, DepartmentReferenceError };