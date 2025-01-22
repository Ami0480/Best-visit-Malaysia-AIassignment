function displayActivity(response) {
  new Typewriter("#answer", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function showActivity(event) {
  event.preventDefault();

  let searchFormInput = document.querySelector("#search-form-user");
  let apiKey = "25ba4b8ct7fc123o0c3d6fccfc118bbd";
  let prompt = `search about ${searchFormInput.value} in malaysia`;
  let context = `You are a knoledge of Malaysia. Provide 3 specific about ${searchFormInput.value}things to do in Malaysia and write separate line with <br />.  Use <div></div> each answer with <ul>,use <strong> element before ,. AmiCodes AI at the bottom with<strong> element`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let displayAnswerElement = document.querySelector("#answer");
  displayAnswerElement.classList.remove("hidden");
  displayAnswerElement.innerHTML = `<div class="blink">⏳ Searching your activities about ${searchFormInput.value}</div>`;

  axios.get(apiURL).then(displayActivity);
}

let activityElement = document.querySelector("#search-form");
activityElement.addEventListener("submit", showActivity);
