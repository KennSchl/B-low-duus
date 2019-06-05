"use strict";

let sheetIdTre = "1ZH1V7zZcbu_jMtnCVHGFnQQWmUBT35u_C4XFoydxn3Y";
let sheetNumberTre = 1;
let sheetUrlTre = "https://spreadsheets.google.com/feeds/list/" + sheetIdTre + "/" + sheetNumberTre + "/public/full?alt=json";

fetch(sheetUrlTre)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    appendHeaderImage(json.feed.entry);
    appendColumnEt(json.feed.entry);
    appendColumnTo(json.feed.entry);
    appendColumnTre(json.feed.entry);
  });

fetch(sheetUrlTre)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    appendProduktEt(json.feed.entry);
    appendProduktTo(json.feed.entry);
  });

function appendHeaderImage(headerImages) {
  let htmlTemplate = "";
  for (let headerImage of headerImages) {
    htmlTemplate += `
    <section class="module-wide" style="background:url('${headerImage['gsx$forsidebillede']['$t']}');background-size:cover;background-repeat: no-repeat;">
      <section class="module-wide-text">
        <h1>${headerImage['gsx$velkomsttekst']['$t']}</h1>
      </section>
    </section>
              `;
  }
  document.querySelector("#headerImage").innerHTML += htmlTemplate;
}

function appendColumnEt(columnsEt) {
  let htmlTemplate = "";
  for (let columnEt of columnsEt) {
    htmlTemplate += `
        <h2>${columnEt['gsx$kontaktos']['$t']}</h2>
        <p>${columnEt['gsx$telefon']['$t']}</p>
        <p>Mail:
          <a href="mailto:${columnEt['gsx$mail']['$t']}">${columnEt['gsx$mail']['$t']}</a>
        </p>
          `;
  }
  document.querySelector("#columnEt").innerHTML += htmlTemplate;
}

function appendColumnTo(columnsTo) {
  let htmlTemplate = "";
  for (let columnTo of columnsTo) {
    htmlTemplate += `
        <h2>${columnTo['gsx$åbningstider']['$t']}</h2>
        <p>${columnTo['gsx$man-fre']['$t']}</p>
        <p>${columnTo['gsx$lørdag']['$t']}</p>
        <p>${columnTo['gsx$sønoghelligdage']['$t']}</p>
        <p>${columnTo['gsx$andretidspunkter']['$t']}</p>
              `;
  }
  document.querySelector("#columnTo").innerHTML += htmlTemplate;
}

function appendColumnTre(columnsTre) {
  let htmlTemplate = "";
  for (let columnTre of columnsTre) {
    htmlTemplate += `
        <h2>${columnTre['gsx$adresse']['$t']}</h2>
        <p>${columnTre['gsx$gadenavn']['$t']}</p>
        <p>${columnTre['gsx$kommune']['$t']}</p>
              `;
  }
  document.querySelector("#columnTre").innerHTML += htmlTemplate;
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
