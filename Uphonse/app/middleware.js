const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

module.exports = (app, config) => {
    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(config.publicDir));
    app.use((err, req, res, next) => {
        console.error(err.stack);
        res.status(500).json({ error: 'Une erreur est survenue' });
    });
};