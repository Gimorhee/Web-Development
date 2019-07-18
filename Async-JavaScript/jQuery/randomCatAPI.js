const url = "http://aws.random.cat/meow";
const image = $("#cat-image");
const btn = $(".btn");

btn.on("click", () => {
    $.getJSON(url)
    .done(updateCatImage)
    .fail(handleErrors)
});

const updateCatImage = res => {
    const imageSource = res.file;
    
    image.attr("src", res.file);
}

const handleErrors = err => {
    console.log("Something went wrong!")
}