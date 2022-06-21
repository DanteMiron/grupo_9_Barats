const bcryptjs = require('bcryptjs');
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
    loginConfirmed: function (req, res){
      actions.path = path;
      let users= actions.list();
      let userOk = users.find(user =>  user.email == req.body.email)
      if(userOk){
         let passwordOk= bcryptjs.compareSync(req.body.password , userOk.password );
         if(passwordOk){
            delete userOk.password;
            delete userOk.passwordConfirmed;
            req.session.userLogged = userOk;
            if(req.body.remember_user){
                res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60})
            }
            res.redirect('/users/' + userOk.id)
         }
        } 
        return res.render('users/login', {
            errors:{ 
                email: {
                    msg: 'Email no registrado'
                }
            }
        })
        
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
        res.render('users/edit', { errors : errors.mapped(), old: req.body, 'userId' : userId, old: req.body });
    }
 } ,
    delete: function (req, res) {
        {
        const usuario = req.params.id;
        actions.path = path;
        actions.delete(usuario);
        res.redirect('/users');
    }
},
    logout: function(req, res) {
        req.session.destroy();
        res.redirect('/users/login');
    } 
}
module.exports = userController;