window.addEventListener('load',function(){
    let buttonAdmin = document.querySelectorAll('.buttonAdmin')
    
    for(let i=0; i<buttonAdmin.length; i++){
    buttonAdmin[i].addEventListener('click', function (e){
        let mensaje = confirm('¿Desea convertir este usuario en admin?');

        if(!mensaje){
            e.preventDefault(); 
        }
    })
}
})