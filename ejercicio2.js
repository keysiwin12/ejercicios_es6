
function cuadrado(numeros) {
    numerosCuadrados =[];
    for(i in numeros)
        numerosCuadrados.push(Math.pow(numeros[i],2));
    return numerosCuadrados;
} 

numeros = [1,5,9,7];
console.log(cuadrado(numeros));