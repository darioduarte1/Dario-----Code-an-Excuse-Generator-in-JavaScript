let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

// Función para generar la excusa
function excuseGenerator() {
  let numWho = Math.floor(Math.random() * who.length);
  let numAction = Math.floor(Math.random() * action.length);
  let numWhat = Math.floor(Math.random() * what.length);
  let numWhen = Math.floor(Math.random() * when.length);

  return (
    who[numWho] +
    " " +
    action[numAction] +
    " " +
    what[numWhat] +
    " " +
    when[numWhen]
  );
}

// Función para asignar la excusa al elemento HTML
function assignExcuse() {
  const excuseElement = document.querySelector("#excuse");
  excuseElement.innerHTML = excuseGenerator(); // Asignar la excusa generada
}

// Asegurar que el código se ejecute después de que la página se cargue
document.addEventListener("DOMContentLoaded", assignExcuse);
