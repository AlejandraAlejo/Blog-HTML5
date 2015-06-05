function validar() {
    if (!Modernizr.input.required || !Modernizr.inputtypes.email) {
        /*Si el navegador no tiene soporte para el atributo required, 
          o para el input type = 'email'
        */
        validacion();
    }
    else{
        alert("Mensaje enviado");
    }
}

function validacion(){
    /*Nombre*/
    var input_name = document.getElementById('nombre'); 
    var nombre = input_name.value;
    
    /*Email*/
    var input_email = document.getElementById('email');
    var expresion_regular = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    var email = expresion_regular.test(input_email.value);
    
    /*Mensaje*/
    var input_mensaje = document.getElementById('mensaje');
    var mensaje = input_mensaje.value;
    
    if(!nombre || !email || !mensaje)
    {
        if(!nombre){
            /*Si el input nombre esta vacío, muestra el error*/
            document.getElementById('error-nombre').innerHTML = "Este campo es requerido";
        }
        else{
            document.getElementById('error-nombre').innerHTML = "";
        }
    
        if(!email){
            /*Si no es un correo electrónico válido, muestra el error*/
            document.getElementById('error-email').innerHTML = "Proporcione un email válido";
        }
        else{
            document.getElementById('error-email').innerHTML = "";
        }
    
        /*Mensaje no puede esar vacío*/
        if(!mensaje){
            /*Si el input mensaje esta vacío, muestra el error*/
            document.getElementById('error-mensaje').innerHTML = "Este campo es requerido";
        }
        else{
            document.getElementById('error-mensaje').innerHTML = "";
        }
    }
    else{
        //Si ya no hay errores, oculta los mensajes de error
        document.getElementById('error-nombre').innerHTML = "";
        document.getElementById('error-email').innerHTML = "";
        document.getElementById('error-mensaje').innerHTML = "";
        //Envía mensaje de confirmación
        alert("Mensaje enviado");
    }
}

