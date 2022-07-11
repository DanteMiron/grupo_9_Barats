const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const actions = require('../database/actions');
const path = '\\JSON\\users.json';
const db = require("../../database/models");


const userController = {
    register: function (req, res) {
        res.render('users/register');
    },
    login: function (req, res) {
        res.render('users/login');
    },
    loginConfirmed: function (req, res){
     db.Usuario.findOne({
        where:{
            email: req.body.email
        }
     }).then(function(userOk){
         let passwordOk= bcryptjs.compareSync(req.body.password , userOk.password );
         if(passwordOk){
            delete userOk.password
            req.session.userLogged = userOk;
            if(req.body.remember_user){
                res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60})
            }
            res.redirect('/users/' + userOk.id)
         }
        
        res.render('users/login', {
            errors:{ 
                email: {
                    msg: 'Email no registrado'
                }
            }
        })
        }
    )}
    ,
    create: function (req, res) {
        let errors = validationResult(req);
        let passwordOk = bcryptjs.hashSync(req.body.password, 10)
        console.log(passwordOk)
        if (errors.isEmpty()) {
            db.Usuario.create({
                name: req.body.name,
                last_name: req.body.lastName,
                email: req.body.email,
                tel: req.body.tel,
                image: req.file.filename,
                password: passwordOk
            })
            res.redirect('/users');
        } else {
            res.render('users/register', { errors : errors.mapped(), old: req.body });
        } 
    },
    list: function (req, res) {
        db.Usuario.findAll()
            .then(function(users){
                return res.render('users/list', { users : users })
            })
    },
    user: function (req, res) {
        db.Usuario.findByPk(req.params.id)
            .then(function(userId){
                return res.render('users/user', { userId : userId });
            })
        
    },

    editView: function (req, res) {
        db.Usuario.findByPk(req.params.id)
            .then(function(userId){
                return res.render('users/edit', { userId : userId });
            })
    },
    edit: function (req, res) {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            db.Usuario.update({
                name: req.body.name,
                last_name: req.body.lastName,
                email: req.body.email,
                tel: req.body.tel,
                image: req.file.filename,
                password: req.body.password
            }, {
                where: {
                    id: req.params.id
                }
            })
        res.redirect('/users');
    } else {
        db.Usuario.findByPk(req.params.id)
        .then(function(userId){
            return res.render('users/edit', { errors : errors.mapped(), old: req.body,  userId:userId , old: req.body });
    })
 }
 } ,
    delete: function (req, res) {
       db.Usuario.destroy({
        where: {
            id : req.params.id
        }
       })
        res.redirect('/users');
    },
    logout: function(req, res) {
        req.session.destroy();
        res.redirect('/users/login');
    } 
}
module.exports = userController;