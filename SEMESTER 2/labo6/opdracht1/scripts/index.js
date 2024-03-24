const setup = () => {
    change();
}

const change = () => {
    let paragrafen = document.querySelectorAll("p");
    let paragraaf = paragrafen[0];
    paragraaf.textContent = "Good job!";
}

window.addEventListener("load", setup);
