const MenuGroupRouter = require('./menu/routes.config');

function setHeaders(server) {
    return server.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Credentials', 'true');
        res.header(
            'Access-Control-Allow-Methods',
            'GET,HEAD,PUT,PATCH,POST,DELETE',
        );
        res.header('Access-Control-Expose-Headers', 'Content-Length');
        res.header(
            'Access-Control-Allow-Headers',
            'Accept, Authorization, Content-Type, X-Requested-With, Range',
        );
        if (req.method === 'OPTIONS') {
            return res.send(200);
        }
        return next();
    });
}

function api(server) {
    setHeaders(server);

    MenuGroupRouter.routesConfig(server);
}

module.exports = api;
