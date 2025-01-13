 var opinion1 = document.getElementById('opinion1');
        var opinion2 = document.getElementById('opinion2');
        var opinion3 = document.getElementById('opinion3');
                var opinion4 = document.getElementById('opinion4');
                        var opinion5 = document.getElementById('opinion5');
        var clickCount = 0;

        var clickRecordsContainer = document.getElementById('clickRecords');
        boton1.addEventListener('click', function () {
            clickCount++;
            var clickDateTime = new Date();
            var newRecord = document.createElement('p');
            newRecord.textContent = 'Clic ' + clickCount + ': ' + txtboton1 + '. ' + clickDateTime.toString();
            clickRecordsContainer.appendChild(newRecord);
        });
        boton2.addEventListener('click', function () {
            clickCount++;
            var clickDateTime = new Date();
            var newRecord = document.createElement('p');
            newRecord.textContent = 'Clic ' + clickCount + ': ' + txtboton2 + '. ' + clickDateTime.toString();
            clickRecordsContainer.appendChild(newRecord);
        });
        boton3.addEventListener('click', function () {
            clickCount++;
            var clickDateTime = new Date();
            var newRecord = document.createElement('p');
            newRecord.textContent = 'Clic ' + clickCount + ': ' + txtboton3 + '. ' + clickDateTime.toString();
            clickRecordsContainer.appendChild(newRecord);
        });
    </script>


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
