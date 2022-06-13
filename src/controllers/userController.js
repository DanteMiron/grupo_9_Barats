const { validationResult } = require('express-validator');
const actions = require('../database/actions');
const path = '\\JSON\\users.json';


const userController = {
    register: function (req, res) {
        res.render('users/register');
    },
    login: function (req, res) {
        res.render('users/login');
    },

    create: function (req, res) {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            const body = req.body;
            body.image = req.file.filename;
            actions.path = path;
            actions.create(body);
            res.redirect('/users');
        } else {
            res.render('users/register', { errors : errors.mapped(), old: req.body });
        } 
    },
    list: function (req, res) {
        actions.path = path;
        let users = actions.list();
        res.render('users/list', { 'users': users })
    },
    user: function (req, res) {
        actions.path = path;
        let users = actions.list();
        let userId = users.filter(user => user.id == req.params.id);
        res.render('users/user', { 'userId': userId });
    },

    editView: function (req, res) {
        actions.path = path;
        let users = actions.list();
        let userId = users.filter(user => user.id == req.params.id);
        res.render('users/edit', { 'userId': userId });
    },
    edit: function (req, res) {
        let errors = validationResult(req);
        let users = actions.list();
        let userId = users.filter(user => user.id == req.params.id);
        if (errors.isEmpty()) {
        const body = req.body;
        body.image = req.file.filename;
        const usuario = req.params.id;
        actions.path = path;
        actions.edit(usuario, body);
        res.redirect('/users');
    } else {
        res.render('users/edit', { errors : errors.mapped(), old: req.body, 'userId' : userId });
    }
 } ,
    delete: function (req, res) {
        const usuario = req.params.id;
        actions.path = path;
        actions.delete(usuario);
        res.redirect('/users');
    }
}

module.exports = userController;