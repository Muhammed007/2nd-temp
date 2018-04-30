function initialize() {
  var mapOptions = {
      zoom: 15,
      center: new google.maps.LatLng(52.647539, 19.057083),
      mapTypeControl: false,
      scrollwheel: false,
      draggable: true,
      panControl: true,
      zoomControl: false
};
  var map = new google.maps.Map(document.getElementById('mapka'), mapOptions);
  var stylez = [
        {
          featureType: "all",
          elementType: "all",
          stylers: [
            { saturation: -100 } // <-- THIS
          ]
        }
    ];
    var map = new google.maps.Map(document.getElementById("mapka"), mapOptions);

    var mapType = new google.maps.StyledMapType(stylez, { name:"Grayscale" });
    map.mapTypes.set('Grayscale', mapType);
    map.setMapTypeId('Grayscale');

    var contentString = '<b>Hello!</b>';

    var infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 200
    });

    var companyImage = new google.maps.MarkerImage('http://demo.themerart.net/newvision/assets/img/icon/marker.png',
      new google.maps.Size(50,50),
      new google.maps.Point(0,0),
      new google.maps.Point(25,25)
    );
    var companyPos = new google.maps.LatLng(52.647539, 19.057083);
    var companyMarker = new google.maps.Marker({
      position: companyPos,
      map: map,
      icon: companyImage,
      title:"mexxio.pl",
      zIndex: 3000});

    google.maps.event.addDomListener(window, "resize", function() {
      var center = map.getCenter();
      google.maps.event.trigger(map, "resize");
      map.setCenter(center);
    });

    infowindow.open(map,companyMarker);
    google.maps.event.addListener(companyMarker, 'click', function() {
      infowindow.open(map,companyMarker);
    });
}
function loadScript() {
  var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' + 'callback=initialize';
  document.body.appendChild(script);
}
window.onload = loadScript;

//loading-screen
$(window).on('load',function(){ 
   $("body").css("overflow","auto");
   $(".loading-overlay").fadeOut();
 });