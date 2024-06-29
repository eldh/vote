const button1 = document.getElementById("alt1");
const button2 = document.getElementById("alt2");

button1.addEventListener("pointerdown", (event) => {
  handleButtonClick(event.currentTarget.textContent, button2.textContent);
});
button2.addEventListener("pointerdown", (event) => {
  handleButtonClick(event.currentTarget.textContent, button1.textContent);
});

function handleButtonClick(win, lose) {
  void sendResponse({ win, lose });
  assignRandomValues();
}

function sendResponse({ win, lose }) {
  void fetch(
    `https://first-thrush-35.hasura.app/api/rest/spel/${encodeURIComponent(
      win
    )}/${encodeURIComponent(lose)}`,
    { method: "POST" }
  );
}

function assignRandomValues() {
  let randomIndex1, randomIndex2;
  while (randomIndex1 === randomIndex2) {
    randomIndex1 = Math.floor(Math.random() * alternatives.length);
    randomIndex2 = Math.floor(Math.random() * alternatives.length);
  }
  button1.textContent = alternatives[randomIndex1];
  button2.textContent = alternatives[randomIndex2];
}

const alternatives = [
  'Åt höger innan dricka: "Snake Eyes"',
  "Åt höger innan dricka: Skryta om sig själv",
  "Åt höger innan dricka: Tillrättavisning",
  "Åt höger innan dricka: Utskällning",
  "Åt höger innan dricka: Komplimang om utseende",
  "Åt höger innan dricka: Komplimang om karaktär",
  "Åt höger innan dricka: Sexuell komplimang",
  "Dricka som en elefant",
  "När man dricker: Plocka bort en tomte från glaset",
  'När man dricker: Säga "skål" på valfritt språk',
  'När man dricker: Säga "För kung och fostervatten"',
  "När man dricker: Gör Hällsjöbos solställning",
  "När man dricker: Gör en grimas",
  'Säga före: "Hoppsan Kerstin, här var det lent"',
  'Säga före: "Nu är jag ingen expert, men…"',
  'Säga efter: "…som jag alltid brukar säga"',
  'Säga efter: "…det kan jag berätta för dig"',
  'Säga efter: "…är min ärliga åsikt"',
  'Säga efter: "…man är inte fullare än man gör sig…"',
  "Dialekt: Norrländska",
  "Dialekt: Göteborska",
  "Dialekt: Finska",
  "Dialekt: Norska",
  "Dialekt: Tyska",
  "Dialekt: Dalmål",
  "Man får inte använda namn",
  "Man får inte använda städer eller platser",
  "Man får inte använda siffror",
  "Man får inte använda kraftuttryck",
  "Man får inte använda engelska ord",
  "Man får inte använda franska låneord",
  "Man får inte peka",
  "Man får inte ha ögonkontakt",
  "Man får inte visa tänderna",
  "Man får inte svära",
  "Man får inte ha händerna över axlarna",
  "Man får inte luta sig tillbaka",
  'Sluta alla frågor med "Kan man fråga sig"',
  'Sluta alla frågor med "Är frågan vi alla borde ställa oss"',
  'Sluta alla frågor med "Skulle jag vilja veta"',
  'Sluta alla frågor med "Din gamla råtta"',
  'Sluta alla frågor med "Undrar pungen"',
  'Sluta alla frågor med "Frågetecken"',
  "Nya namn: Personen väljer varumärke",
  "Nya namn: Personens pappa",
  "Nya namn: Personen bestämmer själva",
  "Nya namn: Personen till höger",
  "Nya namn: Tärningskastaren bestämmer",
  "Nya namn: Personens bostadsort",
  "Man får inte säga: Jakande",
  "Man får inte säga: Nekande",
  'Man får inte säga "Du"',
  'Man får inte säga "Jag"',
  'Man får inte säga "Va?"',
  "Man får inte säga vald konsonant",
  "Läspa!",
  "Man får inte ställa ner drickat",
  "Aldrig tala sanning",
  "Alla byter plats",
  "Man spelar en person! Kastaren bestämmer.",
  "Den till vänster dricker när man själv dricker",
];

assignRandomValues();
