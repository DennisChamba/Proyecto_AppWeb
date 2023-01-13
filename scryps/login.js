const password = document.getElementById("password");
const correo = document.getElementById("correo");

const form = document.getElementById("formulario");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warning = "";
    let expresionRegularCorreo = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    let expresionRegularPassword = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,15}/;
    let entrar = true;
    parrafo.innerHTML = '';
    

    if(!expresionRegularCorreo.test(correo.value)){
        warning += "El correo ingresado no es valido <br>"
        entrar = false;
    }
    if(!expresionRegularPassword.test(password.value)){
        warning += "La contraseña debe tener:<br>"
        warning += "Minimo 8 caracteres y maximo 15<br>"
        warning += "     -Al menos una letra mayúscula y una minuscula<br>"
        warning += "     -Al menos un digito<br>"
        warning += "     -Al menos 1 caracter especial<br>"
        warning += "     -No debe contener espacios en blanco<br>"
        entrar = false;
    }
    if(entrar == false){
        parrafo.innerHTML = warning;
    }else{
        console.log('salida')
        
        if(correo.value == "prueba@gmail.com" && password.value == 'Prueba12345@'){
            console.log('entrada')
            location.href = "/Logeado/idea.html";
        }
    }

})
