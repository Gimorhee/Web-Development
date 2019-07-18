const url = "https://dog.ceo/api/breeds/image/random";
const btn = document.querySelector(".btn");
const image = document.querySelector("#dog-image");


btn.addEventListener("click", getRandomDogImage)

function getRandomDogImage() {
    
    const XHR = new XMLHttpRequest();
    
    XHR.onreadystatechange = () => {
        if(XHR.readyState === 4) {
            if(XHR.status === 200) {
                const data = JSON.parse(XHR.responseText);

                randomImageSource(data.message);
            } else {
                console.log("There is an error!");
            }
        }
    }

    XHR.open("GET", url);
    XHR.send();
}


function randomImageSource(data) {
    image.setAttribute("src", data);
}
