// boolean a number
var booleana = true;
console.log("0: Es de tipo: ", typeof booleana);
console.log("1: Cambiamos el tipo a: ", typeof Number(booleana));
console.log("2: Valor: ", Number(booleana));
booleana = false;
console.log("2.1: Actualizamos a valor: ", Number(booleana));


// boolean a string
var boolean = true;
console.log("3: Es de tipo: ", typeof String(boolean));
console.log("3.1: Valor: ", String(boolean));
boolean = false;
console.log("4: Actualizamos el Valor: ", String(boolean));

// todo lo demas a boolean
console.log("5: false: ", Boolean(""));
console.log("6: false:", Boolean(0));
console.log("7: false:", Boolean(null));
console.log("8: false:", Boolean(undefined));
console.log("9: false:", Boolean(NaN));
console.log("10: true:", Boolean("hola"));
console.log("11: objeto lleno:", Boolean({ nombre: "Juan" }));
console.log("11.1: objeto Vacio:", Boolean({}));
console.log("12: Arreglo lleno:", Boolean([1, 2, 3]));
console.log("12.1: Arrelglo vacio:", Boolean([]));