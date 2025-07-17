//response to API call
function displayRecipe(response) {
  console.log("Recipe generated");
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "13o2bcb26t4d3e95f87ea28b60545401";
  let context =
    "You are a pastry chef expect and love to teach beginners about how to make mouth-watering pasteries using simple, and precise beginner friendly pastry recipes. Your mission is to generate not more than 15 lines of pastry recipes in basic HTML and seperate each line with a <br/>. Do not include the basic html or html word in your response. Make sure to follow the user instructions";
  let prompt = `User instructions are: generate a beginner recipe and tutorial guide about${instructionsInput.value}`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="generating">⏳ Generating recipe for ${instructionsInput.value}</div>`;

  //make a call to the API
  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
