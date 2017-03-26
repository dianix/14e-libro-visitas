//alert("Holaaaaaa ");
// PRIMERO DECLARO DOS VARIABLES GLOBALES DONDE LLAMO A:

// ÁREA DONDE SE ESCRIBE EL NUEVO COMENTARIO
var comentarioNuevo = document.getElementById("comentarioNuevo");

// ÁREA DENDE SE DEBE PREVISUALIZAR EL COMENTARIO CON LOS ESTILOS ELEGIDOS
var previo = document.getElementById("vistaPrevia");


// FUNCIÓN PARA QUE APAREZCA LA PREVISUALIZACIÓN DE LO QUE SE ESCRIBE --FUNCIONA CUANDO NO TENGO LAS OTRAS FUNCIONES DE ESTILOS-- u_u
function vistaPrevia(event) {
    previo.innerHTML = comentarioNuevo.value;
}

// FUNCIONES PARA TAMAÑOS DE TEXTO
function textoGrande(){
    previo.style.fontSize = "24px";
    previo.style.fontWeight = "bold";
   
}

function textoMediano(){
    previo.style.fontSize = "18px";
}

function textoChico(){
    previo.style.fontSize = "12px";
}

// FUNCIÓN PARA COLOR DE TEXTO
function colorTexto(){
    var color = prompt("Escribe el código hexadecimal del color que deseas, con # al principio. Ej: #f0ce11");
    console.log(color);
    previo.style.color = color;
}

// FUNCIÓN PARA COLOR DE FONDO
function colorFondo(){
    var color = prompt("Escribe el código hexadecimal del color que deseas, con # al principio. Ej: #f0ce11");
    console.log(color);
    previo.style.backgroundColor = color;
}

// FUNCIONES PARA LOS BOTONES DE ALINEACIÓN DE TEXTO
function alinearIzq(){
    previo.style.textAlign = "left";
}

function alinearCentro(){
    previo.style.textAlign = "center";
}

function alinearDer(){
    previo.style.textAlign = "right";
}


// FUNCIÓN PARA ENVIAR A LA SECCIÓN DE PUBLICACIÓNES EL TEXTO
function publicar(){
    
    // variable donde llamo el comentario a publicar
    var comentarioRecibido = document.getElementById("vistaPrevia");
    // duplico el comentario
    var comentarioPublicar = comentarioRecibido.cloneNode(true);
    //console.log(copiaComent);
    // le quito el id="vistaPrevia"
    comentarioPublicar.removeAttribute("id");
    console.log(comentarioPublicar);
    
    var publicaciones = document.getElementById("publicaciones");
    publicaciones.insertBefore(comentarioPublicar, publicaciones.firstChild);
    
    var nuevoSeparador = document.createElement("hr");
    publicaciones.insertBefore(nuevoSeparador, publicaciones.firstChild);
    
    document.getElementById("comentarioNuevo").value ="";
    
    // NO FUNCIONAAA!!!! ヽ(#`Д´)ﾉ
    comentarioRecibido.value = "";
    
    // Este si funciona... ¬_¬
    comentarioRecibido.removeAttribute("style");

}

// FUNCIÓN PARA BORRAR PUBLICACIÓN (en progreso)

//function borrarComentario(){
//   var publicaciones = document.getElementById("publicaciones");
//    publicaciones.removeChild;
//}