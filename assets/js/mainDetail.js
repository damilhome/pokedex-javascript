/* import { pokemonsToUse, clickedPokemon } from './main.js'; */
const containerTest = document.getElementById('containerTest');

function convertPokemonToDetailPage() {
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

function addHtmlDetailPage() {
    /* const ClickedPokemonId = clickedPokemon.id;
    let tempPokemon = null;

    const pokemonsForDetails = pokemonsToUse;
    for (let i = 0; i < pokemonsForDetails.length; i++) {
        if (ClickedPokemonId === pokemonsForDetails[i].name) {
            tempPokemon = pokemonsForDetails[i];
        }
    } */
    containerTest.innerHTML = convertPokemonToDetailPage();
}

window.onload = addHtmlDetailPage();