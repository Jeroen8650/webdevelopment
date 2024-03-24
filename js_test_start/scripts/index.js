const setup = () => {
    let btnKip = document.getElementById("btnKopieer");
    btnKip.addEventListener("click", kip);
}

const kip = () => {
    let txtInput = document.getElementById("kip");
    let tekst = txtInput.value;
    document.getElementById("zin").innerHTML = tekst;
    console.log(tekst);


}
window.addEventListener("load", setup);