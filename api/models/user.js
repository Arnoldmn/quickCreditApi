const express = require('express');
const db = require('./db')
const app = express();

const User = db.model('User', new db.Schema({
    _id: mongoose.Schema.Types.ObjectId,

    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    address: {
        type: String,
        reqiured: true,
    },
    status: {
        type: String,
    },
    isAdmin: {
        type: boolean,
        reqiured: true
    }

}));

function validateUser(user) {
    const schema = {
        email: db.String().min(6).max(50).required(),
        firstName: db.String().min(6).max(50).required(),
        lastName: db.String().min(6).max(50).required(),
        password: db.String().min(6).max(50).required(),
        address: db.String().min(6).max(50).required(),
        status: db.String().min(6).max(50).reqiured(),
        isAdmin: db.boolean().reqiured()
    }

    return db.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser 
