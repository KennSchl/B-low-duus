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

let sheetId = "1ZH1V7zZcbu_jMtnCVHGFnQQWmUBT35u_C4XFoydxn3Y";
let sheetNumber = 1;
let sheetUrl = "https://spreadsheets.google.com/feeds/list/" + sheetId + "/" + sheetNumber + "/public/full?alt=json";
console.log(sheetUrl);

fetch(sheetUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json);
    appendEventsEt(json.feed.entry);
  });

fetch(sheetUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json);
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
        <section class="module-event-1" style="background:url('${eventEt['gsx$eventetbillede']['$t']}');background-size:cover;background-repeat: no-repeat;">
          <section class="cap-event-1">
            <h1>${eventEt['gsx$eventettitel']['$t']}</h1>
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
        <section class="module-event-2" style="background:url('${eventTo['gsx$eventtobillede']['$t']}');background-size:cover;background-repeat: no-repeat;">
          <section class="cap-event-2">
            <h1>${eventTo['gsx$eventtotitel']['$t']}</h1>
            <p>${eventTo['gsx$eventtotekst']['$t']}</p>
            <p>${eventTo['gsx$eventtotekstto']['$t']}</p>
            <p>${eventTo['gsx$eventtoteksttre']['$t']}</p>
            <p>${eventTo['gsx$eventtotekstfire']['$t']}</p>
          </section>
      `;
  }
  document.querySelector("#eventTo").innerHTML += htmlTemplate;
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
  });

fetch(sheetUrlTo)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json);
    appendFooterSectionTo(json.feed.entry);
  });

fetch(sheetUrlTo)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json);
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
              <a href="${sectionTre['gsx$sectiontrelink']['$t']}"><img src="images/facebook-logo.svg" alt="Bülow Duus Facebook"></a>
            `;
  }
  document.querySelector("#sectionTre").innerHTML += htmlTemplate;
}

"use strict";

let sheetIdTre = "1ZH1V7zZcbu_jMtnCVHGFnQQWmUBT35u_C4XFoydxn3Y";
let sheetNumberTre = 3;
let sheetUrlTre = "https://spreadsheets.google.com/feeds/list/" + sheetIdTre + "/" + sheetNumberTre + "/public/full?alt=json";
console.log(sheetUrlTre);

fetch(sheetUrlTre)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json);
    appendHeaderImage(json.feed.entry);
  });

fetch(sheetUrlTre)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json);
    appendColumnEt(json.feed.entry);
  });

fetch(sheetUrlTre)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json);
    appendColumnTo(json.feed.entry);
  });

fetch(sheetUrlTre)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json);
    appendColumnTre(json.feed.entry);
  });

fetch(sheetUrlTre)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json);
    appendProduktEt(json.feed.entry);
  });

  fetch(sheetUrlTre)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      console.log(json);
      appendProduktTo(json.feed.entry);
    });

function appendHeaderImage(headerImages) {
  console.log(headerImages);
  let htmlTemplate = "";
  for (let headerImage of headerImages) {
    htmlTemplate += `
          <img src="${headerImage['gsx$heroimage']['$t']}">
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
        <section class="module-left" style="background:url('${produktEt['gsx$produktetbillede']['$t']}');background-size:cover;background-repeat: no-repeat;">
          <section class="module-left-text">
            <h1>${produktEt['gsx$produktettext']['$t']}</h1>
          </section>
        </section>
      `;
  }
  document.querySelector("#produktEt").innerHTML += htmlTemplate;
}
function appendProduktTo(produkterTo) {
  console.log(produkterTo);
  let htmlTemplate = "";
  for (let produktTo of produkterTo) {
    htmlTemplate += `
        <section class="module-right" style="background:url('${produktTo['gsx$produkttobillede']['$t']}');background-size:cover;background-repeat: no-repeat;">
          <section class="module-right-text">
            <h1>${produktTo['gsx$produkttotext']['$t']}</h1>
          </section>
        </section>
      `;
  }
  document.querySelector("#produktTo").innerHTML += htmlTemplate;
}
