//var parrafo = document.createElement("p");
//parrafo.innerHTML = "Hola Mundo";

var parrafo = document.createElement("p");
parrafo.innerHTML = "hola mundo";

// si unicamente se requiere agregar el elemento en el body
//incrustamos el parrafo que creamos previamnete con el metodo "appendChild"
document.body.appendChild(parrafo);

var a = document.createElement("h1");
a.innerHTML = "Estoy en el div.";
var app = document.getElementById("app");

app.appendChild(a);

var bloque = document.createElement("DiV");

bloque.className = "container"
//bloque.style.width = "1500px";
//bloque.style.height = "1200px";
//bloque.style.backgroundColor = "red";
bloque.innerHTML = "<h1>Título 1</h1>";
/*bloque.innerHTML = `
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
`;*/
bloque.innerHTML = `
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">WebSiteName</a>
      </div>
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Home</a></li>
        <li><a href="#">Page 1</a></li>
        <li><a href="#">Page 2</a></li>
        <li><a href="#">Page 3</a></li>
      </ul>
    </div>
  </nav>
`;
app.appendChild(bloque);
