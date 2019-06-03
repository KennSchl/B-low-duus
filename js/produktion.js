"use strict";

let sheetIdTre = "1ZH1V7zZcbu_jMtnCVHGFnQQWmUBT35u_C4XFoydxn3Y";
let sheetNumberTre = 3;
let sheetUrlTre = "https://spreadsheets.google.com/feeds/list/" + sheetIdTre + "/" + sheetNumberTre + "/public/full?alt=json";
console.log(sheetUrlTre);

fetch(sheetUrlTre)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json);
    appendProduktEt(json.feed.entry);
    appendProduktTo(json.feed.entry);
  });

function appendProduktEt(produkterEt) {
  console.log(produkterEt);
  let htmlTemplate = "";
  for (let produktEt of produkterEt) {
    htmlTemplate += `
    <a href="unika.html">
        <section class="module" style="background:url('${produktEt['gsx$produktetbillede']['$t']}');background-size:cover;background-repeat: no-repeat;">
          <section class="module-text">
            <h1>${produktEt['gsx$produktettext']['$t']}</h1>
          </section>
        </section>
        </a>
      `;
  }
  document.querySelector("#produktEt").innerHTML += htmlTemplate;
}

function appendProduktTo(produkterTo) {
  console.log(produkterTo);
  let htmlTemplate = "";
  for (let produktTo of produkterTo) {
    htmlTemplate += `
    <a href="everyday.html">
        <section class="module" style="background:url('${produktTo['gsx$produkttobillede']['$t']}');background-size:cover;background-repeat: no-repeat;">
          <section class="module-text">
            <h1>${produktTo['gsx$produkttotext']['$t']}</h1>
          </section>
        </section>
      </a>
      `;
  }
  document.querySelector("#produktTo").innerHTML += htmlTemplate;
}