window.addEventListener('load', function (){
    let form = document.querySelector(".formulario");
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");
    let errorEmail = document.querySelector("#errorEmail");
    let errorPassword = document.querySelector("#errorPassword");
    let emailCorrecto = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    form.addEventListener('submit', function (e){

        let errores= [];

        if(!emailCorrecto.test(email.value)){
            errorEmail.style.backgroundColor= "black"
            errorEmail.style.color = "red"
            errorEmail.innerHTML = "<strong>El campo Email es incorrecto</strong>"
            errores.push(true);
        } else {
            errorEmail.innerHTML = "";
        }
        if(password.value.length<1){
            errorPassword.style.backgroundColor= "black"
            errorPassword.style.color = "red"
            errorPassword.innerHTML = "<strong>Debes completar este campo</strong>"
            errores.push(true);
        } else {
            errorPassword.innerHTML = "";
        }

        if(errores.length>0){
            e.preventDefault();
            errores = [];
        }
    })
})