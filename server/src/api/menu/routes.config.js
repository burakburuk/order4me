const MenuGroupController = require('./controllers/menu.controller');

exports.routesConfig = (app) => {
    app.post('/api/v1/menu', [MenuGroupController.insert]);
    app.get('/api/v1/menu', [MenuGroupController.list]);
    app.get('/api/v1/menu/:menuGroupId', [MenuGroupController.getById]);
    // app.patch('/api/v1/menu/:menuGroupId', [MenuGroupController.patchById]);
    app.delete('/api/v1/menu/:menuGroupId', [MenuGroupController.removeById]);
};
