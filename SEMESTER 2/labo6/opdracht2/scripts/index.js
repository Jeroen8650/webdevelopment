const setup = () => {
    let lijst = document.querySelectorAll('li');
    for(let i = 0; i < lijst.length; i++){
        lijst[i].classList.add('listitem');
        let afbeelding = document.createElement('img');
        afbeelding.src = 'images/foto.jpg';
        document.body.appendChild(afbeelding);
    }
}
window.addEventListener("load", setup);
