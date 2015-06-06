$(document).ready(function(){
    //localStorage.clear(); //Elimina los datos en el localStorage 
    //Si ya tenemos datos en el localStorage
    if(localStorage.getItem('Comentarios')){
        $('#mensaje-comentarios').hide();
        $('#contenedor-comentarios').html(localStorage.getItem('Comentarios'));
    }
    
});

function comentarios(){
    $('#mensaje-comentarios').hide();
    var nom = document.getElementById('nombre').value;
    var men = document.getElementById('mensaje').value;
        
    //obtener fecha y hora del comentario
    var currentdate = new Date(); 
    var datetime = "<strong>Enviado el</strong> " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " <strong>a las</strong> "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
        
    
    var comentario = "<label><strong>Nombre: </strong></label><label>"+nom+"</label><br/><label><strong>Mensaje: </strong></label><label>"+men+"</label><br/><label><i>"+datetime+"<i></label><br /><br />";

    alert("Comentario enviado");
        
    $('#contenedor-comentarios').append("<div class = 'comentario'>"+comentario+"</div>");
        
    var comentarios = $('#contenedor-comentarios').html();
    localStorage.setItem('Comentarios', comentarios);
    
}
