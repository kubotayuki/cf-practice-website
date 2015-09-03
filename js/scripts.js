var myKitties = [
  {
    title: "HALCRO",
    pic: "img/halcro-620x560.jpg"    
  },
  {
    title: "Market Forces",
    pic: "img/mf-620x560.jpg"
  },
  {
    title: "Vecchio Jewellery",
    pic: "img/vecchio-620x560.jpg"
  },
  {
    title: "Sharca Organics",
    pic: "img/sharca-620x560.jpg"
  }
];


$(document).ready(function(){
  $('.message-box').css("background-color", "pink");
  $('#sendButton').on("click", function() {
    var comment = $('.message-box').val()
    console.log(comment);
    var infoMessage = "<p>Is this what you typed?</p>";
    $('#visible-comment').html(comment.toUpperCase() + infoMessage);

    console.log("clicked");
    return false;
  })

  $('.message-box').on('keyup', function() {
    console.log("key pushed");
    var charCount = $(".message-box").val().length;
    console.log(charCount);
    $("#charCount").html(charCount);
    if (charCount > 50) {
      console.log("exceeding 50 characters");
      $("#charCount").css("color", "red");
    } else {
      $("#charCount").css("color", "white");
    };
  });

  var rows = $('.my-row');
  console.log(rows);

  for (var i = 0; i < rows.length; ++i) {
    if (i % 2 === 0) {
      $(rows[i]).css("background-color", "#B6CFD6");
    };
  };
/*  var rows = $('.my-row'); 
  var i = 0;  
  while (i < rows.length) { 
    if (i % 2 === 0) { 
      $(rows[i]).css("background-color", "pink");  
    };
    i++
  }; */



  for(var i = 0; i < myKitties.length; ++i) {
    $("#" + i).css("background-image", "url(" + myKitties[i].pic + ")");
  };

  $(".portfolioImage").mouseenter( function () {
    console.log(this);
    $(this).html("<p class='info'><span class='proj-title'>" + myKitties[this.id].title + "</span></p>");
  }).mouseleave( function () {
      $("p.info").html("");
  });

  function initialize() {
    var mapOptions = {
      center: new google.maps.LatLng(-37.8147726,144.970242,14),
      zoom: 8 
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    var marker = new google.maps.Marker({
      position: map.getCenter(),
      map: map,
      title: 'Click to zoom'
    });
    google.maps.event.addListener(marker, 'click', function() {
      map.setZoom(15);
      map.setCenter(marker.getPosition());
    });
  };
  google.maps.event.addDomListener(window, 'load', initialize);

});