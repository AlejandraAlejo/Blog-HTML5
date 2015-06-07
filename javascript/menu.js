$(document).ready(function(){
    $(".menu span").click(function(){
        $(".menu ul ul").slideUp();
        if(! $(this).next().is(":visible")){
            $(this).next().slideDown();
        }
    })
})