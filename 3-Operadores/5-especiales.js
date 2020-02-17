console.log("1: Debe mostrar un number: ", typeof 4);

console.log("2: Debe mostrar un boolean: ", typeof true);

console.log("3: Debe mostrar un object: ", typeof {});

console.log("4: Debe mostrar un object: ", typeof []);

console.log("5: Debe mostrar un object: ", typeof null);

console.log("6: Debe mostrar un undefined ", typeof undefined);

var persona = {
  nombre: "Walter",
  apellido: "White"
};
console.log("7.0: Muestra el nombre y apellido: ", persona);
delete persona.apellido;
console.log("7.1: Eliminamos el apellido: ", persona);

var heroes = ["Green Arrow", "Batman", "Flash"];

console.log("8: Debe mostrar los nombre de unos superheroes", heroes);

delete heroes[1];
console.log("9: Elimina el superheroe de la posición 1", heroes);