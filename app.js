const DOMSelectors = {
    form: document.querySelector("#form"),
    name: document.querySelector(".pok-name"),
    type: document.querySelector(".pok-type"),
    url: document.querySelector(".url"),
}

function card (pokemon) {
    document.querySelector(".display").insertAdjacentHTML(
        "beforeend",
        `<div class="display-card"> 
        <h2>${pokemon.name.value}</h2> 
        <h3>${pokemon.type.value}</h3>  
        <img class="display-img" src="${pokemon.url.value}" alt=""> 
        <button class="remove-bn">Remove Pokemon</button> </div>`
        );
}

DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    card(DOMSelectors);
});

function removebutton () {
    let buttons = document.querySelectorAll(".remove-bn");
    console.log(buttons);
}
removebutton();