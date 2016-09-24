// Jquery Smooth Scroll effect

$(document).ready(function(){
    $('a[href^="#"]').on('click',function(e){
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').animate({
            'scrollTop': $target.offset().top
        }, 1000, 'swing', function () {
            window.location.hash = target;
        });

        $('html, body').animate({
            'scrollTop' : $target.offset().top
        }, 1000, 'swing');
    });
});

// Google Maps API

function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(-36.8666487, 174.7579119), 
    zoom: 11
  }
  var map = new google.maps.Map(mapCanvas, mapOptions);
  
  var marker=new google.maps.Marker({
  position:LatLng,
  });

marker.setMap(map);
}

// Facebook API

(function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.7";
        fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));



function an1 (){if($('#page2').css('display') == 'block')
{
  
$('#page2').transition({
  perspective: '100px',
  rotate3d: '1,1,0,360deg',
  
});

}};

function an2 (){if($('#page3').css('display') == 'block')
{
  
$('#page3').transition({
  perspective: '100px',
  rotate3d: '1,1,0,360deg',
  
});

}};

function an3 (){if($('#page4').css('display') == 'block')
{
  
$('#page4').transition({
  perspective: '100px',
  rotate3d: '1,1,0,360deg',
  
});

}};

function an4 (){if($('#page5').css('display') == 'block')
{
  
$('#page5').transition({
  perspective: '100px',
  rotate3d: '1,1,0,360deg',
  
});

}};