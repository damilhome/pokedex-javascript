const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');
let pokemonsOnTheScreen = [];

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
    /* console.log(pokemonsOnTheScreen); */
    localStorage.setItem('elemento', elemento.id);
    localStorage.setItem('pokemonsOnTheScreen', JSON.stringify(pokemonsOnTheScreen));
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons) => {
        pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('');
        pokemonsOnTheScreen.push(...pokemons);
    })
}

loadPokemonItens(offset, limit);

loadMoreButton.addEventListener('click', () => {
    offset+= limit;

    const qtdRecordNextPage = offset + limit;

    if(qtdRecordNextPage >= maxRecords) {
        const newLimit = maxRecords - offset;
        loadPokemonItens(offset, newLimit);
        loadMoreButton.parentElement.removeChild(loadMoreButton);
    } else {
        loadPokemonItens(offset, limit);
    }

})

window.getClickedPokemon = getClickedPokemon;

/* details.html code */

/* function getClickedPokemon(elemento) {
    console.log(elemento);
} */