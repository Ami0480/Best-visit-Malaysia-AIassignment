function showActivity(event) {
  event.preventDefault();

  new Typewriter("#answer", {
    strings: "activity",
    autoStart: true,
    delay: 30,
    cursor: "",
  });
}

let activityElement = document.querySelector("#search-form");
activityElement.addEventListener("submit", showActivity);
