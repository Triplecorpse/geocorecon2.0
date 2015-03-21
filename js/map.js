function initialize() {
    var mapCanvas = document.getElementById('map-canvas');
    var viewCenter = new google.maps.LatLng(d.latitude.degrees, d.longitude.degrees);
    var mapOptions =
    {
        center: viewCenter,
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    if (d.latitude.degrees && d.longitude.degrees)
    {
        var marker = new google.maps.Marker({
            position: viewCenter,
            map: map,
            title: 'Hello World!'
        });
    }

}
google.maps.event.addDomListener(window, 'load', initialize);
