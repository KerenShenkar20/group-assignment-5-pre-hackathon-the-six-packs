const { Schema, model } = require('mongoose');

const usersSchema = new Schema({
    first_name: { type: String },
    last_name: { type: String },
    email: { type: String },
    gender: { type: String },
    avatar: { type: String },
    color: { type: String },
    job: { type: String },
}, { collection: 'users' });

const User = model('User', usersSchema);

module.exports = User;