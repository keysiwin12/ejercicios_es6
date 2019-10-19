function ingresar(contra) {
    var contraseña = "codigoTecsup";
    return contraseña ==contra;
}

var contraseñaIngresada = prompt("Ingrese su contraseña");

var resultado = ingresar(contraseñaIngresada);

console.log(resultado);

if(resultado) 
    console.log("Verdadero");
else
    console.log("Falso");


    