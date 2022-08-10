function authMiddlewares(req,res,next){
if(req.session.userLogged && (req.session.userLogged.admin === 0)){
    return res.render('permisos')
}
next();
}

module.exports = authMiddlewares;