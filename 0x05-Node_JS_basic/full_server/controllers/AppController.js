/*
  * Contains the miscellaneous route handlers
  * @author Omos  George Isreal <https://github.com/hisreal123>
  */

class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
