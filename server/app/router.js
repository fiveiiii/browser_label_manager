'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/mine', controller.mine.mine);
  router.post('/addLabelItem', controller.addLabelItem.addLabelItem)
};
