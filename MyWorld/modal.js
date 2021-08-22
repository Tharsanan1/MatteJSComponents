
const modal = document.getElementById("myModal");

const span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function showAlert(content) {
  $('#model-content').empty();
  $('#model-content').append(content);
  modal.style.display = "flex";
}

function closeAlert() {
  modal.style.display = "none";
}