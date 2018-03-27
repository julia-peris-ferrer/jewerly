import $ from './jquery-3.3.1.min';

$(".close").on("click", function(){
    $(".advertisement").remove();
});

$(".advertisement").on("click", function(){
    $(this).remove();
});