window.onload = function() {
  document.querySelector("#btn_NE").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = newExcuse();
  });
};
let newExcuse = () => {
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  var rdmvaleu1 = Math.floor(Math.random() * who.length);
  var rdmvaleu2 = Math.floor(Math.random() * what.length);
  var rdmvaleu3 = Math.floor(Math.random() * when.length);

  return who[rdmvaleu1] + " " + what[rdmvaleu2] + " " + when[rdmvaleu3];
};
