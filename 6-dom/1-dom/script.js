//vamos ingresar a el id saludo,esto con document y la funcción getElementById
var saludo = document.getElementById("saludo");
console.log("Encontramos lo siguiente: ", saludo);
console.log("Es de tipo: ", typeof saludo);
//cambiarle el estili de color
saludo.style.color = "blue";
//saludo.style.margin = "100px";
saludo.style.margintop = "100px";
//imprimim el siguiente mensajey quitamos el anteior
prueba.innerHTML = "!Saludos¡";
prueba.style.color = "green";

var subtitulos = document.getElementsByClassName("subtitulo");
console.log(subtitulos[1]);

var etiquetasH2 = document.getElementsByTagName("h2");
console.log(etiquetasH2);
