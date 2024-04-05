
let global = {
    IMAGE_COUNT:5,
    IMAGE_SIZE:48,
    IMAGE_PATH_PREFIX:"images/",
    IMAGE_PATH_SUFFIX:".png",

    MOVE_DELAY:3000,

    score: 0,
    timeoutid:0
}


const setup = () => {
    let btnStart = document.getElementById("btnStart");
    btnStart.addEventListener("click",start);

    let img = document.getElementById("bomb");
    img.addEventListener("click", clickedImg);
};

const start = () => {
    let btnStart = document.getElementById("btnStart");
    btnStart.className = "hide";
    setInterval(()=>console.log("new image"),1000);
    changeImg();
    moveImage();
}

const moveImage = () => {
    changeImg()
    let img = document.getElementById("bomb");
    let playfield=document.getElementById("playField");
    let maxLeft=playfield.clientWidth - global.IMAGE_SIZE;
    let maxHeight=playfield.clientHeight - global.IMAGE_SIZE;

    let left=Math.floor(Math.random()*maxLeft);
    let top=Math.floor(Math.random()*maxHeight);
    img.style.left=left+"px";
    img.style.top=top+"px";

    img.removeEventListener("click", clickedImg);
    img.addEventListener("click", clickedImg);

    clearTimeout(global.timeoutid);
    global.timeoutid = setTimeout(moveImage,global.MOVE_DELAY);
}

const changeImg = () =>{
    let img = document.getElementById("bomb");
    let randomImage = Math.floor(Math.random()*global.IMAGE_COUNT);
    img.src = global.IMAGE_PATH_PREFIX + randomImage + global.IMAGE_PATH_SUFFIX;
}
const clickedImg = () => {
    let output = document.getElementById("output");
    let img = document.getElementById("bomb");

    let source = img.src;
    let naamImg = source.substring(source.lastIndexOf("/") + 1);

    if(naamImg === "0.png"){
        stop();
    }else{
        global.score++;
        output.textContent = global.score;
        changeImg();
        moveImage();
    }
}

const stop = () => {
    clearTimeout(global.timeoutid);
    window.alert("Game over! jouw score is: " + global.score);
}



window.addEventListener("load", setup);
