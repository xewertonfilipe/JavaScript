const menu = {
    selector: ".principal",
    active() {
        const menuElement = document.querySelector(this.selector);
        menuElement.classList.add("active");
    },
    init() {
        return this;
    }
}
console.log(menu.init());

menu.selector; //".principal";
menu.active(); // Adiciona a classe active ao menu;
menu.hasOwnProperty("selector"); // Verifica se a propriedade é do objeto. Retorna true ou false.

["10", "20", "30"].map(Number); // [10, 20, 30];
"JavaScript".toUpperCase(); // JavaScript
const body = document.querySelector("body");
body.classList.add("js"); // Adiciona a classe CSS "js" na tag Body;

function myFunction() {
    return this;
}

console.log(myFunction());