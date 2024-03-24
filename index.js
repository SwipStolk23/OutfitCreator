console.log("HelloWorld");

// deze variabelen selecteren de kledingstukken uit de HTML
let trui = document.querySelector("#hoodie");

let broek = document.querySelector("#broek");

let schoen = document.querySelector("#schoen");

// Dit zijn de Arrays die de paden naar de verschillende kledingstukken bevatten
const truiAfbeeldingen = [
  "img/balencihoodie.png",
  "img/guccihoodie.png",
  "img/loropianahoodie.png",
  "img/casablancahood.png",
];
const broekAfbeeldingen = [
  "img/balencipants.png",
  "img/guccisweatpants.png",
  "img/loropianasweatpants.png",
  "img/casablancabroek.png",
];

const schoenAfbeeldingen = [
  "img/balencishoe.png",
  "img/guccishoes.png",
  "img/lorpianaschoenv2.png",
  "img/casablancaschoen.png",
];

// deze variabelen houden bij waar in de array je op dat moment bent.
let truiIndex = 0;
let broekIndex = 0;
let schoenIndex = 0;

// chatGPT
// Prompt: maak een functie 'generateRandomoutfit()' om een willekeurig item uit de verschillende arrays te kiezen om zo een willekeurige outfit te maken.
// Deze functie zorgt er voor dat je een willekeurige outfit krijgt als je op shuffle drukt.
function generateRandomOutfit() {
  truiIndex = Math.floor(Math.random() * truiAfbeeldingen.length);
  broekIndex = Math.floor(Math.random() * broekAfbeeldingen.length);
  schoenIndex = Math.floor(Math.random() * schoenAfbeeldingen.length);

  trui.src = truiAfbeeldingen[truiIndex];
  broek.src = broekAfbeeldingen[broekIndex];
  schoen.src = schoenAfbeeldingen[schoenIndex];
}

//chatGPT
//prompt: zorg er voor dat als je op trui-afbeelding klikt de volgende afbeelding uit de array wordt weergegeven. is de truiindex groter dan of gelijk aan de lengte van de array moet deze terug gaan naar 0 zodat het lijstje weer van voor af aan begint.
// deze functies zorgen er voor dat je wisselt naar de volgende afbeelding in de array.
function wisselTrui() {
  truiIndex++;
  if (truiIndex >= truiAfbeeldingen.length) {
    truiIndex = 0;
  }
  trui.src = truiAfbeeldingen[truiIndex];
}

function wisselBroek() {
  broekIndex++;
  if (broekIndex >= broekAfbeeldingen.length) {
    broekIndex = 0;
  }
  broek.src = broekAfbeeldingen[broekIndex];
}

function wisselSchoen() {
  schoenIndex++;
  if (schoenIndex >= schoenAfbeeldingen.length) {
    schoenIndex = 0;
  }
  schoen.src = schoenAfbeeldingen[schoenIndex];
}

//Hier worden eventlisteners toegevoegd om te zorgen voor interactie tusen de gebruiker en de site.
trui.addEventListener("click", wisselTrui);
broek.addEventListener("click", wisselBroek);
schoen.addEventListener("click", wisselSchoen);
shuffle.addEventListener("click", generateRandomOutfit);
