"use strict";

let sheetIdTre = "1ZH1V7zZcbu_jMtnCVHGFnQQWmUBT35u_C4XFoydxn3Y";
let sheetNumberTre = 2;
let sheetUrlTre = "https://spreadsheets.google.com/feeds/list/" + sheetIdTre + "/" + sheetNumberTre + "/public/full?alt=json";

fetch(sheetUrlTre)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    appendProduktEt(json.feed.entry);
    appendProduktTo(json.feed.entry);
    appendTextProduktion(json.feed.entry);
  });

function appendTextProduktion(appendTextsProduktion) {
  let htmlTemplate = "";
  for (let appendTextProduktion of appendTextsProduktion) {
    htmlTemplate += `
            <section class="wide-text">
              <h1>${appendTextProduktion['gsx$produktionvelkomst']['$t']}</h1>
              <p>${appendTextProduktion['gsx$produktionbeskrivelse']['$t']}</p>
            </section>
          `;
  }
  document.querySelector("#appendText").innerHTML += htmlTemplate;
}

function appendProduktEt(produkterEt) {
  let htmlTemplate = "";
  for (let produktEt of produkterEt) {
    htmlTemplate += `
    <a href="unika.html">
        <section class="module" style="background:url('${produktEt['gsx$unikabillede']['$t']}');background-size:cover;background-repeat: no-repeat;">
          <section class="module-text">
            <h2>${produktEt['gsx$unikatekst']['$t']}</h2>
          </section>
        </section>
        </a>
      `;
  }
  document.querySelector("#produktEt").innerHTML += htmlTemplate;
}

function appendProduktTo(produkterTo) {
  let htmlTemplate = "";
  for (let produktTo of produkterTo) {
    htmlTemplate += `
    <a href="everyday.html">
        <section class="module" style="background:url('${produktTo['gsx$everydaybillede']['$t']}');background-size:cover;background-repeat: no-repeat;">
          <section class="module-text">
            <h2>${produktTo['gsx$everydaytekst']['$t']}</h2>
          </section>
        </section>
      </a>
      `;
  }
  document.querySelector("#produktTo").innerHTML += htmlTemplate;
}
