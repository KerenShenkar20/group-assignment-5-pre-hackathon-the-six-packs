const { Schema, model } = require('mongoose');


const usersSchema = new Schema({
    id: { type: Number },
    first_name: { type: String },
    last_name: { type: String },
    email: { type: String },
    gender: { type: String },
    avatar: { type: URL },
    color: { type: String },
    job: { type: String },
}, { collection: 'users' });

const User = model('User', usersSchema);

module.exports = User;