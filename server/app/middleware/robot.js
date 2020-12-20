module.exports = (options, app) => {
  return async function robot(ctx, next) {
    console.log('中间件 1 执行')
    await next();
  }
}