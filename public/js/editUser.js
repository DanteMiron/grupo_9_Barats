window.addEventListener("load", function (){
    let form = document.querySelector(".formulario");
    let name = document.querySelector("#name");
    let lastName= document.querySelector("#lastName");
    let tel= document.querySelector("#tel");
    let img= document.querySelector("#img");
    let errorName= document.querySelector("#errorName");
    let errorLastName= document.querySelector("#errorLastName");
    let errorTel= document.querySelector("#errorTel");
    let errorImg= document.querySelector("#errorImg");

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
        if(tel.value.length<8){
            errorTel.style.backgroundColor = "black"
            errorTel.style.color = "red"
            errorTel.innerHTML = "<strong>El campo teléfono debe tener al menos 8 caracteres</strong>"
            errores.push(true);
        } else {
            errorTel.innerHTML = "";
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