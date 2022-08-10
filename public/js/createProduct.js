window.addEventListener('load', function (){
    let form = document.querySelector(".formulario");
    let nameProduct = document.querySelector("#nameProduct");
    let descriptionProduct = document.querySelector("#descriptionProduct");
    let imageProduct = document.querySelector("#imageProduct");
    let categoryProduct = document.querySelectorAll('#categoryProduct');
    let typeProduct = document.querySelectorAll('#typeProduct');
    let priceProduct = document.querySelector('#priceProduct');
    let errorNameProduct = document.querySelector('#errorNameProduct');
    let errorDescriptionProduct = document.querySelector('#errorDescriptionProduct');
    let errorImgProduct = document.querySelector('#errorImgProduct');
    let errorCategoryProduct = document.querySelector('#errorCategoryProduct');
    let errorTypeProduct = document.querySelector('#errorTypeProduct');
    let errorPriceProduct = document.querySelector('#errorPriceProduct');
    
    

    form.addEventListener('submit', function (e){
        

        let errores = [];

        if(nameProduct.value.length < 2){
            errorNameProduct.style.backgroundColor = "black"
            errorNameProduct.style.color = "red"
            errorNameProduct.innerHTML = "<strong>El campo Nombre debe tener al menos 2 caracteres</strong>"
            errores.push(true);
        } else {
            errorNameProduct.innerHTML = "";
        }
        
        if(descriptionProduct.value.length < 20){
            errorDescriptionProduct.style.backgroundColor = "black"
            errorDescriptionProduct.style.color = "red"
            errorDescriptionProduct.innerHTML = "<strong>El campo Nombre debe tener al menos 20 caracteres</strong>"
            errores.push(true);
        } else {
            errorDescriptionProduct.innerHTML = "";
        }
        
        if(!imageProduct.value.includes(".jpg") && !imageProduct.value.includes(".jpeg") && !imageProduct.value.includes(".png") && !imageProduct.value.includes(".gif")){
            errorImgProduct.style.backgroundColor = "black"
            errorImgProduct.style.color = "red"
            errorImgProduct.innerHTML = "<strong>Debe ser una imagen formato .jpg , .jpeg , .png o .gif</strong>";
            errores.push(true);
        } else {
            errorImgProduct.innerHTML = "";
        }
        
        if(priceProduct.value.length < 1){
            errorPriceProduct.style.backgroundColor = "black"
            errorPriceProduct.style.color = "red"
            errorPriceProduct.innerHTML = "<strong>Debes completar el campo precio</strong>"
            errores.push(true);
        } else {
            errorPriceProduct.innerHTML = "";
        }
                 let presionado = [];
        categoryProduct.forEach((categoria,i) =>{
            if(categoryProduct[i].checked === false){
                presionado.push(1)
            }
        })
            if(presionado.length != 3){
                errorCategoryProduct.style.backgroundColor = "black"
                errorCategoryProduct.style.color = "red"
                errorCategoryProduct.innerHTML = "<strong>Debes seleccionar una opción</strong>"
                errores.push(true);
            } else {
                errorCategoryProduct.innerHTML = "";
            }
        console.log(presionado)
        

        let presionado1 = [];
        typeProduct.forEach((tipo,i) =>{
            if(typeProduct[i].checked === false){
                presionado1.push(1)
            }
        })
            if(presionado1.length != 5){
                errorTypeProduct.style.backgroundColor = "black"
                errorTypeProduct.style.color = "red"
                errorTypeProduct.innerHTML = "<strong>Debes seleccionar una opción</strong>"
                errores.push(true);
            } else {
                errorTypeProduct.innerHTML = "";
            }
        
        
        if(errores.length>0){
            e.preventDefault();
            errores = [];
        }

    })
})