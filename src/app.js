window.onload = function() {
  document.querySelector("#btn_NE").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = newExcuse();
  });
};

let getRandomElement = arr => arr[Math.floor(Math.random() * arr.length)];

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

  return (
    getRandomElement(who) +
    " " +
    getRandomElement(what) +
    " " +
    getRandomElement(when)
  );
};
