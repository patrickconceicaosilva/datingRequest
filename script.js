let simbt = document.querySelector("#simbt");
let naobt = document.querySelector("#naobt");

function aceitou() {
    alert("Você aceitou namorar comigo!");
    window.open("https://www.youtube.com/watch?v=kQ2ZFVJNMs0", "_blank");
}

function randomNumber(min, max) {
    return Math.random() * (max - min) + min + "%";
}  

function desviar() {
    naobt.style.position = "absolute";
    naobt.style.right = randomNumber(0, 80);
    naobt.style.top = randomNumber(0, 80);
}


simbt.addEventListener("click", aceitou);
naobt.addEventListener("mouseover", desviar);