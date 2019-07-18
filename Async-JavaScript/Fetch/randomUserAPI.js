const url = "https://randomuser.me/api/";
const btn = document.querySelector("#btn");
const fullName = document.querySelector("#fullname");
const userName = document.querySelector("#username");
const email = document.querySelector("#email");
const city = document.querySelector("#city");
const image = document.querySelector("#avatar");

btn.addEventListener("click", () => {
    fetch(url)
    .then(handleErrors) 
    .then(parseJSON)
    .then(updateData)
    .catch(showErrors)
})

const handleErrors = res => {
    if(!res.ok) {
        throw Error(res.status);
    }

    return res;
}

const parseJSON = res => {
    return res.json();
}

const updateData = data => {
    const userInfo = data.results[0];

    fullName.innerHTML = `${userInfo.name.first} ${userInfo.name.last}`;
    userName.innerHTML = userInfo.login.username;
    email.innerHTML = userInfo.email;
    city.innerHTML = userInfo.location.city;
    image.setAttribute("src", userInfo.picture.medium);
}

const showErrors = err => {
    console.log("Something went wrong! your status code is: ", err);
}