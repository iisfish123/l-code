const Koa = require('koa2')
const s = require('koa-static')
const path = require('path')
const app = new Koa()

// 设置静态资源文件夹的路径
app.use(s(path.join(process.cwd(), '../client/dist')))

// 启动应用
app.listen(3000, () => {
  console.log('Koa app is listening on port 3000')
})
