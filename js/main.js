
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

document.addEventListener('DOMContentLoaded', function() {
  init();
});

const config = {
  apiKey: "AIzaSyC4rLZZxvn14RDvK1SNMFHWy7IjKBmYWfo",
  authDomain: "bulow-duus.firebaseapp.com",
  databaseURL: "https://bulow-duus.firebaseio.com",
  projectId: "bulow-duus",
  storageBucket: "bulow-duus.appspot.com",
  messagingSenderId: "1023168250577",
  appId: "1:1023168250577:web:10e2fd444bec6da0"
};

firebase.initializeApp(config);
const database = firebase.database();

let selectedPostKey;
let selectedImgFile;
let posts = [];

function init() {

  readPosts();
}

// ------ CRUD operations ------ //

function readPosts() {
  firebase.database().ref('posts').on('value', function(snapshots) {
    let htmlTemplate = "";
    snapshots.forEach(function(snapshot) {
      let key = snapshot.key; // saves the key value in the variable key
      let post = snapshot.val(); // saves the data in the variable user
      post.key = key; // addes the key to my user object
      posts.push(post);
      htmlTemplate += `
      <section class="module-event-1" style="linear-gradient(
            rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)); background:url('${post.image}');background-size:cover;background-repeat: no-repeat;">
          <section class="cap-event-1"><h1>${post.title}</h1></span></section>
        <section class="cap-event-1">
          <p>${post.content}</p>
      </section>
    </div>
    `;
    });
    document.querySelector('#postFeed').innerHTML = htmlTemplate;
  });
}
