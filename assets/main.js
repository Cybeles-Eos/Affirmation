let text = document.getElementById('placeholder');
let btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  btn.disabled = true; // disable while fetching
  getAffirmation();
});

let lastAffirmation = "";

function getAffirmation() {
  fetch("https://api.allorigins.win/get?url=" + encodeURIComponent("https://www.affirmations.dev/"), {
    cache: "no-store"
  })
  .then(response => response.json())
  .then(data => {
    let result = JSON.parse(data.contents);

    if (result.affirmation === lastAffirmation) {
      // If same as last, fetch again
      getAffirmation();
    } else {
      lastAffirmation = result.affirmation;

      // fade out, then change text, then fade in
      text.classList.add("fade-out");

      setTimeout(() => {
        text.innerText = result.affirmation;
        text.classList.remove("fade-out");
        btn.disabled = false; // re-enable after showing new one
      }, 600); // matches transition duration
    }
  })
  .catch(err => {
    console.error("Error fetching affirmation:", err);
    btn.disabled = false;
  });
}


//   fetch("https://api.allorigins.win/get?url=" + encodeURIComponent("https://www.affirmations.dev/"))
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.error("Error:", err));

