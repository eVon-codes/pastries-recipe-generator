function generateRecipe(event) {
  event.preventDefault();
  new Typewriter("#recipe", {
    strings: "Perfect let's get right into it...",
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

let recipeElement = document.querySelector("#recipe-generator-form");
recipeElement.addEventListener("submit", generateRecipe);
