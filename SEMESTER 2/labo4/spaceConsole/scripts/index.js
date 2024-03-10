const setup = () => {
    let button = document.getElementById("button");
    button.addEventListener("click", space);
}

const space = () => {
    let Waarde = document.getElementById("string").value;
    let stringSpaties = "";
        Waarde = Waarde.replaceAll(" ", "");
    for (let i = 0; i < Waarde.length; i++) {
        if (i === Waarde.length){
            stringSpaties += Waarde.charAt(i);
        } else {
            stringSpaties += Waarde.charAt(i) + " ";

        }
    }

    console.log(stringSpaties);
}

window.addEventListener("load", setup);
