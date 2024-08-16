const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');
export let pokemonsToUse = [];
export let clickedPokemon = '';

const maxRecords = 151;
const limit = 10;
let offset = 0;

function convertPokemonToLi(pokemon) {
    return `
        <a id="${pokemon.name}" class="cardButton" href="details.html" onclick="getClickedPokemon(this)">
            <li id="${pokemon.number}" class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
            </li>
        </a>
    `
}

function getClickedPokemon(elemento) {
    clickedPokemon = elemento;
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons) => {
        pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('');
        pokemonsToUse = pokemons;
    })
}

loadPokemonItens(offset, limit);

function loadMoreButtonFunction() {
    offset+= limit;

    const qtdRecordNextPage = offset + limit;

    if(qtdRecordNextPage >= maxRecords) {
        const newLimit = maxRecords - offset;
        loadPokemonItens(offset, newLimit);
        loadMoreButton.parentElement.removeChild(loadMoreButton);
    } else {
        loadPokemonItens(offset, limit);
    }

}

window.loadMoreButtonFunction = loadMoreButtonFunction;

/* export function getPokemonsToUse() {
    return pokemonsToUse;
}
export function getClickedPokemons() {
    return clickedPokemon;
} */