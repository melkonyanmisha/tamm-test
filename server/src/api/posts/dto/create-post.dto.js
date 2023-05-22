export default class CreatePostDto {
  id;
  userId;
  title;
  text;

  /**
   * To transform Model object
   * @param model
   */
  constructor(model) {
    this.id = model.id;
    this.userId = model.userId?.toHexString();
    this.title = model.title;
    this.text = model.text;
  }
}
