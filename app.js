DOMSelectors = {
    form: document.querySelector("#form"),
    firstName: document.querySelector(".first-name"),
    h2s: document.querySelector("h2"),
};

DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault(),
    DOMSelectors.h2s.forEach(
    (header) => (header.textContent = DOMSelectors.firstName.value));
    }
);

