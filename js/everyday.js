
"use strict";

let sheetIdFem = "1ZH1V7zZcbu_jMtnCVHGFnQQWmUBT35u_C4XFoydxn3Y";
let sheetNumberFem = 4;
let sheetUrlFem = "https://spreadsheets.google.com/feeds/list/" + sheetIdFem + "/" + sheetNumberFem + "/public/full?alt=json";
console.log(sheetUrlFem);

fetch(sheetUrlFem)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json);
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
    console.log(appendTextsEveryday);
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
  console.log(topLeftsEveryday);
  let htmlTemplate = "";
  for (let topLeftEveryday of topLeftsEveryday) {
    htmlTemplate += `
          <section class="split-3" style="background:url('${topLeftEveryday['gsx$toplefteverydaybillede']['$t']}');background-size:cover;background-repeat: no-repeat;">
            <section class="split-3-text">
              <h1>${topLeftEveryday['gsx$toplefteveryday']['$t']}</h1>
            </section>
          </section>
        `;
  }
  document.querySelector("#topLeftEveryday").innerHTML += htmlTemplate;
}

function appendTopCenterEveryday(topCentersEveryday) {
  console.log(topCentersEveryday);
  let htmlTemplate = "";
  for (let topCenterEveryday of topCentersEveryday) {
    htmlTemplate += `
          <section class="split-3" style="background:url('${topCenterEveryday['gsx$topcentereverydaybillede']['$t']}');background-size:cover;background-repeat: no-repeat;">
            <section class="split-3-text">
              <h1>${topCenterEveryday['gsx$topcentereveryday']['$t']}</h1>
            </section>
          </section>
        `;
  }
  document.querySelector("#topCenterEveryday").innerHTML += htmlTemplate;
}

function appendTopRightEveryday(topRightsEveryday) {
  console.log(topRightsEveryday);
  let htmlTemplate = "";
  for (let topRightEveryday of topRightsEveryday) {
    htmlTemplate += `
          <section class="split-3" style="background:url('${topRightEveryday['gsx$toprighteverydaybillede']['$t']}');background-size:cover;background-repeat: no-repeat;">
            <section class="split-3-text">
              <h1>${topRightEveryday['gsx$toprighteveryday']['$t']}</h1>
            </section>
          </section>
        `;
  }
  document.querySelector("#topRightEveryday").innerHTML += htmlTemplate;
}

function appendCenterLeftEveryday(centerLeftsEveryday) {
  console.log(centerLeftsEveryday);
  let htmlTemplate = "";
  for (let centerLeftEveryday of centerLeftsEveryday) {
    htmlTemplate += `
          <section class="split-3" style="background:url('${centerLeftEveryday['gsx$centerlefteverydaybillede']['$t']}');background-size:cover;background-repeat: no-repeat;">
            <section class="split-3-text">
              <h1>${centerLeftEveryday['gsx$centerlefteveryday']['$t']}</h1>
            </section>
          </section>
        `;
  }
  document.querySelector("#centerLeftEveryday").innerHTML += htmlTemplate;
}

function appendCenterCenterEveryday(centerCentersEveryday) {
  console.log(centerCentersEveryday);
  let htmlTemplate = "";
  for (let centerCenterEveryday of centerCentersEveryday) {
    htmlTemplate += `
          <section class="split-3" style="background:url('${centerCenterEveryday['gsx$centercentereverydaybillede']['$t']}');background-size:cover;background-repeat: no-repeat;">
            <section class="split-3-text">
              <h1>${centerCenterEveryday['gsx$centercentereveryday']['$t']}</h1>
            </section>
          </section>
        `;
  }
  document.querySelector("#centerCenterEveryday").innerHTML += htmlTemplate;
}

function appendCenterRightEveryday(centerRightsEveryday) {
  console.log(centerRightsEveryday);
  let htmlTemplate = "";
  for (let centerRightEveryday of centerRightsEveryday) {
    htmlTemplate += `
          <section class="split-3" style="background:url('${centerRightEveryday['gsx$centerrighteverydaybillede']['$t']}');background-size:cover;background-repeat: no-repeat;">
            <section class="split-3-text">
              <h1>${centerRightEveryday['gsx$centerrighteveryday']['$t']}</h1>
            </section>
          </section>
        `;
  }
  document.querySelector("#centerRightEveryday").innerHTML += htmlTemplate;
}

function appendBotLeftEveryday(botLeftsEveryday) {
  console.log(botLeftsEveryday);
  let htmlTemplate = "";
  for (let botLeftEveryday of botLeftsEveryday) {
    htmlTemplate += `
          <section class="split-3" style="background:url('${botLeftEveryday['gsx$botlefteverydaybillede']['$t']}');background-size:cover;background-repeat: no-repeat;">
            <section class="split-3-text">
              <h1>${botLeftEveryday['gsx$botlefteveryday']['$t']}</h1>
            </section>
          </section>
        `;
  }
  document.querySelector("#botLeftEveryday").innerHTML += htmlTemplate;
}

function appendBotCenterEveryday(botCentersEveryday) {
  console.log(botCentersEveryday);
  let htmlTemplate = "";
  for (let botCenterEveryday of botCentersEveryday) {
    htmlTemplate += `
          <section class="split-3" style="background:url('${botCenterEveryday['gsx$botcentereverydaybillede']['$t']}');background-size:cover;background-repeat: no-repeat;">
            <section class="split-3-text">
              <h1>${botCenterEveryday['gsx$botcentereveryday']['$t']}</h1>
            </section>
          </section>
        `;
  }
  document.querySelector("#botCenterEveryday").innerHTML += htmlTemplate;
}

function appendBotRightEveryday(botRightsEveryday) {
  console.log(botRightsEveryday);
  let htmlTemplate = "";
  for (let botRightEveryday of botRightsEveryday) {
    htmlTemplate += `
          <section class="split-3" style="background:url('${botRightEveryday['gsx$botrighteverydaybillede']['$t']}');background-size:cover;background-repeat: no-repeat;">
            <section class="split-3-text">
              <h1>${botRightEveryday['gsx$botrighteveryday']['$t']}</h1>
            </section>
          </section>
        `;
  }
  document.querySelector("#botRightEveryday").innerHTML += htmlTemplate;
}
