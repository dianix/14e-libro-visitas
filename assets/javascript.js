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
    previo.style.fontSize = "22px";
   
}

function textoMediano(){
    previo.style.fontSize = "17px";
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
    
    // variable donde se guarda el nuevo item
    var comentario = document.getElementById("vistaPrevia");
    var nuevaPublicacion = document.createElement("span");
    nuevaPublicacion.innerHTML = comentario;
   
          
    var nuevoSeparador = document.createElement("hr");
     document.getElementById("publicaciones").appendChild(nuevoSeparador);
    document.getElementById("publicaciones").appendChild(nuevaPublicacion);
   
    document.getElementById("vistaPrevia").value = "";
}