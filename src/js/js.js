




 $(function() {


  function calculateDistance(origin, destination) {
    var service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
    {
      origins: [origin],
      destinations: [destination],
      travelMode: google.maps.TravelMode.DRIVING,
      unitSystem: google.maps.UnitSystem.IMPERIAL,
      avoidHighways: false,
      avoidTolls: false
    }, callback);
  }

  function callback(response, status) {
    if (status != google.maps.DistanceMatrixStatus.OK) {
      $('#result').html(err);
    } else {
      var origin = response.originAddresses[0];
      var destination = response.destinationAddresses[0];
      if (response.rows[0].elements[0].status === "ZERO_RESULTS") {
        $('#result').html("Better get on a plane. There are no roads between " 
                          + origin + " and " + destination);
      } else {
        var distance = response.rows[0].elements[0].distance;
        var distance_value = distance.value;
        var distance_text = distance.text;
        var miles = distance_text.substring(0, distance_text.length * 3);
        $('#result').html("Una distancia de " + miles + " millas desde " + origin + " hasta " + destination);
      }
    }
  }



   function(response, status) {
        if (status == google.maps.DistanceMatrixStatus.OK && response.rows[0].elements[0].status != "ZERO_RESULTS") {
          var distance = response.rows[0].elements[0].distance.text;
          var dvDistance = document.getElementById("dvDistance");
          dvDistance.innerHTML = "";
          dvDistance.innerHTML += "Distance: " + distance + "<br />";

        } else {
          alert("Unable to find the distance via road.");
        }
        ele.style.display = "none";

      });
    }

    
  $('#distance_form').submit(function(e){
      event.preventDefault();
      var origin = $('#origin').val();
      var destination = $('#destination').val();
      var distance_text = calculateDistance(origin, destination);
  });
 
});


var scaleInterval = setInterval(function() {
  var scale = $(".gm-style-cc:not(.gmnoprint):contains(' km')");
  if (scale.length) {
    scale.click();
    clearInterval(scaleInterval);
  }
}, 100);


