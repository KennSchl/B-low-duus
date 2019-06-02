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

"use strict";

let sheetIdFire = "1ZH1V7zZcbu_jMtnCVHGFnQQWmUBT35u_C4XFoydxn3Y";
let sheetNumberFire = 4;
let sheetUrlFire = "https://spreadsheets.google.com/feeds/list/" + sheetIdFire + "/" + sheetNumberFire + "/public/full?alt=json";
console.log(sheetUrlFire);

fetch(sheetUrlFire)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json);
    appendTopLeft(json.feed.entry);
  });

fetch(sheetUrlFire)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json);
    appendTopCenter(json.feed.entry);
  });

fetch(sheetUrlFire)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json);
    appendTopRight(json.feed.entry);
  });
fetch(sheetUrlFire)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json);
    appendCenterLeft(json.feed.entry);
  });
fetch(sheetUrlFire)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json);
    appendCenterCenter(json.feed.entry);
  });
fetch(sheetUrlFire)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json);
    appendCenterRight(json.feed.entry);
  });

fetch(sheetUrlFire)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json);
    appendBotLeft(json.feed.entry);
  });

fetch(sheetUrlFire)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json);
    appendBotCenter(json.feed.entry);
  });

fetch(sheetUrlFire)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json);
    appendBotRight(json.feed.entry);
  });

function appendTopLeft(topLefts) {
  console.log(topLefts);
  let htmlTemplate = "";
  for (let topLeft of topLefts) {
    htmlTemplate += `
          <section class="split-3" style="background:url('${topLeft['gsx$topleftbillede']['$t']}');background-size:cover;background-repeat: no-repeat;">
            <section class="split-3-text">
              <h1>${topLeft['gsx$topleft']['$t']}</h1>
            </section>
          </section>
        `;
  }
  document.querySelector("#topLeft").innerHTML += htmlTemplate;
}

function appendTopCenter(topCenters) {
  console.log(topCenters);
  let htmlTemplate = "";
  for (let topCenter of topCenters) {
    htmlTemplate += `
          <section class="split-3" style="background:url('${topCenter['gsx$topcenterbillede']['$t']}');background-size:cover;background-repeat: no-repeat;">
            <section class="split-3-text">
              <h1>${topCenter['gsx$topcenter']['$t']}</h1>
            </section>
          </section>
        `;
  }
  document.querySelector("#topCenter").innerHTML += htmlTemplate;
}

function appendTopRight(topRights) {
  console.log(topRights);
  let htmlTemplate = "";
  for (let topRight of topRights) {
    htmlTemplate += `
          <section class="split-3" style="background:url('${topRight['gsx$toprightbillede']['$t']}');background-size:cover;background-repeat: no-repeat;">
            <section class="split-3-text">
              <h1>${topRight['gsx$topright']['$t']}</h1>
            </section>
          </section>
        `;
  }
  document.querySelector("#topRight").innerHTML += htmlTemplate;
}

function appendCenterLeft(centerLefts) {
  console.log(centerLefts);
  let htmlTemplate = "";
  for (let centerLeft of centerLefts) {
    htmlTemplate += `
          <section class="split-3" style="background:url('${centerLeft['gsx$centerleftbillede']['$t']}');background-size:cover;background-repeat: no-repeat;">
            <section class="split-3-text">
              <h1>${centerLeft['gsx$centerleft']['$t']}</h1>
            </section>
          </section>
        `;
  }
  document.querySelector("#centerLeft").innerHTML += htmlTemplate;
}

function appendCenterCenter(centerCenters) {
  console.log(centerCenters);
  let htmlTemplate = "";
  for (let centerCenter of centerCenters) {
    htmlTemplate += `
          <section class="split-3" style="background:url('${centerCenter['gsx$centercenterbillede']['$t']}');background-size:cover;background-repeat: no-repeat;">
            <section class="split-3-text">
              <h1>${centerCenter['gsx$centercenter']['$t']}</h1>
            </section>
          </section>
        `;
  }
  document.querySelector("#centerCenter").innerHTML += htmlTemplate;
}

