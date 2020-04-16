// 1: insertar elementos en diferentes posiciones
var lista = document.getElementById("lista");
var elemento4 = document.createElement("li");
var elemento5 =document.createElement("li");
elemento4.innerHTML = "Elemento 4";
elemento5.innerHTML = "Elemento 5";

/*insertAdjacentElement sirve para insertar y posicionar un elemnto. los cuatro valores son:
 1. afterbegin - Después del comienzo del elemento (como primer hijo).
 2. afterend - Después del elemento. Al final y por fuera.
 3. beforebegin - Antes del elemento. Al inicio y por fuera.
 4. beforeend - Antes del final del elemento (como último hijo)
*/
lista.insertAdjacentElement("afterbegin", elemento4);
lista.insertAdjacentElement("beforeend", elemento5);

var titulo = document.createElement("h1");
var salir = document.createElement("p");
titulo.innerHTML = "Titulo de prueba";
salir.innerHTML = "Prueba";

lista.insertAdjacentElement("beforebegin", titulo);
lista.insertAdjacentElement("afterend", salir);

var subLista = document.getElementById("test");
var elemento6 =  document.createElement("div");
elemento6.innerHTML = "<ul> <li>Home</li> <li> Page 1</li> <li> Page 2</li> <li> Page 3</li> </ul>";

subLista.insertAdjacentElement("beforeend", elemento6);

//Esta elemento se inserta antes del "Eleimento 4"
var elemento7 = document.createElement("li");
elemento7.innerHTML = "Elemento 7";
lista.insertBefore(elemento7, elemento4);

// Insertamos antes del segundo titulo
var elemento8 = document.createElement("li")
elemento8.innerHTML = "Google";
lista.insertBefore(elemento8, elemento5);

// 2: borrar contenido del elemento
// lista.innerHTML = "";
subLista.innerHTML = "";

// 3: remover elementos hijos
// lista.removeChild(elemento5);

// 4: reemplazar elementos hijos
// lista.replaceChild(elemento5, elemento4);

// 5: clonar elementos
// var lista2 = lista.cloneNode(true);
// console.log(lista2);
