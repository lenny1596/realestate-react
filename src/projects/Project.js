export class Project {
  // An object containing the initial values for the project properties.
  constructor(initializer) {
    // Initialize default values for all properties
    this.id = undefined;
    this.name = "";
    this.description = "";
    this.imageUrl = "";
    this.contractTypeId = null;
    this.contractSignedOn = new Date();
    this.budget = 0;
    this.isActive = false;

    // If an initializer object is provided, use its values to override the default values
    if (!initializer) return;
    if (initializer.id) this.id = initializer.id;
    if (initializer.name) this.name = initializer.name;
    if (initializer.description) this.description = initializer.description;
    if (initializer.imageUrl) this.imageUrl = initializer.imageUrl;
    if (initializer.contractTypeId)
      this.contractTypeId = initializer.contractTypeId;
    if (initializer.contractSignedOn)
      this.contractSignedOn = initializer.contractSignedOn;
    if (initializer.budget) this.budget = initializer.budget;
    if (initializer.isActive) this.isActive = initializer.isActive;
  }

  /**
   * Determines whether the project is new (i.e. has not been saved to the database yet).
   * @ returns {boolean} - Whether the project is new or not.
   */
  isNew() {
    return this.id === undefined;
  }
}