function appendCenterRight(centerRights) {
  console.log(centerRights);
  let htmlTemplate = "";
  for (let centerRight of centerRights) {
    htmlTemplate += `
          <section class="split-3" style="background:url('${centerRight['gsx$centerrightbillede']['$t']}');background-size:cover;background-repeat: no-repeat;">
            <section class="split-3-text">
              <h1>${centerRight['gsx$centerright']['$t']}</h1>
            </section>
          </section>
        `;
  }
  document.querySelector("#centerRight").innerHTML += htmlTemplate;
}

function appendBotLeft(botLefts) {
  console.log(botLefts);
  let htmlTemplate = "";
  for (let botLeft of botLefts) {
    htmlTemplate += `
          <section class="split-3" style="background:url('${botLeft['gsx$botleftbillede']['$t']}');background-size:cover;background-repeat: no-repeat;">
            <section class="split-3-text">
              <h1>${botLeft['gsx$botleft']['$t']}</h1>
            </section>
          </section>
        `;
  }
  document.querySelector("#botLeft").innerHTML += htmlTemplate;
}

function appendBotCenter(botCenters) {
  console.log(botCenters);
  let htmlTemplate = "";
  for (let botCenter of botCenters) {
    htmlTemplate += `
          <section class="split-3" style="background:url('${botCenter['gsx$botcenterbillede']['$t']}');background-size:cover;background-repeat: no-repeat;">
            <section class="split-3-text">
              <h1>${botCenter['gsx$botcenter']['$t']}</h1>
            </section>
          </section>
        `;
  }
  document.querySelector("#botCenter").innerHTML += htmlTemplate;
}

function appendBotRight(botRights) {
  console.log(botRights);
  let htmlTemplate = "";
  for (let botRight of botRights) {
    htmlTemplate += `
          <section class="split-3" style="background:url('${botRight['gsx$botrightbillede']['$t']}');background-size:cover;background-repeat: no-repeat;">
            <section class="split-3-text">
              <h1>${botRight['gsx$botright']['$t']}</h1>
            </section>
          </section>
        `;
  }
  document.querySelector("#botRight").innerHTML += htmlTemplate;
}

"use strict";

let sheetIdFem = "1ZH1V7zZcbu_jMtnCVHGFnQQWmUBT35u_C4XFoydxn3Y";
let sheetNumberFem = 5;
let sheetUrlFem = "https://spreadsheets.google.com/feeds/list/" + sheetIdFem + "/" + sheetNumberFem + "/public/full?alt=json";
console.log(sheetUrlFem);

fetch(sheetUrlFem)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json);
    appendTopLeftEveryday(json.feed.entry);
  });

fetch(sheetUrlFem)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json);
    appendTopCenterEveryday(json.feed.entry);
  });

fetch(sheetUrlFem)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json);
    appendTopRightEveryday(json.feed.entry);
  });
fetch(sheetUrlFem)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json);
    appendCenterLeftEveryday(json.feed.entry);
  });
fetch(sheetUrlFem)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json);
    appendCenterCenterEveryday(json.feed.entry);
  });
fetch(sheetUrlFem)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json);
    appendCenterRightEveryday(json.feed.entry);
  });

fetch(sheetUrlFem)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json);
    appendBotLeftEveryday(json.feed.entry);
  });

fetch(sheetUrlFem)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json);
    appendBotCenterEveryday(json.feed.entry);
  });

fetch(sheetUrlFem)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json);
    appendBotRightEveryday(json.feed.entry);
  });

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
  });

  function appendOmOsImage(omOsImages) {
    console.log(omOsImages);
    let htmlTemplate = "";
    for (let omOsImage of omOsImages) {
      htmlTemplate += `
          <section class="om-os-wide" style="background:url('${omOsImage['gsx$omosbillede']['$t']}');background-size:cover;background-repeat: no-repeat;">
          </section>
          <section class="om-os-text">
            <h2>${omOsImage['gsx$omostitelet']['$t']}</h2>
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
