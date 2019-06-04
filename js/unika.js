"use strict";

let sheetIdFire = "1ZH1V7zZcbu_jMtnCVHGFnQQWmUBT35u_C4XFoydxn3Y";
let sheetNumberFire = 3;
let sheetUrlFire = "https://spreadsheets.google.com/feeds/list/" + sheetIdFire + "/" + sheetNumberFire + "/public/full?alt=json";

fetch(sheetUrlFire)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    appendText(json.feed.entry);
    appendTopLeft(json.feed.entry);
    appendTopCenter(json.feed.entry);
    appendTopRight(json.feed.entry);
    appendCenterLeft(json.feed.entry);
    appendCenterCenter(json.feed.entry);
    appendCenterRight(json.feed.entry);
    appendBotLeft(json.feed.entry);
    appendBotCenter(json.feed.entry);
    appendBotRight(json.feed.entry);
  });

  function appendText(appendTexts) {
    let htmlTemplate = "";
    for (let appendText of appendTexts) {
      htmlTemplate += `
            <section class="wide-text">
              <h1>${appendText['gsx$titel']['$t']}</h1>
              <p>${appendText['gsx$textet']['$t']}</p>
              <p>${appendText['gsx$textto']['$t']}</p>
              <p>${appendText['gsx$texttre']['$t']}</p>
            </section>
          `;
    }
    document.querySelector("#appendText").innerHTML += htmlTemplate;
  }

function appendTopLeft(topLefts) {
  let htmlTemplate = "";
  for (let topLeft of topLefts) {
    htmlTemplate += `
          <section class="split-3" style="background:url('${topLeft['gsx$topleftbillede']['$t']}');background-size:cover;background-repeat: no-repeat;">
            <section class="split-3-text">
              <h2>${topLeft['gsx$topleft']['$t']}</h2>
            </section>
          </section>
        `;
  }
  document.querySelector("#topLeft").innerHTML += htmlTemplate;
}

function appendTopCenter(topCenters) {
  let htmlTemplate = "";
  for (let topCenter of topCenters) {
    htmlTemplate += `
          <section class="split-3" style="background:url('${topCenter['gsx$topcenterbillede']['$t']}');background-size:cover;background-repeat: no-repeat;">
            <section class="split-3-text">
              <h2>${topCenter['gsx$topcenter']['$t']}</h2>
            </section>
          </section>
        `;
  }
  document.querySelector("#topCenter").innerHTML += htmlTemplate;
}

function appendTopRight(topRights) {
  let htmlTemplate = "";
  for (let topRight of topRights) {
    htmlTemplate += `
          <section class="split-3" style="background:url('${topRight['gsx$toprightbillede']['$t']}');background-size:cover;background-repeat: no-repeat;">
            <section class="split-3-text">
              <h2>${topRight['gsx$topright']['$t']}</h2>
            </section>
          </section>
        `;
  }
  document.querySelector("#topRight").innerHTML += htmlTemplate;
}

function appendCenterLeft(centerLefts) {
  let htmlTemplate = "";
  for (let centerLeft of centerLefts) {
    htmlTemplate += `
          <section class="split-3" style="background:url('${centerLeft['gsx$centerleftbillede']['$t']}');background-size:cover;background-repeat: no-repeat;">
            <section class="split-3-text">
              <h2>${centerLeft['gsx$centerleft']['$t']}</h2>
            </section>
          </section>
        `;
  }
  document.querySelector("#centerLeft").innerHTML += htmlTemplate;
}

function appendCenterCenter(centerCenters) {
  let htmlTemplate = "";
  for (let centerCenter of centerCenters) {
    htmlTemplate += `
          <section class="split-3" style="background:url('${centerCenter['gsx$centercenterbillede']['$t']}');background-size:cover;background-repeat: no-repeat;">
            <section class="split-3-text">
              <h2>${centerCenter['gsx$centercenter']['$t']}</h2>
            </section>
          </section>
        `;
  }
  document.querySelector("#centerCenter").innerHTML += htmlTemplate;
}

function appendCenterRight(centerRights) {
  let htmlTemplate = "";
  for (let centerRight of centerRights) {
    htmlTemplate += `
          <section class="split-3" style="background:url('${centerRight['gsx$centerrightbillede']['$t']}');background-size:cover;background-repeat: no-repeat;">
            <section class="split-3-text">
              <h2>${centerRight['gsx$centerright']['$t']}</h2>
            </section>
          </section>
        `;
  }
  document.querySelector("#centerRight").innerHTML += htmlTemplate;
}

function appendBotLeft(botLefts) {
  let htmlTemplate = "";
  for (let botLeft of botLefts) {
    htmlTemplate += `
          <section class="split-3" style="background:url('${botLeft['gsx$botleftbillede']['$t']}');background-size:cover;background-repeat: no-repeat;">
            <section class="split-3-text">
              <h2>${botLeft['gsx$botleft']['$t']}</h2>
            </section>
          </section>
        `;
  }
  document.querySelector("#botLeft").innerHTML += htmlTemplate;
}

function appendBotCenter(botCenters) {
  let htmlTemplate = "";
  for (let botCenter of botCenters) {
    htmlTemplate += `
          <section class="split-3" style="background:url('${botCenter['gsx$botcenterbillede']['$t']}');background-size:cover;background-repeat: no-repeat;">
            <section class="split-3-text">
              <h2>${botCenter['gsx$botcenter']['$t']}</h2>
            </section>
          </section>
        `;
  }
  document.querySelector("#botCenter").innerHTML += htmlTemplate;
}

function appendBotRight(botRights) {
  let htmlTemplate = "";
  for (let botRight of botRights) {
    htmlTemplate += `
          <section class="split-3" style="background:url('${botRight['gsx$botrightbillede']['$t']}');background-size:cover;background-repeat: no-repeat;">
            <section class="split-3-text">
              <h2>${botRight['gsx$botright']['$t']}</h2>
            </section>
          </section>
        `;
  }
  document.querySelector("#botRight").innerHTML += htmlTemplate;
}
