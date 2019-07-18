const url = "https://pokeapi.co/api/v2/pokemon/"
const bodyContent = document.getElementById("body-content");

function getPokemonName(number, callback) {
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

getPokemonName(136, (pokemonData) => {

    bodyContent.appendChild(document.createTextNode(pokemonData));
    console.log(pokemonData);
})