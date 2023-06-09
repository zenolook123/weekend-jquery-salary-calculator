$(document).ready(getReady)

    function getReady(){
    $('#submit-button').click( function() {
      var firstName = $('input[placeholder="First Name"]').val();
      var lastName = $('input[placeholder="Last Name"]').val();
      var id = $('input[placeholder="ID"]').val();
      var title = $('input[placeholder="Title"]').val();
      var salary = $('input[placeholder="Annual Salary"]').val();
    
      var newTableRow = '<tr>' +
        '<td class="table-data-entry">' + firstName + '</td>' +
        '<td class="table-data-entry">' + lastName + '</td>' +
        '<td class="table-data-entry">' + id + '</td>' +
        '<td class="table-data-entry">' + title + '</td>' +
        '<td class="table-data-entry">' + salary + '</td>' +
        '<td id="delete-td"><button id="delete-button">Delete</button></td>' +
        '</tr>';
  
      $('table tbody').append(newTableRow);
    }
    )
    }
  