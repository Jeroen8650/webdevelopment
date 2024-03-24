
const setup = () => {
    let colorDemos=document.getElementsByClassName("colorDemo");
    let sliders = document.getElementsByClassName("slider");

    for(let i = 0; i < sliders.length; i++){
        sliders[i].addEventListener("input", update)
        sliders[i].addEventListener("change", update)
    }

    let button = document.getElementById("button");
    button.addEventListener("click", opslaan);
}

const update = () => {

    let colorDemos=document.getElementsByClassName("colorDemo");
    let sliders = document.getElementsByClassName("slider");

    let value1=sliders[0].value;
    let value2=sliders[1].value;
    let value3=sliders[2].value;

    let txtRed = document.getElementsByClassName("txtRed");
    let txtGreen = document.getElementsByClassName("txtGreen");
    let txtBlue = document.getElementsByClassName("txtBlue");


    txtRed[0].innerHTML = value1
    txtGreen[0].innerHTML = value2
    txtBlue[0].innerHTML = value3
    colorDemos[0].style.backgroundColor =`rgb(${value1}, ${value2}, ${value3})`;
}

const opslaan = () => {
    let element = document.createElement("div");
    let button = document.createElement("input");

    let red = document.getElementById("red").value;
    let green = document.getElementById("green").value;
    let blue = document.getElementById("blue").value;

    button.setAttribute('type', 'button');
    button.setAttribute('value', 'x');

    element.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    element.className = "colorDemo";
    element.appendChild(button);
    document.getElementById("opslaan").appendChild(element);
    button.addEventListener("click", verwijder);
}

const verwijder = (event) => {
    event.currentTarget.parentNode.remove();
}

window.addEventListener("load", setup);
