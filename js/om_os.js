
"use strict";

let sheetIdSeks = "1ZH1V7zZcbu_jMtnCVHGFnQQWmUBT35u_C4XFoydxn3Y";
let sheetNumberSeks = 6;
let sheetUrlSeks = "https://spreadsheets.google.com/feeds/list/" + sheetIdSeks + "/" + sheetNumberSeks + "/public/full?alt=json";

fetch(sheetUrlSeks)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    appendOmOsImage(json.feed.entry);
    appendOmOsImageTo(json.feed.entry);
  });

function appendOmOsImage(omOsImages) {
  let htmlTemplate = "";
  for (let omOsImage of omOsImages) {
    htmlTemplate += `
          <section class="om-os-wide" style="background:url('${omOsImage['gsx$topbillede']['$t']}');background-size:cover;background-repeat: no-repeat;">
          </section>
          <section class="wide-text">
            <h1>${omOsImage['gsx$overskriftet']['$t']}</h1>
            <p>${omOsImage['gsx$omoset']['$t']}</p>
            <p>${omOsImage['gsx$omosto']['$t']}</p>
            <h2>${omOsImage['gsx$omostitelto']['$t']}</h2>
            <p>${omOsImage['gsx$ommetteet']['$t']}</p>
            <p>${omOsImage['gsx$ommetteto']['$t']}</p>
          </section>
        `;
  }
  document.querySelector("#omOsBillede").innerHTML += htmlTemplate;
}

function appendOmOsImageTo(omOsImagesTo) {
  let htmlTemplate = "";
  for (let omOsImageTo of omOsImagesTo) {
    htmlTemplate += `
          <section class="om-os-wide" style="background:url('${omOsImageTo['gsx$bundbillede']['$t']}');background-size:cover;background-repeat: no-repeat;">
          </section>
        `;
  }
  document.querySelector("#omOsBilledeTo").innerHTML += htmlTemplate;
}
