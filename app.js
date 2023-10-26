const DOMSelectors = {
    form: document.querySelector("#form"),
    name: document.querySelector(".pok-name"),
    type: document.querySelector(".pok-type"),
    url: document.querySelector(".url"),
}

function addCard(DOMSelectors) {
    document.querySelector(".display").insertAdjacentHTML(
        "beforeend",
        `<div class="display-card"> 
        <h2>${DOMSelectors.name.value}</h2> 
        <h3>${DOMSelectors.type.value}</h3>  
        <img class="display-img" src="${DOMSelectors.url.value}" alt=""> 
        <button class="remove-bn">Remove Pokemon</button> </div>`
        );
}

DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    addCard(DOMSelectors);
});
