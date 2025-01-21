function showActivity(event) {
  event.preventDefault();

  let answerElement = document.querySelector("#answer");
  answerElement.innerHTML = "hi";
}

let searchElement = document.querySelector("#submit-button");
searchElement.addEventListener("click", showActivity);
