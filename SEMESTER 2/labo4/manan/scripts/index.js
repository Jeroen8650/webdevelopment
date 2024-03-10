const setup = () => {
    let knop = document.getElementById("button");
    knop.addEventListener("click", an);
}

const an = () => {
    let Waarde = document.getElementById("string").value.toLowerCase();
    let atlAn = 0;

    Waarde = Waarde.trim();
    for (let i = 0; i < Waarde.length; i++) {
        if (Waarde.charAt(i) === "a" && Waarde.charAt(i+1) === "n"){
            atlAn++;
        }
    }

    console.log(atlAn);
}

window.addEventListener("load", setup);
