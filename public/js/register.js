window.addEventListener("load", function (){
    let form = document.querySelector(".formulario");
    let name = document.querySelector("#name");
    let lastName= document.querySelector("#lastName");
    let email= document.querySelector("#email");
    let tel= document.querySelector("#tel");
    let password= document.querySelector("#password");
    let passwordConfirmed= document.querySelector("#passwordConfirmed")
    let buttonSend= document.querySelector("#buttonSend");
    let img= document.querySelector("#img");
    let errorName= document.querySelector("#errorName");
    let errorLastName= document.querySelector("#errorLastName");
    let errorEmail= document.querySelector("#errorEmail");
    let errorTel= document.querySelector("#errorTel");
    let errorImg= document.querySelector("#errorImg");
    let errorPassword= document.querySelector("#errorPassword");
    let errorPasswordConfirmed= document.querySelector("#errorPasswordConfirmed");
    let emailCorrecto = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    form.addEventListener("submit", function (e){
        

        let errores=[];

        if(name.value.length < 2){
            errorName.style.backgroundColor = "black"
            errorName.style.color = "red"
            errorName.innerHTML = "<strong>El campo Nombre debe tener al menos 2 caracteres</strong>"
            errores.push(true);
        } else {
            errorName.innerHTML = "";
        }
        if(lastName.value.length < 2){
            errorLastName.style.backgroundColor = "black"
            errorLastName.style.color = "red"
            errorLastName.innerHTML = "<strong>El campo Apellido debe tener al menos 2 caracteres</strong>"
            errores.push(true);
        }else {
            errorLastName.innerHTML = "";
        }
        if(!emailCorrecto.test(email.value)){
            errorEmail.style.backgroundColor = "black"
            errorEmail.style.color = "red"
            errorEmail.innerHTML = "<strong>El campo Email es incorrecto</strong>"
            errores.push(true);
        } else {
            errorEmail.innerHTML = "";
        }
        if(tel.value.length<8){
            errorTel.style.backgroundColor = "black"
            errorTel.style.color = "red"
            errorTel.innerHTML = "<strong>El campo teléfono debe tener al menos 8 caracteres</strong>"
            errores.push(true);
        } else {
            errorTel.innerHTML = "";
        }
        if(password.value.length<8){
            errorPassword.style.backgroundColor = "black"
            errorPassword.style.color = "red"
            errorPassword.innerHTML = "<strong>El campo contraseña debe tener al menos 8 caracteres</strong>"
            errores.push(true);
        } else {
            errorPassword.innerHTML = "";
        }
        if(passwordConfirmed.value.length<8){
            errorPasswordConfirmed.style.backgroundColor = "black"
            errorPasswordConfirmed.style.color = "red"
            errorPasswordConfirmed.innerHTML = "<strong>El campo contraseña debe tener al menos 8 caracteres</strong>"
            errores.push(true);
        } else {
            errorPasswordConfirmed.innerHTML = "";
        }
        if(!img.value.includes(".jpg") && !img.value.includes(".jpeg") && !img.value.includes(".png") && !img.value.includes(".gif")){
            errorImg.style.backgroundColor = "black"
            errorImg.style.color = "red"
            errorImg.innerHTML = "<strong>Debe ser una imagen formato .jpg , .jpeg , .png o .gif</strong>";
            errores.push(true);
        } else {
            errorImg.innerHTML = "";
        }

        if(errores.length>0){
            e.preventDefault();
            errores = [];
        }
    })
})