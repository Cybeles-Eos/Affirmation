let btn = document.getElementById("btn");
let text = document.getElementById("placeholder");

btn.addEventListener("click", () => {
   // location.reload();
   fetch("https://api.allorigins.win/get?url=" + encodeURIComponent("https://www.affirmations.dev/"))
      .then(res => res.json())
      .then(data => {
      let json = JSON.parse(data.contents);
      text.innerText = json.affirmation;
      })
      .catch(err => console.error("Error:", err));
});

//   fetch("https://api.allorigins.win/get?url=" + encodeURIComponent("https://www.affirmations.dev/"))
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.error("Error:", err));

