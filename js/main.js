function initMap() {
    // ypur location
    const loc = {lat: -9.001626, lng: 13.258007};
    // center map on location
    const map = new google.maps.Map(document.querySelector('.map')
    ,{
        zoom: 14,
        center: loc
    });
    // the marker, position at location
    const market = new google.maps.Marker({position: loc, map:
         map});
}

// lat - latitude, lng - longetude

window.addEventListener('scroll', function() {
   if (window.scrollY > 150) {
       this.document.querySelector('#navbar').style.opacity = 0.9;
   } else{
    this.document.querySelector('#navbar').style.opacity = 1; 
   }
});

$('#navbar a, .btn').on('click', function (event) {
    if (this.hash !== '') {
        event.preventDefault();
        const hash = this.hash;
        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
}); 