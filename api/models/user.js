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

