$(function() {
    loadAboutPage();
    
    $('#name').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, '#about') ).offset().top
    }, 500);
    return false;
});
    
});

function loadAboutPage() {
    $('#about').load("/aboutme.html");  
}


