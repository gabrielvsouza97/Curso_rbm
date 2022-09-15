"use strict";
const cervejas = [
    { id: 1, marca: "antartica", modelo: "original", preco: 4 },
    { id: 2, marca: "brahma", modelo: "duplo malte", preco: 6 },
    { id: 3, marca: "heineken", modelo: "lager", preco: 12 }
];
const blusas = [
    { id: 1, marca: "lacosta", modelo: "blusa do naruto", preco: 3.5 },
    { id: 2, marca: "lacosta", modelo: "blusa do one piece", preco: 7.0 },
    { id: 311, marca: "lacosta", modelo: "blusa do tokyo ghoul", preco: 12.5 },
    { id: 4, marca: "lacosta", modelo: "blusa do jujutsu no kaizen", preco: 1.99 },
    { id: 5, marca: "lacosta", modelo: "blusa do kimetsu no yaiba", preco: 1.99 },
    { id: 6, marca: "lacosta", modelo: "blusa do boruto", preco: 1.99 },
    { id: 21, marca: "lacosta", modelo: "blusa do cavalo de fogo", preco: 1.99 },
    { id: 123, marca: "lacosta", modelo: "blusa do cavalo de fogo azul", preco: 1.99 },
];
function render(dados) {
    const elementRender = document.querySelector("#root");
    if (elementRender) {
        elementRender.innerHTML = "";
        dados.forEach(element => {
            elementRender.innerHTML += `
                <div class="item-wrapper">
                    <h2>${element.marca}</h2>
                    <h3>${element.modelo}</h3>
                    <h4>${element.preco}</h4>
                </div>
            `;
        });
    }
}
function searchEvent(text, pesquisa) {
    const tipoPesquisa = pesquisa;
    const dadosFiltrados = blusas.filter((blusa) => {
        return blusa[tipoPesquisa].includes(text);
    });
    render(dadosFiltrados);
}
function eventListenerHandle() {
    const searchButtonElement = document.querySelector("#btn-search");
    const inputSearchElement = document.querySelector("#search-inpt");
    const selectSearchElement = document.querySelector("#tipo-pesquisa");
    searchButtonElement === null || searchButtonElement === void 0 ? void 0 : searchButtonElement.addEventListener("click", () => {
        searchEvent(inputSearchElement.value, selectSearchElement.value);
    });
}
render(blusas);
eventListenerHandle();
