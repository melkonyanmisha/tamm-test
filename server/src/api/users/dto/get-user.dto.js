class GetUserDto {
  id;
  first_name;
  last_name;
  email;

  /**
   * To transform Model object
   * @param model
   */
  constructor(model) {
    this.id = model.id;
    this.first_name = model.first_name;
    this.last_name = model.last_name;
    this.email = model.email;
  }
}

export default GetUserDto;
