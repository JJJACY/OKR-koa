// 引入 koa 框架
const Koa = require('koa');
// 引入 路由
const router = require('./routes');
// 实例化应用
const response = require('./middlewares/response');
const app = new Koa();

// 使用路由，监听3000 端口
app
  .use(response)
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3000)