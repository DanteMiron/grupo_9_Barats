

window.addEventListener('load',function(){
    let buttonConfirm = document.querySelectorAll('.buttonConfirm')
    
    for(let i=0; i<buttonConfirm.length; i++){
    buttonConfirm[i].addEventListener('click', function (e){
        let mensaje = confirm('¿Desea eliminar este elemento?');

        if(!mensaje){
            e.preventDefault(); 
        }
    })
}
})