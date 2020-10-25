/* eslint-disable no-restricted-syntax */
/* eslint-disable no-underscore-dangle */
const { mongoose } = require('../../../services/mongoose.service');

const { Schema } = mongoose;

const menuItemSchema = new Schema({
    name: String,
    imageLink: String,
    price: Number,
    details: String,
});

// menuItemSchema.virtual('id').get(() => this._id.toHexString());

// Ensure virtual fields are serialised.
menuItemSchema.set('toJSON', {
    virtuals: true,
});

menuItemSchema.findById = (cb) => this.model('MenuItem').find({ id: this.id }, cb);

// const MenuItemModel = mongoose.model('MenuItem', menuItemSchema);

exports.MenuItemSchema = menuItemSchema;
