$( document ).ready(function() {
    // $('js--section-features').waypoints(function(direction){
    //    if(direction == "down"){
    //       $('nav').addClass('sticky');
    //    } else {
    //     $('nav').removeClass('sticky');        
    //    }
    // }, {
    //    offset: '60px;'
    // });

    $(".mission").click(function() {
        $('html,body').animate({
            scrollTop: $(".section-features").offset().top},
            'slow');
    });

    $(".aboutus").click(function() {
        $('html,body').animate({
            scrollTop: $(".section-beauty").offset().top},
            'slow');
    });

    $(".options").click(function() {
        $('html,body').animate({
            scrollTop: $(".section-options").offset().top},
            'slow');
    });

    $(".contactus").click(function() {
        $('html,body').animate({
            scrollTop: $(".section-form").offset().top},
            'slow');
    });

    $("animation").hover(
        function () {
          $('div.animation').addClass(' animate__animated animate__pulse');
        }
    );

    
$('.clickable').click(function(){     
  
 if($('.main-nav') === 'none'){
    $('.main-nav').css('display', 'inline-block');
 }else{
    $('.main-nav').css('display', 'none');
 }

})


    $(window).scroll(function() {   
        var scroll = $(window).scrollTop(); 

        if (scroll >= 500) {
            $("nav").addClass("sticky");
        } else {
            $("nav").removeClass("sticky");
        }
        
        console.log('scrolling')
    })
});