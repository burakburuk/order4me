/* eslint-disable no-restricted-syntax */
/* eslint-disable no-underscore-dangle */
const { mongoose } = require('../../../services/mongoose.service');
const { MenuItemSchema } = require('./menu-item.model');

const { Schema } = mongoose;

const menuGroupSchema = new Schema({
    name: String,
    imageLink: String,
    menuList: [MenuItemSchema],
});

// menuGroupSchema.virtual('id').get(() => this._id.toHexString());

// Ensure virtual fields are serialised.
menuGroupSchema.set('toJSON', {
    virtuals: true,
});

menuGroupSchema.findById = (cb) => this.model('MenuGroup').find({ id: this.id }, cb);

const MenuGroupModel = mongoose.model('MenuGroup', menuGroupSchema);

exports.findById = (id) => MenuGroupModel.findById(id).then((result) => {
    const resultJson = result.toJSON();
    delete resultJson._id;
    delete resultJson.__v;
    return resultJson;
});

exports.createMenuGroup = (menuGroupData) => {
    const menuGroup = new MenuGroupModel(menuGroupData);
    return menuGroup.save();
};

exports.list = (perPage, page) => new Promise((resolve, reject) => {
    MenuGroupModel.find()
        .limit(perPage)
        .skip(perPage * page)
        .exec((err, menuGroups) => {
            if (err) {
                reject(err);
            } else {
                resolve(menuGroups);
            }
        });
});

// exports.patchUser = (id, userData) => new Promise((resolve, reject) => {
//     User.findById(id, (err, user) => {
//         if (err) reject(err);

//         const patchedUser = { ...user };
//         // eslint-disable-next-line guard-for-in
//         for (const i in userData) {
//             patchedUser[i] = userData[i];
//         }
//         patchedUser.save((error, updatedUser) => {
//             if (error) return reject(error);
//             return resolve(updatedUser);
//         });
//     });
// });

exports.removeById = (menuGroupId) => new Promise((resolve, reject) => {
    MenuGroupModel.remove({ _id: menuGroupId }, (err) => {
        if (err) {
            reject(err);
        } else {
            resolve(err);
        }
    });
});
