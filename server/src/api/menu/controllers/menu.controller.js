const MenuGroupModel = require('../models/menu-group.model');

exports.insert = (req, res) => {
    MenuGroupModel.createMenuGroup(req.body).then((result) => {
        // eslint-disable-next-line no-underscore-dangle
        res.status(201).send({ id: result._id });
    });
};

exports.list = (req, res) => {
    const limit = req.query.limit && req.query.limit <= 100
        ? parseInt(req.query.limit, 10)
        : 10;
    let page = 0;
    if (req.query) {
        if (req.query.page) {
            req.query.page = parseInt(req.query.page, 10);
            page = Number.isInteger(req.query.page) ? req.query.page : 0;
        }
    }
    MenuGroupModel.list(limit, page).then((result) => {
        res.status(200).send(result);
    });
};

exports.getById = (req, res) => {
    MenuGroupModel.findById(req.params.menuGroupId).then((result) => {
        res.status(200).send(result);
    });
};

// exports.patchById = (req, res) => {
//     if (req.body.password) {
//         const salt = crypto.randomBytes(16).toString('base64');
//         const hash = crypto
//             .createHmac('sha512', salt)
//             .update(req.body.password)
//             .digest('base64');
//         req.body.password = `${salt}$${hash}`;
//     }

//     MenuGroupModel.patchUser(req.params.menuGroupId, req.body).then(() => {
//         res.status(204).send({});
//     });
// };

exports.removeById = (req, res) => {
    MenuGroupModel.removeById(req.params.menuGroupId).then(() => {
        res.status(204).send({});
    });
};
