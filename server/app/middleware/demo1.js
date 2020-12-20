module.exports = (options, app) => {
  return async function demo1(ctx, next) {
    console.log('demo1 执行')
    await next();
  }
}