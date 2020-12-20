const Controller = require('egg').Controller;
class MineController extends Controller {
  async mine() {
    this.ctx.body = {
      msg: 'hello'
    }
  }
}
module.exports = MineController;