const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');
const cardButton = document.getElementById('cardButton');

const maxRecords = 151;
const limit = 10;
let offset = 0;

function convertPokemonToLi(pokemon) {
    return `
        <a id="cardButton" class="cardButton" href="details.html">
            <li id="${pokemon.name}" class="pokemon ${pokemon.type}">
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

function convertPokemonToDetailPage(pokemon) {
    return `
    <section class="shortPokemonInfo">
            <div class="pokemonInfo">
                <div class="details">
                    <h1>Bulbasaur</h1>
                    <ol class="types">
                        <li class="type">Grass</li>
                        <li class="type">Poison</li>
                    </ol>
                </div>
                <span class="number">#1</span>
            </div>
            <img class="pokemonPhoto" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="pokemon image">
        </section>
        <section class="pokemonDetails">
            <div class="aboutHolder">
                <h2>About</h2>
                <div class="aboutContainer">
                    <ol>
                        <li>Name</li>
                        <li>Height</li>
                        <li>Weight</li>
                        <li>Abilities</li>
                    </ol>
                    <ol>
                        <li>Bulbasaur</li>
                        <li>0.70 cm</li>
                        <li>6.9kg</li>
                        <li>Overgrow, Chlorophyl</li>
                    </ol>
                </div>
            </div>

            <div class="statsHolder">
                <h2>Stats</h2>
                <div class="statsContainer">
                    <ol>
                        <li>HP</li>
                        <li>Attack</li>
                        <li>Defense</li>
                        <li>Sp. Attack</li>
                        <li>Sp. Defense</li>
                        <li>Speed</li>
                        <li>Total</li>
                    </ol>
                    <ol>
                        <li>
                            <span>45</span>
                            <div class="statsBar"><div class="statsPorcentage psychic"></div></div>
                        </li>
                        <li>
                            <span>49</span>
                            <div class="statsBar"><div class="statsPorcentage grass"></div></div>
                        </li>
                        <li>
                            <span>49</span>
                            <div class="statsBar"><div class="statsPorcentage psychic"></div></div>
                        </li>
                        <li>
                            <span>65</span>
                            <div class="statsBar"><div class="statsPorcentage grass"></div></div>
                        </li>
                        <li>
                            <span>65</span>
                            <div class="statsBar"><div class="statsPorcentage grass"></div></div>
                        </li>
                        <li>
                            <span>45</span>
                            <div class="statsBar"><div class="statsPorcentage psychic"></div></div>
                        </li>
                        <li>
                            <span>318</span>
                            <div class="statsBar"><div class="statsPorcentage psychic"></div></div>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
        `
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons) => {
        pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('');
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

cardButton.addEventListener('click', () => {

})