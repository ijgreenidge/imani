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

    $(".experience").mouseenter(function() {
        $(".experience-text").css("display", "block");
    });

    $(".experience").mouseleave(function() {
        $(".experience-text").css("display", "none");
    });

    $('.materialboxed').materialbox();
});
