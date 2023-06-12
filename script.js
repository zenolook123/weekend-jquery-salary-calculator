$(document).ready(getReady)

      let monthlyTotal = 0
      

    function getReady(){

      monthlyTotal = (($('#monthly-total').text())* 1)
      checkMonthlyTotal

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

      
     
      $('#monthly-total').text((salary / 12) + monthlyTotal).toFixed(2)
      monthlyTotal = (($('#monthly-total').text())* 1).toFixed(2)

      checkMonthlyTotal()

      $('input[placeholder="First Name"]').val('');
      $('input[placeholder="Last Name"]').val('');
      $('input[placeholder="ID"]').val('');
      title = $('input[placeholder="Title"]').val('');
      $('input[placeholder="Annual Salary"]').val('');
    
    }
    )

    function checkMonthlyTotal() {
      if (monthlyTotal > 20000) {
        console.log(monthlyTotal)
        $("#bottom-div").replaceWith(`<div id = "bottom-div-r"><footer><h1>Total monthly: $<span id="monthly-total">${monthlyTotal}</span></h1></footer></div>`)
      }
      if (monthlyTotal < 20000) {
        console.log(monthlyTotal)
        $("#bottom-div-r").replaceWith(`<div id = "bottom-div"><footer><h1>Total monthly: $<span id="monthly-total">${monthlyTotal}</span></h1></footer></div>`)
      }
    }

  $('tbody').on("click", "#delete-button", deleteRow)
    }

    function deleteRow(){
      $(this).parent().parent().remove()
    }
  

  