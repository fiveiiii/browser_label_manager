const Service = require('egg').Service;

class NewsService extends Service {
  async list(){
    console.log('新闻服务')
  }
}
module.exports = NewsService