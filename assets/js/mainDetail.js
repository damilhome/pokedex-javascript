/* import {getClickedPokemon} from './get-pokemon.js'; */
const elemento = localStorage.getItem('elemento');
const pokemonsOnTheScreen = JSON.parse(localStorage.getItem('pokemonsOnTheScreen'));
const mainContainer = document.getElementById('mainContainer');

function convertPokemonToDetailPage(pokemon) {
    return `
            <section class="shortPokemonInfo">
                <div class="pokemonInfo">
                    <div class="details">
                        <h1 class="capitalize">${pokemon.name}</h1>
                        <ol class="types">
                            ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol>
                    </div>
                    <span class="number">#${pokemon.number}</span>
                </div>
                <img class="pokemonPhoto" src="${pokemon.photo}" alt="${pokemon.name}">
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
                            <li class="capitalize">${pokemon.name}</li>
                            <li>${pokemon.height / 10} m</li>
                            <li>${pokemon.weight / 10} kg</li>
                            <li class="capitalize">${pokemon.abilities}</li>
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
                                <span>${pokemon.hp}</span>
                                <div class="statsBar"><div id="hpPorcentage" class="statsPorcentage psychic"></div></div>
                            </li>
                            <li>
                                <span>${pokemon.attack}</span>
                                <div class="statsBar"><div id="attackPorcentage" class="statsPorcentage grass"></div></div>
                            </li>
                            <li>
                                <span>${pokemon.defense}</span>
                                <div class="statsBar"><div id="defensePorcentage" class="statsPorcentage psychic"></div></div>
                            </li>
                            <li>
                                <span>${pokemon.sp_attack}</span>
                                <div class="statsBar"><div id="spAttackPorcentage" class="statsPorcentage grass"></div></div>
                            </li>
                            <li>
                                <span>${pokemon.sp_defense}</span>
                                <div class="statsBar"><div id="spDefensePorcentage" class="statsPorcentage grass"></div></div>
                            </li>
                            <li>
                                <span>${pokemon.speed}</span>
                                <div class="statsBar"><div id="speedPorcentage" class="statsPorcentage psychic"></div></div>
                            </li>
                            <li>
                                <span>${pokemon.hp + pokemon.attack + pokemon.defense + pokemon.sp_attack + pokemon.sp_defense + pokemon.speed}</span>
                                <div  class="statsBar"><div id="totalPorcentage" class="statsPorcentage psychic"></div></div>
                            </li>
                        </ol>
                    </div>
                </div>
            </section>
        `
}

function addHtmlDetailPage() {
    /* const element = getClickedPokemon();
    console.log(element); */
    let tempPokemon = null;
    for (let i = 0; i < pokemonsOnTheScreen.length; i++) {
        const element = pokemonsOnTheScreen[i].name;
        if(element === elemento) {
            tempPokemon = pokemonsOnTheScreen[i];
        }
    }
    console.log(elemento);
    console.log(pokemonsOnTheScreen)
    let totalPorcentage = (tempPokemon.hp + tempPokemon.attack + tempPokemon.defense + tempPokemon.sp_attack + tempPokemon.sp_defense + tempPokemon.speed) / 6;
    mainContainer.innerHTML += convertPokemonToDetailPage(tempPokemon);
    document.getElementById('hpPorcentage').style.width = `${tempPokemon.hp}%`;
    document.getElementById('attackPorcentage').style.width = `${tempPokemon.attack}%`;
    document.getElementById('defensePorcentage').style.width = `${tempPokemon.defense}%`;
    document.getElementById('spAttackPorcentage').style.width = `${tempPokemon.sp_attack}%`;
    document.getElementById('spDefensePorcentage').style.width = `${tempPokemon.sp_defense}%`;
    document.getElementById('speedPorcentage').style.width = `${tempPokemon.speed}%`;
    document.getElementById('totalPorcentage').style.width = `${totalPorcentage}%`;
}

/* function getClickedPokemon(elemento) {
    console.log(elemento);
} */

window.onload = addHtmlDetailPage();