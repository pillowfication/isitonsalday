const Koa = require('koa')
const send = require('koa-send')

const app = new Koa()
const PORT = +process.argv[2] || 3000

app.use(async (ctx) => {
  await send(ctx, '/src/index.html')
})

app.listen(PORT)
