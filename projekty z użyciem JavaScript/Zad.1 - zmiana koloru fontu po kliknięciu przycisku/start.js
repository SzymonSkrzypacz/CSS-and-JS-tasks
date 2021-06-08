// 1. Pobieramy wszystkie potrzebne elementy z DOM

const btnIncrease = document.querySelector(".bigger");
const btnDecrease = document.querySelector(".smaller");
const text = document.querySelector("p");

//1b - określamy potrzebne dane

let textSize = 20; //początkowa weilkość font-size dla p


//1c - paametry początkowe
text.style.fontSize = textSize + "px";
text.style.backgroundColor = "#ddd";


//3. Określenie akcji - napisanie funkcji

function textIncrease() {
    textSize++;
    text.style.fontSize = textSize + "px";
}

function textDecrease() {
    textSize--;
    text.style.fontSize = textSize + "px";
}

// 2. Ustawienie nasłuchiwania na przyciskach na kliknięcie
btnIncrease.addEventListener("click", textIncrease);
btnDecrease.addEventListener("click", textDecrease);