
"use strict";

let sheetIdSeks = "1ZH1V7zZcbu_jMtnCVHGFnQQWmUBT35u_C4XFoydxn3Y";
let sheetNumberSeks = 6;
let sheetUrlSeks = "https://spreadsheets.google.com/feeds/list/" + sheetIdSeks + "/" + sheetNumberSeks + "/public/full?alt=json";
console.log(sheetUrlSeks);

fetch(sheetUrlSeks)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json);
    appendOmOsImage(json.feed.entry);
    appendOmOsImageTo(json.feed.entry);
  });

function appendOmOsImage(omOsImages) {
  console.log(omOsImages);
  let htmlTemplate = "";
  for (let omOsImage of omOsImages) {
    htmlTemplate += `
          <section class="wide-text" style="background:url('${omOsImage['gsx$omosbillede']['$t']}');background-size:cover;background-repeat: no-repeat;">
          </section>
          <section class="wide-text">
            <h1>${omOsImage['gsx$omostitelet']['$t']}</h1>
            <p>${omOsImage['gsx$omostextet']['$t']}</p>
            <p>${omOsImage['gsx$omostextto']['$t']}</p>
            <h2>${omOsImage['gsx$omostitelto']['$t']}</h2>
            <p>${omOsImage['gsx$omostexttre']['$t']}</p>
            <p>${omOsImage['gsx$omostextfire']['$t']}</p>
          </section>
        `;
  }
  document.querySelector("#omOsBillede").innerHTML += htmlTemplate;
}

function appendOmOsImageTo(omOsImagesTo) {
  console.log(omOsImagesTo);
  let htmlTemplate = "";
  for (let omOsImageTo of omOsImagesTo) {
    htmlTemplate += `
          <section class="om-os-wide" style="background:url('${omOsImageTo['gsx$omosbilledeto']['$t']}');background-size:cover;background-repeat: no-repeat;">
          </section>
        `;
  }
  document.querySelector("#omOsBilledeTo").innerHTML += htmlTemplate;
}
