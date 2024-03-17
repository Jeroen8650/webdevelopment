
const setup = () => {
    let button = document.getElementById("button")
    button.addEventListener("click", verander)
}

const verander = () => {
    let string = document.getElementById("string").value;
    string.trim();
    let woorden = string.split(" ");
    let nieuweZin = "";
    for (let i = 0; i < woorden.length; i++){
        if (woorden[i] === "De"){
            nieuweZin += "Het ";
        } else if (woorden[i] === "Het"){
            nieuweZin += "De ";
        } else if (woorden[i] === "het"){
            nieuweZin += "de ";
        } else if (woorden[i] === "de"){
            nieuweZin += "het ";
        } else {
            nieuweZin += woorden[i] + " ";
        }
    }
    nieuweZin.trim();
    console.log(nieuweZin);
}

window.addEventListener("load", setup);
