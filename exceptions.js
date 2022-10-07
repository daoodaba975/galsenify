
class RegionReferenceError extends ReferenceError {
	constructor() {
		super();
		this.name = "RegionReferenceError";
		this.message = "Oups! Ce n'est pas une région valide !";
	}
}

module.exports = { RegionReferenceError };
