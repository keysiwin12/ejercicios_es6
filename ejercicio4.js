// function capital(oracion) {

// } 


var ora = "hola me llamo keysi me gusta jugar dota";

console.log(ora);
var oracion=[];
oracion.push(ora[0].toUpperCase());
for(var i=1 ; i<ora.length ; i++) {
    if(ora[i] == " ") {
        oracion.push(ora[i]);
        i++;
        oracion.push(ora[i].toUpperCase());
    }
    else
        oracion.push(ora[i]);
}

console.log(oracion.join(''));



