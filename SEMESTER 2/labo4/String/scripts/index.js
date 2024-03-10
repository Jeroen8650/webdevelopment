const setup = () => {
    let leeftijd = 34;
    let intrest = 0.12;
    let isGevaarlijk=true;
    let nu = new Date();
    const print = (bericht) => {
        console.log(bericht);
    }
    console.log(typeof leeftijd);
    console.log(typeof intrest);
    console.log(typeof isGevaarlijk);
    console.log(typeof nu);
    console.log(typeof print);
}

window.addEventListener("load", setup);
