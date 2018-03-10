
$(document).ready(function (){
    
    
    $('#navlogo').hide();
    $('#nav-list').hide();
    $(function () {
      $(window).scroll(function() {
        if ($(this).scrollTop() > 1){  
            $('#top-header').addClass("sticky");
            $('#nav-list').addClass("nav-sticky");
            $('#nav-list').fadeIn("fast");
            $('#navlogo').fadeIn("fast");
            $('#arrow').hide();
        }
        else{
            $('#top-header').removeClass("sticky");
            $('#nav-list').hide();
            $('#navlogo').hide();
            $('#arrow').fadeIn("fast");
        }
      });
    });
  
  //navbar錨點初始化
  $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
  });
  // create a LatLng object containing the coordinate for the center of the map

    var latlng = new google.maps.LatLng(24.794725,120.993232);

      
    var mapOptions = {
      center: latlng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      navigationControl: true,
      mapTypeControl: false,
      scrollwheel: false,
      disableDoubleClickZoom: true
    };
    var map = new google.maps.Map(document.getElementById('google_map'),mapOptions);

    var marker1 = new google.maps.Marker({
    position: latlng, map: map
  });
  // add listener for a click on the pin

  google.maps.event.addListener(marker1, 'click', function() {
    infowindow.open(map, marker1);
  });


  // add information window

  var infowindow = new google.maps.InfoWindow({
    content:  '<div class="info"><strong>初練在這</div>'
  }); 


  var $container = $('.isotope').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows',
    getSortData: {
      name: '.name',
      symbol: '.symbol',
      number: '.number parseInt',
      category: '[data-category]',
      weight: function( itemElem ) {
        var weight = $( itemElem ).find('.weight').text();
        return parseFloat( weight.replace( /[\(\)]/g, '') );
      }
    }
  });
  $(function() {
      // Isotope stuff...
      $container.isotope({filter: '.Co-Curator'});
      // more Isotope stuff...
  });
  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
      var number = $(this).find('.number').text();
      return parseInt( number, 10 ) > 50;
    },
    // show if name ends with -ium
    ium: function() {
      var name = $(this).find('.name').text();
      return name.match( /ium$/ );
    }
  };

  // bind filter button click
  $('#filters').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[ filterValue ] || filterValue;
    $container.isotope({ filter: filterValue });
  });
  
  // change is-checked class on buttons
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });

});
$(document).ready(function() {
    $('#fullpage').fullpage();
});


$(window).bind('load', function () {
  parallaxInit();             
});
