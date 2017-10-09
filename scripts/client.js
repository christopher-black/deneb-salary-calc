$(document).ready(readyNow);

function readyNow() {
  $('#submitBtn').on('click', submitClicked);
}

function submitClicked() {
  console.log($('#salary').val());
}
