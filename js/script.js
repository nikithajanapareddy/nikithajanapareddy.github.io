function initMap() {
    var myLatLng = {
        lat: 37.566138,
        lng: -122.318388
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: myLatLng
    });
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hello World!'
    });
}
$(document).ready(function() {
    var offsetHeight = 138;
    $('body').scrollspy({
        offset: offsetHeight
    });
    //var scrollPos = $('body > .container').find($(this).attr('href')).offset().top - (offsetHeight - 1);
    $('.bl-content1').css('display', 'none');
    $('.bl-icon-close1').each(function() {
        $(this).on('click', function(e) {
            e.stopImmediatePropagation();
            //Restore older state for current block
            $('.bl-expand .bl-content1').css('display', 'none');
            $('.bl-box1').css('display', 'block');
            $('.bl-expand').removeClass('bl-expand');
            //Restore older state for other blocks
            $('.projectRow').each(function() {
                $(this).css('display', 'block')
            });
            $('.projectRow').each(function() {
                $(this).addClass('stateFul')
            });
        });
    });
    $('.projectRow').each(function() {
        var $currentEl = $(this);
        $currentEl.click(function() {
            $(this).addClass("bl-expand");
            $(this).removeClass('stateFul');
            $('.bl-expand .bl-content1').css('display', 'block');
            $('.bl-expand .bl-box1').css('display', 'none');
            $('.stateFul').each(function() {
                $(this).css('display', 'none');
            });
        });
        //$currentEl.on('click',function()
        //expand class will have higher zindex and destination dimensions
        //});
    });
    $('.projectRow').each(function() {
        $(this).addClass('.stateFul');
    });
});
