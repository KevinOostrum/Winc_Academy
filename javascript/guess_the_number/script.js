let naam;
let geradenNummer;
const min = 0;
const max = 25;
let randomNumber = Math.floor(Math.random() * (max - min)) + min;

if (naam === undefined || naam.length === 0) {
  naam = prompt("Welkom! Wat is je naam?");
}

alert("Hey " + naam);

geradenNummer = prompt("Voer een nummer in van 0 tot 25 om te beginnen met raden...")

while (isNaN(geradenNummer)) {
  geradenNummer = parseInt(prompt("deze invoer was geen nummer"));
}

while (geradenNummer !== randomNumber) {
  geradenNummer = parseInt(prompt("helaas, probeer het nog eens. voer een nieuw nummer in")) }

if (geradenNummer === randomNumber) {
    alert("Gefeliciteerd, je hebt het juiste nummer geraden. het nummer was " + randomNumber)
    alert("Dag " + naam + ". Tot de volgende keer")
  }