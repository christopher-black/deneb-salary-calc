$(document).ready(readyNow);

function readyNow() {
  $('#submitBtn').on('click', submitClicked);
}

var averageSalary = 0;

function submitClicked() {
  console.log($('#salary').val());
  averageSalary += parseInt($('#salary').val());
  $('#output').append('<p>$' + $('#salary').val() + '</p>');
  var avgMonthlySalary = averageSalary / 12;
  $('#avgMonthlySalary').text('$' + avgMonthlySalary);
}
