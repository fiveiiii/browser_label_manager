'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/mine', controller.mine.mine);
  router.get('/news', controller.news.list);
  router.post('/addLabelItem', controller.addLabelItem.addLabelItem)
};
