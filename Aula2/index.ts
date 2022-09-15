const arrayBlusas = [
    {
      id: 1,
      modelo: "blusa do naruto",
      marca: "lacosta",
      categoria: "blusa",
    },
    {
      id: 2,
      modelo: "bermuda do naruto",
      marca: "lacosta",
      categoria: "bermuda",
    },
    {
      id: 3,
      modelo: "bandana do naruto",
      marca: "lacosta",
      categoria: "acessorios",
    },
    {
        id: 4,
        modelo: "bone do naruto",
        marca: "lacosta",
        categoria: "acessorios",
      },
  ];

type Pesquisa = {
    id: number;
    modelo: string;
    marca: string;
    categoria: string;
}

console.log(filtraCategoria("acessorios", arrayBlusas));

/**
 * Função para buscar uma categoria em específo em um array de objetos
 * @param stringPesquisa string Recebe o valor de pesquisa 
 * @param arrayPesquisa array recebe o array para realizar a pesquisa
 * @returns array Retorna um array com apenas os objetos pesquisados
 */
function filtraCategoria (stringPesquisa:string, arrayPesquisa:Array<Pesquisa>){

const filtro:Array<object> = arrayPesquisa.filter(item =>{
    return item.categoria === stringPesquisa ? true : false;
});

return filtro;

}


//Transformar os numeros de 1-27 em uma matriz de 3 em 3
//Quis dificultar e exibir uma matriz independente do range de intervalos. Ele precisa ser necessariamente multiplo de 3
console.log(matrizDeTres(1,21));

/**
 * Essa função devolve uma matriz de arrays, dividos em arrays de 3 posicoes
 * @param valorInicial number Valor inicial da Matriz
 * @param valorFinal number Valor final da Matriz
 * @returns matriz de arrays || array informando que o intervalo não é multiplo de 3
 */

function matrizDeTres(valorInicial:number, valorFinal:number)
{
    const valorIntervalo:number = valorFinal - valorInicial + 1;

    if(valorIntervalo % 3 === 0)
    {

        let matriz:Array<Array<number>> = new Array();
        let subarray:Array<number> = new Array();
        while(valorInicial < valorFinal)
        {
            for(let i = 0; i < 3 ; i++ )
            {
                subarray[i] = valorInicial;
                valorInicial++
            }

            matriz.push(subarray);
            subarray = []
        }

        return matriz;
    }

    return [[99]];

}

//Transformar a matriz em array de array em uma posição

const matriz = matrizDeTres(1,21);

/**
 * 
 * @param matriz Array de array de dados
 * @returns array de array com um posição
 */
function converteMatriz (matriz:Array<Array<number>>){

    let novoArray:Array<Array<number>> = [new Array()];
    let posicao:number = 0;
    matriz.forEach(valor => {
        valor.forEach(inside =>{
            novoArray[posicao] = [inside]
            posicao++
        })
    })
    return novoArray;
}

/**
 * Função para somar colunas de uma matriz e retornar como posição de um array
 * @param matriz Array de Array de dados
 * @returns a soma de uma coluna de uma matriz
 */
function converteMatriz2 (matriz:Array<Array<number>>)
{
    return matriz.map( valor=>
    {
       return [valor.reduce((acc, vl) => acc + vl)];
    });
}

console.log(converteMatriz2(matriz));