"use strict";

let sheetIdTre = "1ZH1V7zZcbu_jMtnCVHGFnQQWmUBT35u_C4XFoydxn3Y";
let sheetNumberTre = 1;
let sheetUrlTre = "https://spreadsheets.google.com/feeds/list/" + sheetIdTre + "/" + sheetNumberTre + "/public/full?alt=json";
console.log(sheetUrlTre);

fetch(sheetUrlTre)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json);
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
    console.log(json);
    appendProduktEt(json.feed.entry);
    appendProduktTo(json.feed.entry);
  });

function appendHeaderImage(headerImages) {
  console.log(headerImages);
  let htmlTemplate = "";
  for (let headerImage of headerImages) {
    htmlTemplate += `
    <section class="module-wide" style="background:url('${headerImage['gsx$heroimage']['$t']}');background-size:cover;background-repeat: no-repeat;">
      <section class="module-wide-text">
        <h1>${headerImage['gsx$heroimagetext']['$t']}</h1>
      </section>
    </section>
              `;
  }
  document.querySelector("#headerImage").innerHTML += htmlTemplate;
}

function appendColumnEt(columnsEt) {
  console.log(columnsEt);
  let htmlTemplate = "";
  for (let columnEt of columnsEt) {
    htmlTemplate += `
        <h2>${columnEt['gsx$columnetoverskrift']['$t']}</h2>
        <p>${columnEt['gsx$columnettextet']['$t']}</p>
        <p>${columnEt['gsx$columnettextto']['$t']}</p>
          `;
  }
  document.querySelector("#columnEt").innerHTML += htmlTemplate;
}

function appendColumnTo(columnsTo) {
  console.log(columnsTo);
  let htmlTemplate = "";
  for (let columnTo of columnsTo) {
    htmlTemplate += `
        <h2>${columnTo['gsx$columntooverskrift']['$t']}</h2>
        <p>${columnTo['gsx$columntotextet']['$t']}</p>
        <p>${columnTo['gsx$columntotextto']['$t']}</p>
        <p>${columnTo['gsx$columntotexttre']['$t']}</p>
        <p>${columnTo['gsx$columntotextfire']['$t']}</p>
              `;
  }
  document.querySelector("#columnTo").innerHTML += htmlTemplate;
}

function appendColumnTre(columnsTre) {
  console.log(columnsTre);
  let htmlTemplate = "";
  for (let columnTre of columnsTre) {
    htmlTemplate += `
        <h2>${columnTre['gsx$columntreoverskrift']['$t']}</h2>
        <p>${columnTre['gsx$columntretextet']['$t']}</p>
        <p>${columnTre['gsx$columntretextto']['$t']}</p>
              `;
  }
  document.querySelector("#columnTre").innerHTML += htmlTemplate;
}

function appendProduktEt(produkterEt) {
  console.log(produkterEt);
  let htmlTemplate = "";
  for (let produktEt of produkterEt) {
    htmlTemplate += `
    <a href="unika.html">
        <section class="module" style="background:url('${produktEt['gsx$produktetbillede']['$t']}');background-size:cover;background-repeat: no-repeat;">
          <section class="module-text">
            <h2>${produktEt['gsx$produktettext']['$t']}</h2>
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
            <h2>${produktTo['gsx$produkttotext']['$t']}</h2>
          </section>
        </section>
      </a>
      `;
  }
  document.querySelector("#produktTo").innerHTML += htmlTemplate;
}
