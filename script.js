$(document).ready(function(){
    $('.materialboxed').materialbox();
  });

$(document).ready(function() {

    $(".coding").mouseenter(function() {
        $(".coding-text").css("display", "block");
    });

    $(".coding").mouseleave(function() {
        $(".coding-text").css("display", "none");
    });

    $(".mbm").mouseenter(function() {
        $(".mbm-text").css("display", "block");
    });

    $(".mbm").mouseleave(function() {
        $(".mbm-text").css("display", "none");
    });

    $(".graphic-design").mouseenter(function() {
        $(".graphic-design-text").css("display", "block");
    });

    $(".graphic-design").mouseleave(function() {
        $(".graphic-design-text").css("display", "none");
    });


    // $(".womenbtn").click(function() {
    //     $("#men").css("display", "none");
    //     $(".menbtn").css("display", "inline-block");
    //     $("#women").css("display", "block");
    //     $(".womenbtn").css("display", "none");

    // });

    // $(".menbtn").click(function() {
    //     $("#men").css("display", "block");
    //     $(".womenbtn").css("display", "inline-block");
    //     $("#women").css("display", "none");
    //     $(".menbtn").css("display", "none");
    // });
});

$(document).ready(function() {
    $('.carousel.carousel-slider').carousel({
        fullWidth: true
    });

});

