const url = "https://pokeapi.co/api/v2/pokemon/"
const bodyContent = document.getElementById("body-content");
let pokemonNumber = Math.floor(Math.random() * 999);

function getRandomPokemon(number, callback) {
    const XHR = new XMLHttpRequest();

    XHR.onreadystatechange = () => {
        if(XHR.readyState === 4) {
            if(XHR.status === 200) {
                const data = JSON.parse(XHR.responseText);

                callback(data.species.name);
            } else {
                callback("Error!");
            }
        }
    }

    XHR.open("GET", url + number);
    XHR.send();
}

getRandomPokemon(pokemonNumber, (pokemonData) => {

    bodyContent.appendChild(document.createTextNode(pokemonData[0].toUpperCase() + pokemonData.slice(1)));
    console.log(pokemonData);
})