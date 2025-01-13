document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".circle-button");
  const submitButton = document.querySelector(".button-send");
  const thankYouContainer = document.getElementById("containerSecondary");
  const containerGlobal = document.getElementById("containerGlobal");
  let selectedRating = null;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => btn.classList.remove("selected"));
      button.classList.add("selected");
      selectedRating = button.getAttribute("data-value");
    });
  });

  submitButton.addEventListener("click", () => {
    if (selectedRating) {
      containerGlobal.style.display = "none";
      thankYouContainer.style.display = "flex";
      document.getElementById("selected-value").textContent = selectedRating;
    } else {
      alert("Por favor, selecciona una valoración antes de enviar.");
    }
  });
});
