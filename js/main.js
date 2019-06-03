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
let sheetNumberTo = 2;
let sheetUrlTo = "https://spreadsheets.google.com/feeds/list/" + sheetIdTo + "/" + sheetNumberTo + "/public/full?alt=json";
console.log(sheetUrlTo);

fetch(sheetUrlTo)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json);
    appendFooterSectionEt(json.feed.entry);
    appendFooterSectionTo(json.feed.entry);
    appendFooterSectionTre(json.feed.entry);
  });

function appendFooterSectionEt(sectionsEt) {
  console.log(sectionsEt);
  let htmlTemplate = "";
  for (let sectionEt of sectionsEt) {
    htmlTemplate += `
              <h2>${sectionEt['gsx$sectionettitel']['$t']}</h2>
              <p>${sectionEt['gsx$sectionettekstet']['$t']}<p/>
              <p>${sectionEt['gsx$sectionettekstto']['$t']}<p/>
              <p>${sectionEt['gsx$sectionetteksttre']['$t']}<p/>
              <p>${sectionEt['gsx$sectionettekstfire']['$t']}<p/>
            `;
  }
  document.querySelector("#sectionEt").innerHTML += htmlTemplate;
}

function appendFooterSectionTo(sectionsTo) {
  console.log(sectionsTo);
  let htmlTemplate = "";
  for (let sectionTo of sectionsTo) {
    htmlTemplate += `
              <h2>${sectionTo['gsx$sectiontotitel']['$t']}</h2>
              <p>${sectionTo['gsx$sectiontotekstet']['$t']}<p/>
              <p>${sectionTo['gsx$sectiontotekstto']['$t']}<p/>
              <p>${sectionTo['gsx$sectiontoteksttre']['$t']}<p/>
            `;
  }
  document.querySelector("#sectionTo").innerHTML += htmlTemplate;
}

function appendFooterSectionTre(sectionsTre) {
  console.log(sectionsTre);
  let htmlTemplate = "";
  for (let sectionTre of sectionsTre) {
    htmlTemplate += `
              <h2>${sectionTre['gsx$sectiontretitel']['$t']}</h2>
              <a href="${sectionTre['gsx$sectiontrelink']['$t']}"><img src="images/facebook.svg" alt="Bülow Duus Facebook"></a>
            `;
  }
  document.querySelector("#sectionTre").innerHTML += htmlTemplate;
}
