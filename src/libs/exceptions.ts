export class RegionReferenceError extends ReferenceError {
  constructor(message: string = "Oups! Ce n'est pas une région valide !") {
    super(message);
    this.name = 'RegionReferenceError';
  }
}

export class DepartmentReferenceError extends ReferenceError {
  constructor(message: string = "Oups! Ce n'est pas un Département valide !") {
    super(message);
    this.name = 'DepartmentReferenceError';
  }
}
