// JavaScript - BurgerMenu
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

"use strict";

let sheetIdTo = "1ZH1V7zZcbu_jMtnCVHGFnQQWmUBT35u_C4XFoydxn3Y";
let sheetNumberTo = 7;
let sheetUrlTo = "https://spreadsheets.google.com/feeds/list/" + sheetIdTo + "/" + sheetNumberTo + "/public/full?alt=json";

fetch(sheetUrlTo)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    appendFooterSectionEt(json.feed.entry);
    appendFooterSectionTo(json.feed.entry);
    appendFooterSectionTre(json.feed.entry);
  });

function appendFooterSectionEt(sectionsEt) {
  let htmlTemplate = "";
  for (let sectionEt of sectionsEt) {
    htmlTemplate += `
              <h2>${sectionEt['gsx$firmanavn']['$t']}</h2>
              <p>${sectionEt['gsx$gadenavn']['$t']}<p/>
              <p>${sectionEt['gsx$kommune']['$t']}<p/>
              <p>${sectionEt['gsx$telefon']['$t']}<p/>
              <a href="mailto:${sectionEt['gsx$mail']['$t']}">${sectionEt['gsx$mail']['$t']}</a>
            `;
  }
  document.querySelector("#sectionEt").innerHTML += htmlTemplate;
}

function appendFooterSectionTo(sectionsTo) {
  let htmlTemplate = "";
  for (let sectionTo of sectionsTo) {
    htmlTemplate += `
              <h2>${sectionTo['gsx$åbningstider']['$t']}</h2>
              <p>${sectionTo['gsx$man-fre']['$t']}<p/>
              <p>${sectionTo['gsx$lørdag']['$t']}<p/>
              <p>${sectionTo['gsx$sønoghelligdage']['$t']}<p/>
            `;
  }
  document.querySelector("#sectionTo").innerHTML += htmlTemplate;
}

function appendFooterSectionTre(sectionsTre) {
  let htmlTemplate = "";
  for (let sectionTre of sectionsTre) {
    htmlTemplate += `
              <h2>${sectionTre['gsx$facebook']['$t']}</h2>
              <a href="${sectionTre['gsx$facebooklink']['$t']}"><img src="images/facebook.svg" alt="Bülow Duus Facebook"></a>
            `;
  }
  document.querySelector("#sectionTre").innerHTML += htmlTemplate;
}
