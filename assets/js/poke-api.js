const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon();
    
    function getAbilities() {
        let ability = [];
        for (let i = 0; i < pokeDetail.abilities.length; i++) {
            const element = pokeDetail.abilities[i];
            ability.push(element.ability.name);
        }

        return ability.join(", ");
    }

    pokemon.number = pokeDetail.id;
    pokemon.name = pokeDetail.name;
    pokemon.height = pokeDetail.height;
    pokemon.weight = pokeDetail.weight;
    pokemon.abilities = getAbilities();
    pokemon.hp = pokeDetail.stats[0].base_stat;
    pokemon.attack = pokeDetail.stats[1].base_stat;
    pokemon.defense = pokeDetail.stats[2].base_stat;
    pokemon.sp_attack = pokeDetail.stats[3].base_stat;
    pokemon.sp_defense = pokeDetail.stats[4].base_stat;
    pokemon.speed = pokeDetail.stats[5].base_stat;

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
    const [type] = types

    pokemon.types = types
    pokemon.type = type;
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;

    return pokemon;
}

pokeApi.getPokemonDetail = (pokemon) => {
     return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = function(offset = 0, limit = 10) {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
}



