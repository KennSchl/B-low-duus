
"use strict";

let sheetIdFem = "1ZH1V7zZcbu_jMtnCVHGFnQQWmUBT35u_C4XFoydxn3Y";
let sheetNumberFem = 4;
let sheetUrlFem = "https://spreadsheets.google.com/feeds/list/" + sheetIdFem + "/" + sheetNumberFem + "/public/full?alt=json";

fetch(sheetUrlFem)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    appendTextEveryday(json.feed.entry);
    appendTopLeftEveryday(json.feed.entry);
    appendTopCenterEveryday(json.feed.entry);
    appendTopRightEveryday(json.feed.entry);
    appendCenterLeftEveryday(json.feed.entry);
    appendCenterCenterEveryday(json.feed.entry);
    appendCenterRightEveryday(json.feed.entry);
    appendBotLeftEveryday(json.feed.entry);
    appendBotCenterEveryday(json.feed.entry);
    appendBotRightEveryday(json.feed.entry);
  });

  function appendTextEveryday(appendTextsEveryday) {
    let htmlTemplate = "";
    for (let appendTextEveryday of appendTextsEveryday) {
      htmlTemplate += `
            <section class="wide-text">
              <h1>${appendTextEveryday['gsx$titel']['$t']}</h1>
              <p>${appendTextEveryday['gsx$textet']['$t']}</p>
              <p>${appendTextEveryday['gsx$textto']['$t']}</p>
              <p>${appendTextEveryday['gsx$texttre']['$t']}</p>
            </section>
          `;
    }
    document.querySelector("#appendText").innerHTML += htmlTemplate;
  }

function appendTopLeftEveryday(topLeftsEveryday) {
  let htmlTemplate = "";
  for (let topLeftEveryday of topLeftsEveryday) {
    htmlTemplate += `
          <section class="split-3" style="background:url('${topLeftEveryday['gsx$toplefteverydaybillede']['$t']}');background-size:cover;background-repeat: no-repeat;">
            <section class="split-3-text">
              <h2>${topLeftEveryday['gsx$toplefteveryday']['$t']}</h2>
            </section>
          </section>
        `;
  }
  document.querySelector("#topLeftEveryday").innerHTML += htmlTemplate;
}

function appendTopCenterEveryday(topCentersEveryday) {
  let htmlTemplate = "";
  for (let topCenterEveryday of topCentersEveryday) {
    htmlTemplate += `
          <section class="split-3" style="background:url('${topCenterEveryday['gsx$topcentereverydaybillede']['$t']}');background-size:cover;background-repeat: no-repeat;">
            <section class="split-3-text">
              <h2>${topCenterEveryday['gsx$topcentereveryday']['$t']}</h2>
            </section>
          </section>
        `;
  }
  document.querySelector("#topCenterEveryday").innerHTML += htmlTemplate;
}

function appendTopRightEveryday(topRightsEveryday) {
  let htmlTemplate = "";
  for (let topRightEveryday of topRightsEveryday) {
    htmlTemplate += `
          <section class="split-3" style="background:url('${topRightEveryday['gsx$toprighteverydaybillede']['$t']}');background-size:cover;background-repeat: no-repeat;">
            <section class="split-3-text">
              <h2>${topRightEveryday['gsx$toprighteveryday']['$t']}</h2>
            </section>
          </section>
        `;
  }
  document.querySelector("#topRightEveryday").innerHTML += htmlTemplate;
}

function appendCenterLeftEveryday(centerLeftsEveryday) {
  let htmlTemplate = "";
  for (let centerLeftEveryday of centerLeftsEveryday) {
    htmlTemplate += `
          <section class="split-3" style="background:url('${centerLeftEveryday['gsx$centerlefteverydaybillede']['$t']}');background-size:cover;background-repeat: no-repeat;">
            <section class="split-3-text">
              <h2>${centerLeftEveryday['gsx$centerlefteveryday']['$t']}</h2>
            </section>
          </section>
        `;
  }
  document.querySelector("#centerLeftEveryday").innerHTML += htmlTemplate;
}

function appendCenterCenterEveryday(centerCentersEveryday) {
  let htmlTemplate = "";
  for (let centerCenterEveryday of centerCentersEveryday) {
    htmlTemplate += `
          <section class="split-3" style="background:url('${centerCenterEveryday['gsx$centercentereverydaybillede']['$t']}');background-size:cover;background-repeat: no-repeat;">
            <section class="split-3-text">
              <h2>${centerCenterEveryday['gsx$centercentereveryday']['$t']}</h2>
            </section>
          </section>
        `;
  }
  document.querySelector("#centerCenterEveryday").innerHTML += htmlTemplate;
}

function appendCenterRightEveryday(centerRightsEveryday) {
  let htmlTemplate = "";
  for (let centerRightEveryday of centerRightsEveryday) {
    htmlTemplate += `
          <section class="split-3" style="background:url('${centerRightEveryday['gsx$centerrighteverydaybillede']['$t']}');background-size:cover;background-repeat: no-repeat;">
            <section class="split-3-text">
              <h2>${centerRightEveryday['gsx$centerrighteveryday']['$t']}</h2>
            </section>
          </section>
        `;
  }
  document.querySelector("#centerRightEveryday").innerHTML += htmlTemplate;
}

function appendBotLeftEveryday(botLeftsEveryday) {
  let htmlTemplate = "";
  for (let botLeftEveryday of botLeftsEveryday) {
    htmlTemplate += `
          <section class="split-3" style="background:url('${botLeftEveryday['gsx$botlefteverydaybillede']['$t']}');background-size:cover;background-repeat: no-repeat;">
            <section class="split-3-text">
              <h2>${botLeftEveryday['gsx$botlefteveryday']['$t']}</h2>
            </section>
          </section>
        `;
  }
  document.querySelector("#botLeftEveryday").innerHTML += htmlTemplate;
}

function appendBotCenterEveryday(botCentersEveryday) {
  let htmlTemplate = "";
  for (let botCenterEveryday of botCentersEveryday) {
    htmlTemplate += `
          <section class="split-3" style="background:url('${botCenterEveryday['gsx$botcentereverydaybillede']['$t']}');background-size:cover;background-repeat: no-repeat;">
            <section class="split-3-text">
              <h2>${botCenterEveryday['gsx$botcentereveryday']['$t']}</h2>
            </section>
          </section>
        `;
  }
  document.querySelector("#botCenterEveryday").innerHTML += htmlTemplate;
}

function appendBotRightEveryday(botRightsEveryday) {
  let htmlTemplate = "";
  for (let botRightEveryday of botRightsEveryday) {
    htmlTemplate += `
          <section class="split-3" style="background:url('${botRightEveryday['gsx$botrighteverydaybillede']['$t']}');background-size:cover;background-repeat: no-repeat;">
            <section class="split-3-text">
              <h2>${botRightEveryday['gsx$botrighteveryday']['$t']}</h2>
            </section>
          </section>
        `;
  }
  document.querySelector("#botRightEveryday").innerHTML += htmlTemplate;
}
