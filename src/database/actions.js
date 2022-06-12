const req = require('express/lib/request');
const res = require('express/lib/response');
const fs = require ('fs')
const rutaJson = '';

const actions = {
    path : '',
    get : function (){

    },
    create : function (data){
        const jsonData = JSON.parse(fs.readFileSync(__dirname + this.path),'utf8');
        let id = 0;
        if(jsonData.length > 0){
            id = jsonData.length;
        }
        const user = {...data,id}; 
        jsonData.push(user);
        fs.writeFileSync((__dirname + this.path), JSON.stringify(jsonData, null, 2));
        return jsonData;
    },
    list : function(){
        return JSON.parse(fs.readFileSync(__dirname + this.path),'utf8')
    },
    edit : function(usuario, data){
        const jsonData = JSON.parse(fs.readFileSync(__dirname + this.path),'utf8');
        let id = Number(usuario);
        jsonData.forEach( (user, index) => {
            if( user.id == usuario) {
                jsonData[index] = {...data,id} ;
            }
        } )
        fs.writeFileSync((__dirname + this.path), JSON.stringify(jsonData, null, 2));
    }, 
    delete: function (usuario){
        const jsonData = JSON.parse(fs.readFileSync(__dirname + this.path),'utf8');
        let jsonDataEdit = jsonData.filter(user => user.id != usuario);
        jsonDataEdit.forEach((user, index)=>{
            if(user.id > Number(usuario)){
                jsonDataEdit[index].id--;
            }
        });
            fs.writeFileSync((__dirname + this.path), JSON.stringify(jsonDataEdit, null, 2));
        }
       
    
}

module.exports = actions;