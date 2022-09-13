"use strict";
//Função para retornar a soma de dois parâmetros;
const somaDoisNumeros = (numero1, numero2) => numero1 + numero2;
console.log(somaDoisNumeros(12, 24));
//Função que recebe 5 numeros e trás a média deles;
const mediaCincoNumeros = (numeros) => {
    let somaNumeros = 0;
    for (let i = 0; i < numeros.length; i++) {
        somaNumeros += numeros[i];
    }
    return somaNumeros / numeros.length;
};
const numerosParaSomar = [5, 12, 17, 14, 34];
console.log(mediaCincoNumeros(numerosParaSomar));
//Calculo de IMC
const calculadoraImc = (peso, altura) => {
    const elvQuadrado = 2;
    let imc = peso / (altura ** elvQuadrado);
    return imc.toFixed(2) + " kg/m2";
};
const meuPeso = 1.75;
const minhaAltura = 1.65;
console.log(calculadoraImc(meuPeso, minhaAltura));
