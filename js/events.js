"use strict";

let sheetId = "1ZH1V7zZcbu_jMtnCVHGFnQQWmUBT35u_C4XFoydxn3Y";
let sheetNumber = 5;
let sheetUrl = "https://spreadsheets.google.com/feeds/list/" + sheetId + "/" + sheetNumber + "/public/full?alt=json";

fetch(sheetUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    appendEventsEt(json.feed.entry);
    appendEventsTo(json.feed.entry);
  });

/*
Appends json data to the DOM
*/
function appendEventsEt(eventsEt) {
  console.log(eventsEt);
  let htmlTemplate = "";
  for (let eventEt of eventsEt) {
    htmlTemplate += `
        <section class="module-event-1" style="background:linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)),url('${eventEt['gsx$eventetbillede']['$t']}');background-size:cover;background-repeat: no-repeat;">
          <section class="cap-event-1">
            <h1>${eventEt['gsx$eventettitel']['$t']}</h1>
              <section class="cap-event-1">
                <p>${eventEt['gsx$eventettext']['$t']}</p>
              </section>
            </section>
      `;
  }
  document.querySelector("#eventEt").innerHTML += htmlTemplate;
}

function appendEventsTo(eventsTo) {
  console.log(eventsTo);
  let htmlTemplate = "";
  for (let eventTo of eventsTo) {
    htmlTemplate += `
        <section class="module-event-1" style="background:linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)),url('${eventTo['gsx$eventtobillede']['$t']}');background-size:cover;background-repeat: no-repeat;">
          <section class="cap-event-2">
            <h2>${eventTo['gsx$eventtotitel']['$t']}</h2>
            <p>${eventTo['gsx$eventtotekst']['$t']}</p>
            <p>${eventTo['gsx$eventtotekstto']['$t']}</p>
            <p>${eventTo['gsx$eventtoteksttre']['$t']}</p>
            <p>${eventTo['gsx$eventtotekstfire']['$t']}</p>
          </section>
        </section>
      `;
  }
  document.querySelector("#eventTo").innerHTML += htmlTemplate;
}
