const setup = () => {

    let btnVerander = document.getElementById("btnVerander");

    btnVerander.addEventListener("click", Verander);
}
const Verander = () => {
    let txtInput = document.getElementById("txtInput").value;

    console.log(Spaties(txtInput))
}
const Spaties = (inputTekst) => {
    let input = inputTekst;
    input = input.replaceAll(" ", "");
    let nieuweTekst = "";
    for (let i = 0; i < input.length -1; i++){
        nieuweTekst += input.charAt(i) + " "
    }
    nieuweTekst += input.charAt(input.length-1)
    return nieuweTekst;
}
window.addEventListener("load", setup);
