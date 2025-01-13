document;
buttonSend.getElementById("button-send");
buttonSend.addEventListener("submit", function (event) {
  event.preventDefault();

  const opinion1 = document.getElementById("opinion1").value;
  const opinion2 = document.getElementById("opinion2").value;
  const opinion3 = document.getElementById("opinion3").value;
  const opinion4 = document.getElementById("opinion4").value;
  const opinion5 = document.getElementById("opinion5").value;

  document.getElementById("containerGlobal").classList.add("hidden");
  document.getElementById("containerSencondary").classList.remove("hidden");

  showOpinion();
});

const box = document.querySelectorAll("#containerGlobal");

function showOpinion() {
  if (div.containerGlobal === "abierto") {
    div.containerGlobal = "";
  }
}

document.querySelectorAll(".button-send").forEach((button) => {
  button.addEventListener("click", showOpinion());
});
