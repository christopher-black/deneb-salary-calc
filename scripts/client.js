$(document).ready(readyNow);

function readyNow() {
  $('#submitBtn').on('click', submitClicked);
}

var averageSalary = 0;

function submitClicked() {
  console.log($('#salary').val());
  averageSalary += parseInt($('#salary').val());

  // Add to the table body
  var $tr = $('<tr></tr>'); // Create a new table row
  $tr.append('<td>' + $('#firstName').val() + '</td>');
  $tr.append('<td>' + $('#lastName').val() + '</td>');
  $tr.append('<td>' + $('#empId').val() + '</td>');
  $tr.append('<td>' + $('#jobTitle').val() + '</td>');
  $tr.append('<td>' + $('#salary').val() + '</td>');
  $('#output').append($tr);

  $('input').val('');

  $('#avgMonthlySalary').text('$' + calculateAverageSalary());
}

function calculateAverageSalary() {
  // Calculate the monthly average
  var avgMonthlySalary = averageSalary / 12;
  return avgMonthlySalary;
}
