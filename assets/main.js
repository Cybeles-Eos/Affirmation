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

// Samples Without using proxy

// const pokemonAPI = "https://pokeapi.co/api/v2/pokemon/";
// getData();
// async function getData(){
//    try{
//       let name = "mewtwo";

//       let response = await fetch(pokemonAPI + name);
//       let data = await response.json();

//       console.log(data);
//       console.log(data.name);

//    }catch(error){
//       console.log(error);
//    }
// }