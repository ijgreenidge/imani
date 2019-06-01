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

    $('.materialboxed').materialbox();
});
