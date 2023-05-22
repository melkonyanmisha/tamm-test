class CreateUserDto {
  id;
  firstName;
  lastName;
  email;
  isVerified;

  /**
   * To transform Model object
   * @param model
   */
  constructor(model) {
    this.id = model.id;
    this.firstName = model.firstName;
    this.lastName = model.lastName;
    this.email = model.email;
    this.isVerified = model.isVerified;
  }
}

export default CreateUserDto;
